import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

{/*initialState es ahora innecesario ya que es suministrado por la aplicacion */}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({ //Combina los reducer en uno state global
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}

{/*Reducer.js deja de ser necesario ya que los states ahora son suministrados por los reducer individuales*/}