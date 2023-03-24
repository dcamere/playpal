import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { MatchCard } from '../../Components/MatchCard'
import { FlexContainer } from '../../Components/FlexContainer/FlexContainer'
import Modal from '../../Components/Modal/Modal'
import React, { useState } from 'react'
import './Matcher.scss';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Matcher = () => {
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    return <div className="Matcher">
      <h2>These pals are perfect for you:</h2>
        <Slider {...settings}>
          <MatchCard 
          value="" 
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=1" 
          name="Salvatore Pazzaglia" 
          trait="Friendly" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=2" 
          name="Diego Camere" 
          trait="Teamwork" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=1" 
          name="Salvatore Pazzaglia" 
          trait="Friendly" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=3" 
          name="Diego Camere" 
          trait="Teamwork" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=5" 
          name="Salvatore Pazzaglia" 
          trait="Friendly" 
          onClick={() => {
            setIsProfileModalOpen(true);
            console.log(isProfileModalOpen);
          }}>
          </MatchCard>
          <MatchCard 
          value="" 
          imgAlt="Lich King" 
          image="https://source.unsplash.com/random/200x200?sig=4" 
          name="Diego Camere" 
          trait="Teamwork" 
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