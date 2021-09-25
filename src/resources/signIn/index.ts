import { II18n, IErrorRes, EHttpCode } from '../../types';
import * as fr_FR from './locales/fr_FR.json';
import * as en_US from './locales/en_US.json';

const i18n: II18n = { fr_FR, en_US };

const authentication: IErrorRes = {
  client: {
    formInvalidEmail: {
      status: EHttpCode.BAD_REQUEST,
    },
    formInvalidPassword: {
      status: EHttpCode.BAD_REQUEST,
    },
  },
  internal: {},
  external: {},
  i18n,
};

export default authentication;
