import './InputTxtLogin.css';

type InputTxtLoginProps = {
    label: string,
    placeholder: string 
}

function InputTxtLogin({label,placeholder}: InputTxtLoginProps) {
    return(
        <div className='input-txt'>
            <label htmlFor="">{label}</label> <br/>
            <input type="text" placeholder={placeholder}/>
        </div>
    )
    
}
export default InputTxtLogin