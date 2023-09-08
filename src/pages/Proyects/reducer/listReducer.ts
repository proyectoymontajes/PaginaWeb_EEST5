import { Category } from '../../../data/dataProyects';

   
interface ListFilterst {
    state : Category[],
    action : {
        type : string,
        payload : string[], 
    }
}
 
export const listReducer = ({ state = [], action}: ListFilterst) => {
    switch (action.type) {
        case 'ADD':
            return [ ...state.filter( category => action.payload.includes(category.title)) ];
        // case 'DELETE':
        //     return state.filter((item) => item.title !== action.payload.title);
        default:
            return state;
    }
}