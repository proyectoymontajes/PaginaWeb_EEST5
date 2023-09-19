import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


export const SearchBar = () => {

    const [value, setValue] = useState('');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { value } = target;
        setValue(value);
    }

    return (
        <div className="menu-proyects">
            {/* <TuneIcon className='settings-icon' fontSize='large' /> */}
            <form action="">
                <input
                    onChange={handleChange}
                    value={value}
                    type="text"
                    name="search"
                    placeholder='Robot sumo'
                />
                <SearchIcon className='search-icon' />
            </form>
        </div>
    )
}
