import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['apps/two-step-client/src/app/services/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'apps/two-step-client/src/app/shared/types/generated-queries/': {
      preset: 'client',
    },
  },
}

export default config
