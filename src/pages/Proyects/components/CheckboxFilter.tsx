import { useContext } from 'react'
import './CheckboxFilter.css'
import { listContext } from '../context/ListContext'

interface CheckboxFilterProps {
  label: string
}

export const CheckboxFilter = ({ label }: CheckboxFilterProps) => {

  const { addFilter, deleteFilter } = useContext(listContext);

  const handleChange : React.ChangeEventHandler<HTMLInputElement> = ({target})=>{
    const { checked } = target
    checked ? addFilter(label) : deleteFilter(label)
  }

  return (
    <label >
      <input
        onChange={handleChange}
        className="checkbox"
        type="checkbox"
      />
      {label}
    </label>
  )
}
