import { counterReducer, counterActions } from 'entities/Counter/model/slice/counterSlice';
import { Counter } from 'entities/Counter/ui/Counter';
import { CounterSchema } from 'entities/Counter/model/types/counterShema';

export {
    counterActions,
    counterReducer,
    Counter,
    CounterSchema,
};
