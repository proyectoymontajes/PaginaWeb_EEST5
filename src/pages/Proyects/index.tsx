import './Proyects.css'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { ListFilterst } from './components/ListFilterst';
import { ListContextProvider } from './context/ListContext';
import ProyectsCategory from './components/ProyectsCategory';

const Proyects = () => {
    return (
        <ListContextProvider>
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
                        <ListFilterst />
                    </div>
                    <ProyectsCategory />
                </div>

            </div>

        </ListContextProvider>

    )
}

export default Proyects