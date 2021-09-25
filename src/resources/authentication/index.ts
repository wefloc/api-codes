import { II18n, EHttpCode } from '../../types';

// Locales
import * as fr from './locales/fr.json';
import * as en from './locales/en.json';

const i18n: II18n = { fr, en };

export default {
  client: {
    loginFailed: {
      status: EHttpCode.UNAUTHORIZED,
    },
    missingToken: {
      status: EHttpCode.UNAUTHORIZED,
    },
    unauthorizedRoute: {
      status: EHttpCode.FORBIDDEN,
    },
    unauthorizedResource: {
      status: EHttpCode.FORBIDDEN,
    },
    tokenExpired: {
      status: EHttpCode.UNAUTHORIZED,
    },
  },
  internal: {},
  external: {},
  i18n,
};
