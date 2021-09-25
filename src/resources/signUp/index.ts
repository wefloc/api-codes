import { II18n, EHttpCode } from '../../types';

// Locales
import * as fr from './locales/fr.json';
import * as en from './locales/en.json';

const i18n: II18n = { fr, en };

export default {
  client: {
    formInvalidEmail: {
      status: EHttpCode.BAD_REQUEST,
    },
    formInvalidPassword: {
      status: EHttpCode.BAD_REQUEST,
    },
    formInvalidLanguage: {
      status: EHttpCode.BAD_REQUEST,
    },
    formEmailAlreadyExists: {
      status: EHttpCode.BAD_REQUEST,
    },
  },
  internal: {},
  external: {},
  i18n,
};
