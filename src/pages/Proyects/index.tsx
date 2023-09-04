import { items } from '../../data/dataProyects';
import './Proyects.css'
import { ListProyects } from './components/ListProyects'

const Proyects = () => {
    return (
        <div className='container-proyectsPage' >
            {
                items.map( ({ title, items})=> (
                    <ListProyects key={title} category ={title} items={items} />
                ))
            }
        </div>
    )
}

export default Proyects