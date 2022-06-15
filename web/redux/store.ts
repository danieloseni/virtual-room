import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore } from 'redux-persist'
const middlewares = [thunk];
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}



const makeStore = () => {
    if (typeof window === 'undefined') {
        let tempStore = configureStore({
            reducer: rootReducer,
            middleware: middlewares
        })
        return tempStore;
    }
    console.log('its not window')
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    let tempStore = configureStore({
        reducer: persistedReducer,
        middleware: middlewares
    })

    //@ts-ignore
    tempStore.__PERSISTOR = persistStore(tempStore)



    return tempStore
}


export const store = makeStore();
const test = (store.getState())

export const wrapper = createWrapper(makeStore)