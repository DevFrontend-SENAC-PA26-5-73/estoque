import './InputTxtLogin.css';

type InputTxtLoginProps = {
    label: string,
    placeholder: string,
    type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color'
}

function InputTxtLogin({label,placeholder, type}: InputTxtLoginProps) {
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

    <label className="auth-campo">
          Senha
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            autoComplete="current-password"
          />
        </label>

}
export default InputTxtLogin