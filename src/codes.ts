import { IErrors } from './types';

// Resources
import authentication from './resources/authentication';
import general from './resources/general';

const codes: IErrors = {
  authentication,
  general,
};

export { codes };
