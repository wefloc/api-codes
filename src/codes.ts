import { IErrors } from './types';

// Resources
import authentication from './resources/authentication';
import signIn from './resources/signIn';
import signUp from './resources/signUp';
import general from './resources/general';

const codes: IErrors = {
  authentication,
  signIn,
  signUp,
  general,
};

export { codes };
