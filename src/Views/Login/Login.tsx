import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { FlexContainer } from '../../Components/FlexContainer/FlexContainer'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Login.scss';

function Login() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch('http://44.201.173.161:3000/')
        .then(response => response.json())
        .then((data: any) => {
            setData(data)
            // console.log(data) 
        })
        .catch(error => console.log(error));

        
    }, [])

    const handleLogin = () => {
        const user = document.querySelectorAll("input")[0].value;
        const password = document.querySelectorAll("input")[1].value;

        if (user === data[0].user && password === data[0].password) {
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
        <a href="https://discord.com/api/oauth2/authorize?client_id=1088816783982608434&redirect_uri=http%3A%2F%2F44.201.173.161%2Fauth&response_type=token&scope=identify%20email">Login with discord</a>
        {/* <Button href="http://44.201.173.161:3000/"  onClick={afe} size="l" value={undefined} btnType="discord"><img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" alt="Discord Logo"></img> <br /> Login with Discord</Button> */}
        <p>Not an user? <a href="./Register">Register now!</a></p>
    </div> 
}

export default Login;