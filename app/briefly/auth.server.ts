import { createSession as createCookieSession } from "@remix-run/node";
import { errorBoundary } from "@stayradiated/error-boundary";

import { config } from "./config.server";
import { Session } from "./session.server";

type SessionResponse = {
  accessToken: string;
  accessTokenExpiresIn: number;
  expiresAt: number;
  refreshToken: string;
  user: {
    id: string;
    createdAt: string;
    displayName: string;
    avatarUrl: string;
    locale: string;
    email: string;
    isAnonymous: boolean;
    defaultRole: string;
    metadata: {};
    emailVerified: boolean;
    phoneNumber: null;
    phoneNumberVerified: boolean;
    activeMfaType: null;
    roles: unknown[];
  };
};

type AuthResponse = {
  status: number;
  message: string;
  error: string;
  session: SessionResponse;
};

type LoginOptions = {
  email: string;
  password: string;
};

const login = async (options: LoginOptions): Promise<Session> => {
  const { email, password } = options;

  const response = await fetch(
    `https://${config.NHOST_ID}.auth.eu-central-1.nhost.run/v1/signin/email-password`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const result = (await response.json()) as AuthResponse;

  if (result.status >= 400) {
    throw new Error(result.message);
  }

  return {
    email: result.session.user.email,
    userUID: result.session.user.id,
    accessToken: result.session.accessToken,
    refreshToken: result.session.refreshToken,
    cookie: createCookieSession(),
  };
};

type RefreshTokenOptions = {
  refreshToken: string;
};

const refreshToken = (
  options: RefreshTokenOptions
): Promise<Session | Error> => {
  return errorBoundary<Session>(async () => {
    const { refreshToken } = options;

    const response = await fetch(
      `https://${config.NHOST_ID}.auth.eu-central-1.nhost.run/v1/token`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          refreshToken,
        }),
      }
    );

    const result = (await response.json()) as SessionResponse;

    console.dir(result, { depth: null });

    return {
      email: result.user.email,
      userUID: result.user.id,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      cookie: createCookieSession(),
    };
  });
};

export { login, refreshToken };
