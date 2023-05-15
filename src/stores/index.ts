import { configureStore } from '@reduxjs/toolkit';

import counter, { counterActions } from 'stores/novel';

const store = configureStore({
  reducer: {
    counter,
  },
});

const actions = {
  novel: counterActions,
};

export default store;

export { actions };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
