import { GraphQLClient } from "graphql-request";

import { getSdk } from "./graphql/generated";
import { config } from "./config.server";
import { UserSession } from "./session.server";

const getClient = (session: UserSession) => {
  const client = new GraphQLClient(
    `https://${config.NHOST_ID}.graphql.eu-central-1.nhost.run/v1`,
    {
      headers: {
        authorization: `Bearer ${session.accessToken}`,
      },
    }
  );
  const sdk = getSdk(client);
  return sdk;
};

export { getClient };
