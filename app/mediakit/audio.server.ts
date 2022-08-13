import { temporaryFile } from 'tempy'

import { ffmpeg } from './ffmpeg.server'

const transcodeAudio = async (sourceFilePath: string): Promise<string> => {
  const outputFilePath = temporaryFile({
    extension: 'm4a',
  })

  await ffmpeg([
    ['-i', sourceFilePath],
    // convert to aac
    ['-c:a', 'aac'],
    // variable bit rate quality
    ['-q:a', '1'],
    // client can start playback without needing whole file
    ['-movflags', '+faststart'],
    // disable video
    '-vn',
    outputFilePath
  ].flat())

  return outputFilePath
}

export { transcodeAudio }
