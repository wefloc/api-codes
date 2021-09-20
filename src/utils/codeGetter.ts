import { IErrors, ELocal, IFullCode } from '../types';

/**
 * @class CodeGetter
 * @description Search through error codes.
 */
class CodeGetter {
  private readonly codes: IErrors;
  private readonly defaultLocal: ELocal;

  /**
   * @constructor
   * @param {IErrors} codes Error codes to search through
   * @param {ELocal} defaultLocal The default local to use for translations
   */
  constructor(codes: IErrors, defaultLocal: ELocal) {
    this.defaultLocal = defaultLocal;
    this.codes = codes;
  }

  /**
   * @function getAll
   * @description Retrieve all error codes.
   * @returns {IErrors} Errors object
   */
  public getAll(): IErrors {
    return this.codes;
  }

  /**
   * @function get
   * @description Retrieve an error using its error key.
   * @param {string} key
   * @return {IFullCode} Error object
   */
  public get(key: string): IFullCode {
    if (typeof key !== 'string') {
      throw Error(
        `Error key parameter must be a string, received ${typeof key} instead.`,
      );
    }

    const [resource, scope, message] = key.split(':');

    if (!this.codes.hasOwnProperty(resource)) {
      throw Error(`Resource was not found for key ${key}`);
    }

    if (!this.codes[resource].hasOwnProperty(scope)) {
      throw Error(`Scope was not found for key ${key}`);
    }

    if (!this.codes[resource][scope].hasOwnProperty(message)) {
      throw Error(`Message was not found for key ${key}`);
    }

    const code: IFullCode = this.codes[resource][scope][message];

    /**
     * @function i18n
     * @description Return the translation of the error in a specific language.
     * @param {ELocal} lang Locale
     * @return {string} Error translation
     */
    code.i18n = (lang?: ELocal): string => {
      if (!lang) {
        lang = this.defaultLocal;
      }

      if (
        this.codes[resource]['i18n'].hasOwnProperty(lang) &&
        this.codes[resource]['i18n'][lang].hasOwnProperty(scope) &&
        this.codes[resource]['i18n'][lang][scope].hasOwnProperty(message)
      ) {
        return this.codes[resource]['i18n'][lang][scope][message];
      }

      throw Error(`Translation for key ${key} in ${lang} was not found`);
    };

    return code;
  }
}

export default CodeGetter;
