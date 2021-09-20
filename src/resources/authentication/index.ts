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
    invalidRedirectionUrl: {
      status: EHttpCode.BAD_REQUEST,
    },
    invalidState: {
      status: EHttpCode.BAD_REQUEST,
    },
    wrongAuthorizationType: {
      status: EHttpCode.BAD_REQUEST,
    },
    tokenExpired: {
      status: EHttpCode.UNAUTHORIZED,
    },
  },
  i18n,
};

export default authentication;
