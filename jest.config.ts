import type { InitialOptionsTsJest } from 'ts-jest/dist/types'
import { defaults as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  transform: {
    ...tsjPreset.transform,
  },
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  setupFiles: ['./setupTests.ts'],
  testMatch: ['**/test/**/*.[jt]s?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '@\\/types\\/(.*)$': '<rootDir>/@types$1',
    '^~\\/(.*)$': '<rootDir>/src$1',
  },
}

export default config
