import { items } from '../../data/dataProyects';
import './Proyects.css'
import { ListProyects } from './components/ListProyects'

import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const Proyects = () => {
    return (
        <div className='container-proyectsPage' >
            <div className="menu-proyects">
                
                <TuneIcon className='settings-icon' fontSize='large' />
                <form action="">
                    <input type="text" name="" id="" />
                    <SearchIcon className='search-icon' />
                </form>
            </div>
            {
                items.map(({ title, items }) => (
                    <ListProyects key={title} category={title} items={items} />
                ))
            }
        </div>
    )
}

export default Proyects