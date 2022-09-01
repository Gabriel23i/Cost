import style from './Select.module.css'

function Select({ text, name, options, handleOnChange, value, error }){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option>Selecione uma opção</option>
                {options.map(option => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <span>{error}</span>}
        </div>
    )
}

export default Select
