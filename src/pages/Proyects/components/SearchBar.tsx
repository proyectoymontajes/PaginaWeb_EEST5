// import SearchIcon from '@mui/icons-material/Search';
import { FormEventHandler,
    //  useContext, 
     useState } from 'react';
// import { listContext } from '../context/ListContext';


export const SearchBar = () => {

    const [value, setValue] = useState('');

    // const {filterItemsByName} = useContext(listContext)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { value } = target;
        setValue(value);
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        // filterItemsByName(value);
    }

    return (
        <div className="menu-proyects">
            {/* <TuneIcon className='settings-icon' fontSize='large' /> */}
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={value}
                    type="text"
                    name="search"
                    placeholder='Robot sumo'
                />

            </form>
        </div>
    )
}
