import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { FlexContainer } from '../../Components/FlexContainer/FlexContainer'
import { redirect } from 'react-router-dom';
import React from 'react';

export const Login = () => {
    // function redirectToPage(pageUrl: string) {
    //     const history = useHistory();
    //     history(pageUrl);
    //   }

    const handleLogin = () => {
        const user = document.querySelectorAll("input")[0].value;
        const password = document.querySelectorAll("input")[1].value;

        if (user === "admin" && password === "1234") redirect('/Matcher')
        
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