import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

describe('comments.test', () => {
    test('should return is loading value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: { isLoading: true },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('is loading should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
    });

    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: { error: 'err' },
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual('err');
    });
    test('error should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
