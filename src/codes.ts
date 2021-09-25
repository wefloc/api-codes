import { IErrors } from './types';

// Resources
import authentication from './resources/authentication';
import signIn from './resources/signIn';
import signUp from './resources/signUp';
import passwordForgotten from './resources/passwordForgotten';
import general from './resources/general';

const codes: IErrors = {
  authentication,
  signIn,
  signUp,
  passwordForgotten,
  general,
};

export { codes };
