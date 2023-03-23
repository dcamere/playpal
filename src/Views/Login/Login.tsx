import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { FlexContainer } from '../../Components/FlexContainer/FlexContainer'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        const user = document.querySelectorAll("input")[0].value;
        const password = document.querySelectorAll("input")[1].value;

        if (user === "admin" && password === "1234") {
            setMessage("")
            navigate('/Matcher')
        } else {
            setMessage("Error de autenticación")
        }
    }

    return <div className="Login">
        <Input type='text' size='l' placeholder='Usuario'/>
        <br />
        <br />
        <Input type='password' size='l' placeholder="Password" />
        <br />
        <br />
        <Button onClick={handleLogin} value={undefined} size="l">Login</Button>
        {
            message !== "" &&
            <>
                <br />
                <br />
                <span>{message}</span>
            </>
        }
    </div> 
}

export default Login;