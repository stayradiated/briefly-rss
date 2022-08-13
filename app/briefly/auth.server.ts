import { createSession as createCookieSession }  from '@remix-run/node'

import { config } from './config.server'
import { Session } from './session.server'

type LoginResponse = {
  status: number,
  message: string,
  error: string,
  session: {
    accessToken: string
    accessTokenExpiresIn: number
    expiresAt: number
    refreshToken: string
    user: {
      id: string
      createdAt: string,
      displayName: string,
      avatarUrl: string,
      locale: string,
      email: string,
      isAnonymous: boolean,
      defaultRole: string,
      metadata: {}
      emailVerified: boolean
      phoneNumber: null
      phoneNumberVerified: boolean
      activeMfaType: null
      roles: unknown[]
    }
  }
}

type LoginOptions = {
  email: string,
  password: string,
}

const login = async (options: LoginOptions): Promise<Session> => {
  const { email, password } = options

  const response = await fetch(`https://${config.NHOST_ID}.auth.eu-central-1.nhost.run/v1/signin/email-password`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json' 
    },
    body: JSON.stringify({
      email,
      password,
    })
  })


  const result = await response.json() as LoginResponse

  if (result.status >= 400) { 
    throw new Error(result.message)
  }

  return {
    userUID: result.session.user.id,
    accessToken: result.session.accessToken,
    cookie: createCookieSession(),
  }
}

export { login }
