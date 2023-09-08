import './CheckboxFilter.css'

interface CheckboxFilterProps {
  label: string
}

export const CheckboxFilter = ({label} : CheckboxFilterProps) => {
  return (
    <label>
      <input
      className="checkbox" 
      type="checkbox" 
      />
      {label}
    </label>
  )
}
