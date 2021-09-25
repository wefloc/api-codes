import { II18n, IErrorRes, EHttpCode } from '../../types';

// Locals
import * as fr_FR from './locales/fr_FR.json';
import * as en_US from './locales/en_US.json';

const i18n: II18n = { fr_FR, en_US };

const general: IErrorRes = {
  client: {},
  internal: {
    unexpected: {
      status: EHttpCode.INTERNAL_SERVER_ERROR,
    },
  },
  external: {},
  i18n,
};

export default general;
