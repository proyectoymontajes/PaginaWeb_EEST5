import { items } from '../../data/dataProyects';
import './Proyects.css'
import { CheckboxFilter } from './components/CheckboxFilter';
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

            <div className="section-proyects">
                <div className='settings-menu'>
                    <ul>
                        <li>
                            <CheckboxFilter label='Robotica'/>
                        </li>
                        <li>
                            <CheckboxFilter label='Robotica'/>
                        </li>
                        <li>
                            <CheckboxFilter label='Robotica'/>
                        </li>
                    </ul>
                </div>
                <div>
                    {
                        items.map(({ title, items }) => (
                            <ListProyects key={title} category={title} items={items} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Proyects