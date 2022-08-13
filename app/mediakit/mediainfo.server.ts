import { execa } from 'execa'

const mediainfo = async (args: string[]) => {
  return execa('mediainfo', args)
}

export interface MediaInfo {
  media: Media
}

export interface Media {
  "@ref": string
  track: Track[]
}

export interface Track {
  "@type": string
  AudioCount?: string
  FileExtension?: string
  Format: string
  Format_Profile?: string
  CodecID: string
  CodecID_Compatible?: string
  FileSize?: string
  Duration: string
  OverallBitRate_Mode?: string
  OverallBitRate?: string
  StreamSize: string
  HeaderSize?: string
  DataSize?: string
  FooterSize?: string
  IsStreamable?: string
  Encoded_Date: string
  Tagged_Date: string
  File_Modified_Date?: string
  File_Modified_Date_Local?: string
  StreamOrder?: string
  ID?: string
  Format_AdditionalFeatures?: string
  BitRate_Mode?: string
  BitRate?: string
  BitRate_Nominal?: string
  Channels?: string
  ChannelPositions?: string
  ChannelLayout?: string
  SamplesPerFrame?: string
  SamplingRate?: string
  SamplingCount?: string
  FrameRate?: string
  FrameCount?: string
  Compression_Mode?: string
  StreamSize_Proportion?: string
  Language?: string
}

const getAudioDurationMS = async (filepath: string): Promise<number> => {
  const result = await mediainfo([filepath, '--Output=JSON'])
  const root = JSON.parse(result.stdout) as MediaInfo

  return Number.parseFloat(root.media.track[0].Duration) * 1000
}

export { mediainfo, getAudioDurationMS }
