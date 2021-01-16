import React from 'react';
import styled from 'styled-components';
import wye from './photos/wye2.jpg';
import lawrence1 from './photos/lawrence8.jpg'
import lawrence2 from './photos/lawrence-2.jpg'
import lawrence3 from './photos/lawrence-4.jpg'
import lawrence4 from './photos/lawrence-7.jpg'
import lawrence5 from './photos/lawrence-6.jpg'
import lawrence6 from './photos/lawrence6.jpg'
import lawrence7 from './photos/lawrence5.jpg'
const images = [
  {
    image: lawrence1,
  },
  {
    image: lawrence2,
  },
  {
    image: lawrence6,
  },
  {
    image: lawrence5,
  },
  {
    image: lawrence4,
  },
  {
    image: lawrence3,
  },


];
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  object-fit: cover;
  object-position: middle;
position: relative;


  img {
    width: 100%;
    height: 300px;

    padding: 5px;


  }
  @media (min-width: 581px) {
    img {
      width: 50%;
      height: 300px;
padding: 5px;
    }
  }
  @media (min-width: 1181px) {
    img {
      width: 33%;
      height: 400px;
padding: 5px;


    }
  }
`;
export const Feature = () => (
  <Container>
    {
      images.map(({ image }) => (
        <img src={image} alt="test" title="test" />
      ))
    }
  </Container>
);
