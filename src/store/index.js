import { MODULE_NAME as tasksModuleName } from './tasks/selectors';
import { reducer as tasksReducer } from './tasks/reducer';

import { MODULE_NAME as greateTaskModuleName } from './greateTask/selectors';
import { reducer as greateTaskReducer } from './greateTask/reducer';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// Redux Thunk
import thunk from 'redux-thunk';

// Redux Devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistTasks = {
    key: 'tasks',
    storage,
}

const rootReducer = combineReducers({
    [tasksModuleName]: persistReducer(persistTasks, tasksReducer),
    [greateTaskModuleName]: greateTaskReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);