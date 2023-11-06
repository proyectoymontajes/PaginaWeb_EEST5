import { useContext } from 'react'
import { listContext } from '../context/ListContext'
import { ListProyects } from './ListProyects';
import { ErrorSearch } from './ErrorSearch';

const ProyectsCategory = () => {

    const { itemsList } = useContext(listContext);

    return (
        <div>
            {
                itemsList.every(category => category.items.length === 0)
                    ?
                    <ErrorSearch />
                    :
                    itemsList.map(({ title, items }) => (
                        <ListProyects key={title} title={title} items={items} />
                    ))
            }
        </div   >
    )
}

export default ProyectsCategory