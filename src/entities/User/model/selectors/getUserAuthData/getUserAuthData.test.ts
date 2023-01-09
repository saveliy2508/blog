import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
    test('should return data', () => {
        const authData = {
            id: '123',
            username: '123',
            avatar: '123',
        };
        const state: DeepPartial<StateSchema> = {
            user: {
                authData,
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(authData);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
