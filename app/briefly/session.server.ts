import { createCookieSessionStorage, Session as CookieSession } from "@remix-run/node"

import { config } from './config.server'

type Session = {
  userUID: string,
  accessToken: string,
  cookie: CookieSession
}

const store = createCookieSessionStorage({
    cookie: {
      name: '__session',
      secrets: [config.COOKIE_SECRET],
      sameSite: 'lax',
      httpOnly: true,
      secure: false,
      path: '/',
      // Set session expiration to 5 days
      maxAge: 60 * 60 * 24 * 5,
    },
  })

const getSession = async (request: Request): Promise<Session> => {
  const cookie = await store.getSession(
    request.headers.get("Cookie")
  );

  const userUID = cookie.get('userUID')
  const accessToken = cookie.get('accessToken')

  return {
    userUID,
    accessToken,
    cookie,
  }
}

const commitSession = (session: Session): Promise<string> => {
  session.cookie.set('userUID', session.userUID)
  session.cookie.set('accessToken', session.accessToken)
  return store.commitSession(session.cookie)
}

const destroySession = (session: Session): Promise<string> => {
  return store.destroySession(session.cookie)
}

export { getSession, commitSession, destroySession } 
export type { Session }
