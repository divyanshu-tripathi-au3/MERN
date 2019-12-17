import { applyMiddleware, createStore } from 'redux';

import { promiseMiddleware } from './middleware';
import reducer from './reducer';

const getMiddleware = () => {
   
        return applyMiddleware(promiseMiddleware)
   
};

export const store = createStore(reducer, getMiddleware());