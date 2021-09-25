import { IErrors } from './types';

// Resources
import authentication from './resources/authentication';
import signIn from './resources/signIn';
import general from './resources/general';

const codes: IErrors = {
  authentication,
  signIn,
  general,
};

export { codes };
