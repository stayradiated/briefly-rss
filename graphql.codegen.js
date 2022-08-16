module.exports = {
  schema: [
    {
      './graphql.schema.json': {}
      // 'https://bfgxsulwyyfptpmhflcn.graphql.eu-central-1.nhost.run/v1': {
      //   headers: {
      //     authorization: 'Bearer ${token}'
      //   }
      // },
    },
  ],
  documents: ['./app/**/*.graphql', './app/**/*.tsx'],
  overwrite: true,
  generates: {
    './graphql.schema.json': {
      plugins: [ "introspection" ]
    },
    './app/briefly/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        scalars: {
          'numeric': 'number',
          'smallint': 'number',
          'timestamp': 'string',
          'timestamptz': 'string',
          'uuid': 'string',
          'bpchar': 'string'
        }
      }
    }
  },
}
