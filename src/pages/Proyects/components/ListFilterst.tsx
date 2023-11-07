import { CheckboxFilter } from './CheckboxFilter'
import { items } from '../../../data/dataProyects'

export const ListFilterst = () => {
    const itemList = items.map((item) => (
        item.title
    ))

    return (
        <>
            <ul>
                <h3>Filtros</h3>
                <div className='contain-filters'>

                {
                    itemList.map((item) => (
                        <li key={item}>
                            <CheckboxFilter label={item} />
                        </li>
                    ))
                }
                </div>
            </ul>
        </>
    )
}
