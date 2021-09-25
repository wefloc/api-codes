import { II18n, IErrorRes, EHttpCode } from '../../types';
import * as fr_FR from './locales/fr_FR.json';
import * as en_US from './locales/en_US.json';

const i18n: II18n = { fr_FR, en_US };

const authentication: IErrorRes = {
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

export default authentication;
