import { userActions, userReducer } from 'entities/User';
import { UserSchema } from '../types/user';

describe('userSlice.test', () => {
    test('set auth data test', () => {
        const state: DeepPartial<UserSchema> = {
            authData: {
                id: '',
                username: '',
                avatar: '',
            },
        };
        expect(userReducer(
            state as UserSchema,
            userActions.setAuthData({
                id: '123',
                username: '123',
                avatar: '123',
            }),
        )).toEqual({
            authData: {
                id: '123',
                username: '123',
                avatar: '123',
            },
        });
    });

    test('set init test', () => {
        const state: DeepPartial<UserSchema> = {
            _inited: false,
        };
        expect(userReducer(
            state as UserSchema,
            userActions.initAuthData(),
        )).toEqual({
            _inited: true,
        });
    });

    test('logout test', () => {
        const state: DeepPartial<UserSchema> = {
            authData: {
                id: '123',
                username: '123',
                avatar: '123',
            },
        };
        expect(userReducer(
            state as UserSchema,
            userActions.logout(),
        )).toEqual({ authData: undefined });
    });
});
