import { Category } from '../../../data/dataProyects';

   
interface Action {
        type : string,
        payload : string[], 
}
 
export const listReducer = (state : Category[], action : Action) => {
    switch (action.type) {
        case 'ADD':
            return [ ...state.filter( category => action.payload.includes(category.title)) ];
        // case 'DELETE':
        //     return state.filter((item) => item.title !== action.payload.title);
        default:
            return state;
    }
}