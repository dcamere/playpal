import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { FlexContainer } from "../../Components/FlexContainer/FlexContainer";

function Register(){
    const dummyDiscordObject = {
        name: "Diego",
        lastName: "Camere",
        username: "dcamere",
        genre: "Male",
        email: "dcamere@gmail.com", 
        birthday: "10/12/1995"
    }
    
    const dateConverter = (date: string) => {
        const dateWithDash = date.replace(/\//g, "-");
        return `${dateWithDash.split("-")[2]}-${dateWithDash.split("-")[0]}-${dateWithDash.split("-")[1]}`
    }

    dateConverter(dummyDiscordObject.birthday)

    

    return <div>
        <form action="" onChange={() => {
            return 
        }}>
            <div className="container">
                <h1>Registration Form</h1>
                <hr />
                <Input value={dummyDiscordObject.username} placeholder="Username" type="text" name="username" />
                <br />
                <Input value={dummyDiscordObject.email} placeholder="Email" type="email" name="email"/>
                <br />
                <Input placeholder="Password" type="password" name="password"/>
                <br />
                <Input value={dateConverter(dummyDiscordObject.birthday)} placeholder="Fecha de nacimiento" type="date" name="birthday"/>
                <br />
                <hr />
                <Button onClick={() => {
                    return 
                }} value="" type="submit"><span>Register</span></Button>
                <p>Already an user? <a href="./..">Login</a></p>
            </div>
        </form>
    </div>
}

export default Register;

  