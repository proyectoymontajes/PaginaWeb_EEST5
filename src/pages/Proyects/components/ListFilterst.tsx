import { useContext } from 'react'
import { CheckboxFilter } from './CheckboxFilter'
import { listContext } from '../context/ListContext'

export const ListFilterst = () => {

    const { state } = useContext(listContext)

    const itemList = state.map((item) => (
        item.title
    ))

    console.log(state)
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
