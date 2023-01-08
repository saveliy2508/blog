import type {
    StateSchema, ThunkConfig, ReduxStoreWithManager, ThunkExtraArg,
} from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export {
    StoreProvider, ReduxStoreWithManager, ThunkConfig, ThunkExtraArg, createReduxStore, StateSchema,
};

export type { AppDispatch };
