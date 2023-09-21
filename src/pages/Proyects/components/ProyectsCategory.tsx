import { useContext } from 'react'
import { listContext } from '../context/ListContext'
import { ListProyects } from './ListProyects';

const ProyectsCategory = () => {

    const { itemsList } = useContext(listContext);
    return (
        <div>
            {
                itemsList.map(({ title, items }) => (
                    <ListProyects key={title} category={title} items={items} />
                ))
            }
        </div   >
    )
}

export default ProyectsCategory