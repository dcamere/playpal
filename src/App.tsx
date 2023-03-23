import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Components/Button'
import { MatchCard } from './Components/MatchCard'
import { FlexContainer } from './Components/FlexContainer/FlexContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* onClick: (value: T) => void;
    value: T;
    children: React.ReactNode;
    name: string;
    trait: string;
    image: string;
    imgAlt: string; */}
        <FlexContainer isColumn={true}>
          <MatchCard 
          value="" 
          imgAlt="Lich King" 
          image="https://as01.epimg.net/meristation/imagenes/2007/08/03/noticia/1186175340_719504_1533291750_sumario_normal.jpg" 
          name="Diego Camere" 
          trait="Teamwork" 
          onClick={() => {
            alert('hey') 
          }}>
            <div>hey!!</div>
          </MatchCard>
          <MatchCard 
          value="" 
          imgAlt="Lich King" 
          image="https://as01.epimg.net/meristation/imagenes/2007/08/03/noticia/1186175340_719504_1533291750_sumario_normal.jpg" 
          name="Diego Camere" 
          trait="Teamwork" 
          onClick={() => {
            alert('hey') 
          }}>
            <div>hey!!</div>
          </MatchCard>
        </FlexContainer>
        <Button onClick={() => {alert('hey')}} value="" size="l">Click Me!</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
