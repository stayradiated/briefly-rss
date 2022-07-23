import { Type } from "@sinclair/typebox";
import type { Static } from "@sinclair/typebox";
import envSchema from "env-schema";

const schema = Type.Strict(
  Type.Object({
    NHOST_ID: Type.String({ default: 'bfgxsulwyyfptpmhflcn' }),
    HOST: Type.String({ default: 'localhost' }),
    PORT: Type.Number({ default: 7777 }),
    USER_EMAIL: Type.String(),
    USER_PASSWORD: Type.String(),
  })
);

export type Config = Static<typeof schema>;

const config = envSchema<Config>({
  schema,
  env: true,
});

export default config;
