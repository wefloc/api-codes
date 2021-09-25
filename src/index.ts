import { codes } from './codes';
import { CodeGetter } from './utils';
import { ELocal, IFullCode } from './types';

const errors = new CodeGetter(codes, ELocal.en);

export { errors, ELocal, IFullCode };
