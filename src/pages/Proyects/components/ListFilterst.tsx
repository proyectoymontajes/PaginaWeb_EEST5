import { items } from '../../../data/dataProyects'
import { CheckboxFilter } from './CheckboxFilter'

const itemList = items.map((item) => (
    item.title
))

export const ListFilterst = () => {
    return (
        <>
            <ul>
                <h3>Filtros</h3>
                {
                    itemList.map((item) => (
                        <li key={item}>
                            <CheckboxFilter label={item} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
