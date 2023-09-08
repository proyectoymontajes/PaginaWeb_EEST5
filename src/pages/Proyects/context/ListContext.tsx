import { createContext, useReducer } from 'react'
import { listReducer } from '../reducer/listReducer';
import { items } from '../../../data/dataProyects';

const [state, dispatch] = useReducer(listReducer, items);

const listContext = createContext({
    state,
    dispatch
});

const { Provider } = listContext

const ListContextProvider = (children: React.ReactNode) => {
    <Provider value={{ state, dispatch }}>
        {children}
    </Provider>
}

export default ListContextProvider
