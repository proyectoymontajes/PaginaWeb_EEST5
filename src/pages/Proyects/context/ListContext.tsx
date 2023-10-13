import { createContext } from 'react'
import { Category, items } from '../../../data/dataProyects';
import { useFilter } from '../hooks/useFilter';

interface Props {
    children: JSX.Element | JSX.Element[]
}

interface ListContextValue {
    state: Category[];
    itemsList: Category[];
    addFilter: (parameter: string) => void;
    deleteFilter: (parameter: string) => void;
    filterItemsByName: (parameter: string) => void;
}

export const listContext = createContext<ListContextValue>({
    state: [],
    itemsList: [],
    addFilter: () => { },
    deleteFilter: () => { },
    filterItemsByName: () => { },
});

export const ListContextProvider = ({ children }: Props) => {

    const { state, items: itemsList, addFilter, deleteFilter, filterItemsByName } = useFilter(items);
    const { Provider } = listContext

    return (
        <Provider value={{ state, itemsList, addFilter, deleteFilter, filterItemsByName }}>
            {children}
        </Provider>
    )
}
