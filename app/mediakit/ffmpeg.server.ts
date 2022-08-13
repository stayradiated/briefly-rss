import { execa } from 'execa'

const ffmpeg = async (args: string[]) => {
  await execa('ffmpeg', args)
}

export { ffmpeg }
