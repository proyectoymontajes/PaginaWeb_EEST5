import { useEffect, useState } from "react"
import { Category } from "../../../data/dataProyects"

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

    return { state, items, addFilter, deleteFilter }

}