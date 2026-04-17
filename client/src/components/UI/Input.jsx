export default function Input({name,value,onChange,placeholder,type="text", className = ""}) {
  return (
    <input 
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`border p-2 rounded font-body text=[var(--primary)] ${className}`}
    />
  )
}
