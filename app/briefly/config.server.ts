import * as z from 'zod'

const schema = z.object({
  NHOST_ID: z.string().default('bfgxsulwyyfptpmhflcn'),
  HOST: z.string().default('localhost'),
  PORT: z.preprocess((value: unknown) => Number.parseInt(String(value)),z.number().int().default(7777)),
  COOKIE_SECRET: z.string()
})

const config = schema.parse(process.env)

type Config = z.infer<typeof schema>;

export { config }
export type { Config }
