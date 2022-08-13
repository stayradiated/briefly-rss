import * as briefly from '../briefly'
import { Session } from '../briefly/session.server'

type PresignedURLResponse = {
	url: string,
	expiration: number
}

const getPresignedURL = async (session: Session, fileUID: string): Promise<PresignedURLResponse> => {
  const response = await fetch(`https://${briefly.config.NHOST_ID}.storage.eu-central-1.nhost.run/v1/files/${fileUID}/presignedurl`, {
    headers: {
    authorization: `Bearer ${session.accessToken}`
  }
  })
  const presignedURL = await response.json() as PresignedURLResponse
  return presignedURL
}

export { getPresignedURL }
