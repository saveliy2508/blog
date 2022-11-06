import { counterReducer, counterActions, CounterSchema } from 'entities/Counter';

describe('counterSlice.test', () => {
    const state: CounterSchema = {
        value: 10,
    };
    test('decrement', () => {
        expect(counterReducer(state, counterActions.decrement()))
            .toEqual({ value: 9 });
    });
    test('increment', () => {
        expect(counterReducer(state, counterActions.increment()))
            .toEqual({ value: 11 });
    });
    test('increment', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 });
    });
});
