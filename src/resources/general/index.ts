import { II18n, EHttpCode } from '../../types';

// Locales
import * as fr from './locales/fr.json';
import * as en from './locales/en.json';

const i18n: II18n = { fr, en };

export default {
  client: {},
  internal: {
    unexpected: {
      status: EHttpCode.INTERNAL_SERVER_ERROR,
    },
  },
  external: {},
  i18n,
};
