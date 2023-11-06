import './Proyects.css'
import { ListFilterst } from './components/ListFilterst';
import { ListContextProvider } from './context/ListContext';
import ProyectsCategory from './components/ProyectsCategory';
import { SearchBar } from './components/SearchBar';
import { useEffect } from 'react';

const Proyects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <ListContextProvider>
            <div className='container-proyectsPage' >
                <SearchBar />
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