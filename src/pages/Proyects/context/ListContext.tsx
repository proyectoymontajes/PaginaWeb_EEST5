import { createContext } from 'react'

const listContext = createContext({});

const { Provider } = listContext

const ListContextProvider = (children: React.ReactNode) => {
    <Provider value={{}}>
        {children}
    </Provider>
}

export default ListContextProvider
