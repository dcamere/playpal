// import { Button } from '../../Components/Button'
// import { Input } from '../../Components/Input'
import { MatchCard } from '../../Components/MatchCard'
// import { FlexContainer } from '../../Components/FlexContainer/FlexContainer'
// import Modal from '../../Components/Modal/Modal'
import React, { useContext, useState } from 'react'
import './Matcher.scss';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAppContext, AppContext } from '../../contexts/AppContext';

export const Matcher = () => {
  const context = useContext(AppContext)
  const { name } = useAppContext();

    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    
    const settings = {
      dots: true, // show pagination dots
      infinite: true, // loop back to the beginning after reaching the end
      speed: 500, // transition speed in milliseconds
      slidesToShow: 3, // show 3 slides at once in desktop view
      slidesToScroll: 3, // scroll 1 slide at a time
      responsive: [
        {
          breakpoint: 768, // switch to mobile view at 768px
          settings: {
            slidesToShow: 1, // show 1 slide at a time in mobile view
            slidesToScroll: 1 // scroll 1 slide at a time
          }
        }
      ]
    };

    console.log(context);
    console.log(name)

    return <div className="Matcher">
      <h2>These pals are perfect for you:</h2>
        <Slider {...settings}>
          <MatchCard 
          value="" 
          id="1"
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=1" 
          name="Salvatore Pazzaglia" 
          trait="Friendly 😄" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          id="2"
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=2" 
          name="Diego Camere" 
          trait="Teamwork 😄" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          id="3"
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=3" 
          name="Salvatore Pazzaglia" 
          trait="Friendly 😄" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          id="4"
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=4" 
          name="Diego Camere" 
          trait="Teamwork 😄" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          id="5"
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=5" 
          name="Salvatore Pazzaglia" 
          trait="Friendly 😄" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          id="6"
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=6" 
          name="Diego Camere" 
          trait="Teamwork 😄" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
        </Slider>
      {/* <Modal isModalOpen={isProfileModalOpen}>
        <div>
          <h3>Diego Camere</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fuga laboriosam sint dicta cupiditate maxime tempora at aut est, repellat non rem sequi blanditiis? Quo iste blanditiis ullam dignissimos libero est, voluptatum alias rerum facere omnis expedita facilis, dicta sequi aliquid nisi corrupti? Animi mollitia dolores atque, deserunt minima itaque.</p>
        </div>
      </Modal> */}
  </div> 
}