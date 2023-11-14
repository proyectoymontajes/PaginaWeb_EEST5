import { useEffect, useState } from "react"
import { Category } from '../../../data/dataProyects';

export const useFilter = (state: Category[]) => {

    const [items, setItems] = useState(state)

    const [filters, setFilters] = useState<string[]>([])

    useEffect(() => {
        handleFilter()
    }, [filters])


    const handleFilter = () => {
        if (filters.length !== 0) {
            setItems(
                state.filter(
                    category => {
                        return filters.some(filter => category.title.includes(filter))
                    })
            );
        }
        else{
            setItems(state)
        }

    }

    const addFilter = (filter: string) => {
        setFilters(filtersPrev => [...filtersPrev, filter])
    }

    const deleteFilter = (filterName: string) => {
        setFilters(filters.filter(filter => filter !== filterName));
    }

    const filterItemsByName = (search: string) => {
        const result = items.map((category) => {
            return {
                ...category,
                items : category.items.filter( (item)=> item.title.toLowerCase().includes( search.toLowerCase()) ),
            }
        });
        setItems(result)
    }

    return { state, items, addFilter, deleteFilter, filterItemsByName }

}