import * as z from "zod";
import {
  createCookieSessionStorage,
  Session as CookieSession,
} from "@remix-run/node";

import { config } from "./config.server";
import * as auth from "./auth.server";
import { parseBrieflyJWT } from "./jwt.server";

const CookieSessionSchema: z.Schema<CookieSession> = z.any() as any;

type GuestSession = {
  email: undefined;
  userUID: undefined;
  accessToken: undefined;
  refreshToken: undefined;
  cookie: CookieSession;
};

const userSessionSchema = z.object({
  email: z.string(),
  userUID: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
  cookie: CookieSessionSchema,
});

type UserSession = z.infer<typeof userSessionSchema>;

type Session = GuestSession | UserSession;

const store = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [config.COOKIE_SECRET],
    sameSite: "lax",
    httpOnly: true,
    secure: false,
    path: "/",
    // Set session expiration to 5 days
    maxAge: 60 * 60 * 24 * 5,
  },
});

const getSession = async (request: Request): Promise<Session> => {
  const cookie = await store.getSession(request.headers.get("Cookie"));

  const email = cookie.get("email");
  const accessToken = cookie.get("accessToken");
  const refreshToken = cookie.get("refreshToken");

  const claims = parseBrieflyJWT(accessToken);
  if (claims instanceof Error) {
    if (refreshToken) {
      const nextSession = await auth.refreshToken({ refreshToken });
      console.log({ nextSession });
      if (nextSession instanceof Error) {
        throw nextSession;
      }
      return nextSession;
    }
    return {
      email: undefined,
      userUID: undefined,
      accessToken: undefined,
      refreshToken: undefined,
      cookie,
    };
  } else {
    return {
      email,
      userUID: claims.userUID,
      accessToken,
      refreshToken,
      cookie,
    };
  }
};

const commitSession = (session: Session): Promise<string> => {
  session.cookie.set("email", session.email);
  session.cookie.set("accessToken", session.accessToken);
  session.cookie.set("refreshToken", session.refreshToken);
  return store.commitSession(session.cookie);
};

const destroySession = (session: Session): Promise<string> => {
  return store.destroySession(session.cookie);
};

export { getSession, commitSession, destroySession, userSessionSchema };
export type { GuestSession, UserSession, Session };
