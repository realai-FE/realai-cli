import { version } from '../../package.json'

export const VERSION = version

const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']

export const RC = `${HOME}/.relairc`

export const REGISTRYS_MAP = {
  'admin-pro': {
    registry: 'realai-FE',
    template: 'admin-template',
    branch: 'main',
  },
  'umi-ts': {
    registry: 'realai-FE',
    template: 'umi-ts-template',
    branch: 'main',
  },
  screen: {
    registry: 'realai-FE',
    template: 'data-visual-screen',
    branch: 'main',
  },
  react: {
    registry: 'realai-FE',
    template: 'config-template',
    branch: 'master',
  },
}

export const ALLOW_TEMPLATES = Object.keys(REGISTRYS_MAP)
export const TEMPLATE_CHOICES = ALLOW_TEMPLATES.map((item) => ({
  name: item,
  checked: item === 'umi-ts',
}))
