import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const redirectToPage = () => navigate('/Matcher')

    const handleLogin = () => {        
        const user = document.querySelectorAll("input")[0].value;
        const password = document.querySelectorAll("input")[1].value;        
        if (user === "admin" && password === "1234") redirectToPage()
        
    }

    return <div className="Login">
        <Input type='text' size='l' placeholder='Usuario'/>
        <br />
        <br />
        <Input type='password' size='l' placeholder="Password" />
        <br />
        <br />
        <Button onClick={handleLogin} value={undefined} size="l">Login</Button>
    </div> 
}