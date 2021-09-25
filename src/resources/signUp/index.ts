import { II18n, IErrorRes, EHttpCode } from '../../types';

// Locales
import * as fr from './locales/fr.json';
import * as en from './locales/en.json';

const i18n: II18n = { fr, en };

const signUp: IErrorRes = {
  client: {
    formEmailAlreadyExists: {
      status: EHttpCode.BAD_REQUEST,
    },
  },
  internal: {},
  external: {},
  i18n,
};

export default signUp;
