import { CodeGetter } from '../../src/utils';
import { EHttpCode, ELocal, IErrors } from '../../src/types';

describe('/src/utils/codeGetter.ts', () => {
  let errorsMock: CodeGetter;

  const fakeCodes: IErrors = {
    carts: {
      client: {
        testError: {
          status: EHttpCode.NOT_FOUND,
        },
        testError2: {
          status: EHttpCode.NOT_FOUND,
        },
      },
      i18n: {
        en_US: {
          client: {
            testError2: 'testError2_en_US',
          },
        },
        fr_FR: {
          client: {
            testError2: 'testError2_fr_FR',
          },
        },
      },
    },
  };

  beforeEach(() => {
    errorsMock = new CodeGetter(fakeCodes, ELocal.fr_FR);
  });

  it('should get one error by key', () => {
    const err = errorsMock.get('carts:client:testError');

    expect(typeof err).toBe('object');
    expect(err).toStrictEqual(fakeCodes.carts.client.testError);
  });

  it('should get translation of error with default lang', () => {
    const err = errorsMock.get('carts:client:testError2').i18n();

    expect(typeof err).toBe('string');
    expect(err).toBe('testError2_fr_FR');
  });

  it('should get translation of error with given lang', () => {
    const err = errorsMock.get('carts:client:testError2').i18n(ELocal.en_US);

    expect(typeof err).toBe('string');
    expect(err).toBe('testError2_en_US');
  });

  it('should throw an error', () => {
    let err: Error|null = null;

    try {
      errorsMock.get('carts:client:testError').i18n(ELocal.en_US);
    } catch (e) {
      err = e;
    }

    expect(err).toStrictEqual(
      Error(
        'Translation for key carts:client:testError in en_US was not found',
      ),
    );
  });
});
