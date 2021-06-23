import { version } from '../../package.json'

export const VERSION = version

const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']

export const RC = `${HOME}/.relairc`

export const REGISTRYS_MAP = {
  react: {
    registry: 'realai-FE',
    template: 'config-template',
    branch: 'master',
  },
  screen: {
    registry: 'realai-FE',
    template: 'data-visual-screen',
    branch: 'main',
  },
  'umi-ts': {
    registry: 'realai-FE',
    template: 'umi-ts-template',
    branch: 'main',
  },
}

export const ALLOW_TEMPLATES = Object.keys(REGISTRYS_MAP)
