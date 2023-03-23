import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { MatchCard } from '../../Components/MatchCard'
import { FlexContainer } from '../../Components/FlexContainer/FlexContainer'
import Modal from '../../Components/Modal/Modal'
import { useState } from 'react'

export const Matcher = () => {
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    return <div className="Matcher">
    <div className="card">
      <FlexContainer isColumn={false}>
        <MatchCard 
        value="" 
        imgAlt="Lich King" 
        image="https://as01.epimg.net/meristation/imagenes/2007/08/03/noticia/1186175340_719504_1533291750_sumario_normal.jpg" 
        name="Salvatore Pazzaglia" 
        trait="Friendly" 
        onClick={() => {
          setIsProfileModalOpen(true);
          console.log(isProfileModalOpen);
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
          setIsProfileModalOpen(true);
          console.log(isProfileModalOpen);
        }}>
          <div>hey!!</div>
        </MatchCard>
      </FlexContainer>
      <Modal isModalOpen={isProfileModalOpen}>
        <div>
          <h3>Diego Camere</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fuga laboriosam sint dicta cupiditate maxime tempora at aut est, repellat non rem sequi blanditiis? Quo iste blanditiis ullam dignissimos libero est, voluptatum alias rerum facere omnis expedita facilis, dicta sequi aliquid nisi corrupti? Animi mollitia dolores atque, deserunt minima itaque.</p>
        </div>
      </Modal>
    </div>
  </div> 
}