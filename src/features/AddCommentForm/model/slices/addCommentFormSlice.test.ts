import { AddCommentFormSchema } from '../types/AddCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' };
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('qweqwe'),
        )).toEqual({ text: 'qweqwe' });
    });
});
