import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

 
{/*initialState es ahora innecesario ya que es suministrado por la aplicacion */}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({ //Combina los reducer en uno state global
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}

{/*Reducer.js deja de ser necesario ya que los states ahora son suministrados por los reducer individuales*/}