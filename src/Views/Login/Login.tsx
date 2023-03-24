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
        <br></br>
        <br></br>
        <Button size="l" value={undefined} btnType="discord"><img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" alt="Discord Logo"></img> <br /> Login with Discord</Button>
        <p>Not an user? <a href="./Register">Regiser now!</a></p>
    </div> 
}

export default Login;