import { errorBoundary } from "@stayradiated/error-boundary";
import * as dateFns from "date-fns";
import * as z from "zod";

const jwtSchema = z.object({
  iss: z.string(),
  sub: z.string(),
  "https://hasura.io/jwt/claims": z.object({
    "x-hasura-allowed-roles": z.array(z.string()),
    "x-hasura-default-role": z.string(),
    "x-hasura-user-id": z.string(),
  }),
  iat: z.number(),
  exp: z.number(),
});

type JWT = z.infer<typeof jwtSchema>;

const parseJWT = (input: string): JWT | Error => {
  return errorBoundary(() => {
    const [_header, payload, _signature] = input.split(".");
    const data = JSON.parse(Buffer.from(payload, "base64").toString("utf8"));
    return jwtSchema.parse(data);
  });
};

type JWTClaims = {
  role: string;
  userUID: string;
  expiresAt: Date;
};

const parseBrieflyJWT = (input: string): JWTClaims | Error => {
  const jwt = parseJWT(input);
  if (jwt instanceof Error) {
    return jwt;
  }

  const userUID = jwt["https://hasura.io/jwt/claims"]["x-hasura-user-id"];
  const role = jwt["https://hasura.io/jwt/claims"]["x-hasura-default-role"];
  const expiresAt = dateFns.fromUnixTime(jwt.exp);

  if (dateFns.isBefore(expiresAt, new Date())) {
    return new Error("JWT has expired");
  }

  return {
    role,
    userUID,
    expiresAt,
  };
};

export { parseJWT, parseBrieflyJWT };
