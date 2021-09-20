import { errors, ELocal } from '../src';
import { codes } from '../src/codes';

describe('/src/index.ts', () => {
  it('should get all errors', () => {
    const err = errors.getAll();

    expect(typeof err).toBe('object');
    expect(err).toStrictEqual(codes);
  });

  it('should throw error at scope not found', () => {
    let err: Error|null = null;

    try {
      errors.get('authentication:badScope:cartNotFound');
    } catch (e) {
      err = e;
    }

    expect(err).toStrictEqual(
      Error('Scope was not found for key authentication:badScope:cartNotFound'),
    );
  });

  it('should throw error at message not found', () => {
    let err: Error|null = null;

    try {
      errors.get('authentication:client:notAnError');
    } catch (e) {
      err = e;
    }

    expect(err).toStrictEqual(
      Error('Message was not found for key authentication:client:notAnError'),
    );
  });

  it('should throw error at bad key type', () => {
    let err: Error|null = null;

    try {
      errors.get(1 as any);
    } catch (e) {
      err = e;
    }

    expect(err).toStrictEqual(
      Error(
        'Error key parameter must be a string, received number instead.',
      ),
    );
  });

  it('should throw error at error not found', () => {
    let err: Error|null = null;

    try {
      errors.get('not-an-error');
    } catch (e) {
      err = e;
    }

    expect(err).toStrictEqual(
      Error('Resource was not found for key not-an-error'),
    );
  });

  // This test ensure every single code has a translation registered
  it('should find a translation for every single code', () => {
    for (const resource of Object.keys(codes)) {
      for (const scope of ['client']) {
        for (const error of Object.keys(codes[resource][scope])) {
          const errorKey = [resource, scope, error].join(':');

          for (const lang of Object.keys(codes[resource]['i18n'])) {
            expect(typeof errors.get(errorKey).i18n(lang as ELocal)).toBe(
              'string',
            );
          }
        }
      }
    }
  });
});
