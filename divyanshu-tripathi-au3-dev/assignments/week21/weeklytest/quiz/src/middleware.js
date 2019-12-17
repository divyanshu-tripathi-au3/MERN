import { } from './actions/actionTypes';

const promiseMiddleware = store => next => action => {
    
    next(action);
};

export { promiseMiddleware }