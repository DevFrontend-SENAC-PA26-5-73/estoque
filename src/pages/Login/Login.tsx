import './Login.css';
import Botao from "../../components/Botao/Botao";
import InputTxtLogin from "../../components/InputTxtLogin/InputTxtLogin";



function Login() {
    return (
        <main className="container-login">
            <InputTxtLogin label='Login:' placeholder='Digite seu CPF ou Email'/>
            <InputTxtLogin label='Senha:' placeholder='Digite sua senha'/>
            <Botao/>
        </main>

    )
    
}
export default Login;