import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '@/entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.INCORRECT_USER_DATA,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
