import { createContext, useReducer } from 'react'
import { listReducer } from '../reducer/listReducer';
import { Category, items } from '../../../data/dataProyects';

interface Props {
    children: JSX.Element | JSX.Element[]
}

interface ListContextValue {
    state: Category[];
    dispatch: React.Dispatch<any>;
}

export const listContext = createContext<ListContextValue>({
    state: [],
    dispatch: () => { },
});

export const ListContextProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(listReducer, items);


    const { Provider } = listContext

    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    )
}
