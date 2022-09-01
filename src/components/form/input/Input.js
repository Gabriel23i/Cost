import style from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value, error='' }){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                min={0}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
            {error && <span>{error}</span>}
        </div>
    )
}

export default Input
