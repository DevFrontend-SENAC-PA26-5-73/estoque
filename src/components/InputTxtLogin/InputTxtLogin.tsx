import './InputTxtLogin.css';

type InputTxtLoginProps = {
    label: string,
    placeholder: string,
    type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color'
    senha: string;
    setSenha: (val: string) => void;
}

function InputTxtLogin({label,placeholder, type, senha, setSenha}: InputTxtLoginProps) {
    return(
        <div className='input-txt'>
            <label htmlFor="">{label}</label> <br/>
            <input
                type={type}
                placeholder={placeholder}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                autoComplete="current-password"
            />
        </div>
    )

}
export default InputTxtLogin