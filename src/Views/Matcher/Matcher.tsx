import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { MatchCard } from '../../Components/MatchCard'
import { FlexContainer } from '../../Components/FlexContainer/FlexContainer'

export const Matcher = () => {
    return <div className="Matcher">
    <div className="card">
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
      <Input placeholder="Introduce tu juego de interes" size="l" type=""/>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </div> 
}