import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk),
)