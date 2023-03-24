import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { FlexContainer } from "../../Components/FlexContainer/FlexContainer";

function Register(){


    return <div>
        <form action="">
            <div className="container">
                <h1>Registration Form</h1>
                <hr />
                <Input placeholder="Username" type="text" name="username" ></Input>
                <br />
                <Input placeholder="Email" type="email" name="email"></Input>
                <br />
                <Input placeholder="Password" type="text" name="password"></Input>
                <br />
                <Input placeholder="Fecha de nacimiento" type="date" name="birthday"> </Input>
                <br />
                <hr />
                <Button type="submit">Register</Button>
                <p>Already an user? <a href="./..">Login</a></p>
            </div>
        </form>
    </div>
}

export default Register;

  