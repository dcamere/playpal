import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { FlexContainer } from "../../Components/FlexContainer/FlexContainer";
import { TextArea } from "../../Components/TextArea";
import RadioButton from "../../Components/RadioButton/RadioButton";
import { useState } from "react";

type Genre = {
    id: string;
    name: string;
};

const genres: Genre[] = [
    { id: 'Male', name: 'Male' },
    { id: 'Female', name: 'Female' },
    { id: 'Non binary', name: 'Non binary' },
    { id: 'I prefer not to answer', name: 'I prefer not to answer'}
  ];

function Register(){
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    const handleGenreChange = (genresId: string) => {
        const genre = genres.find((f) => f.id === genresId);
        setSelectedGenre(genre || null);
      };
    
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
        const splittedDate = dateWithDash.split("-");
        return `${splittedDate[2]}-${splittedDate[0]}-${splittedDate[1]}`
    }

    return <div>
        <form action="">
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
                <TextArea cols={50} rows={7}  placeholder="Tell us more about you!" name="aboutUser"></TextArea>
                <FlexContainer center isColumn>
                    {genres.map((genre) => (
                        <RadioButton
                        key={genre.id}
                        id={genre.id}
                        label={genre.name}
                        value={genre.id}
                        checked={selectedGenre?.id === genre.id}
                        onChange={handleGenreChange}
                        />
                    ))}
                </FlexContainer>
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

  