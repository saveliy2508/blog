import { counterReducer, counterActions } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';
import { CounterSchema } from './model/types/counterShema';

export {
    counterActions,
    counterReducer,
    Counter,
    CounterSchema,
};
