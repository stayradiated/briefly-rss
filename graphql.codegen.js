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
  documents: ['./src/*.graphql'],
  overwrite: true,
  generates: {
    './graphql.schema.json': {
      plugins: [ "introspection" ]
    },
    './src/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    }
  },
}
