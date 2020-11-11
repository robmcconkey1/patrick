import React from 'react';
import styled from 'styled-components';
import wye from './photos/wye2.jpg';
import l1 from './photos/l.jpg';
import l2 from './photos/langton-2.jpg';
import l3 from './photos/l-3.jpg';
import l4 from './photos/l-4.jpg';
import shot from './photos/shot.jpg';
import shot2 from './photos/shot-2.jpg';
import shot3 from './photos/shot-3.jpg';
import shot4 from './photos/shot-4.jpg';
import shot5 from './photos/shot-5.jpg';
import shot6 from './photos/shot-6.jpg';
import caddy from './photos/caddy.jpg';
import caddy2 from './photos/caddy-2.jpg';
import caddy3 from './photos/caddy-3.jpg';
import sketch1 from './photos/road.jpg';
import sketch2 from './photos/06.jpg';
import wye2 from './photos/wye4.jpg';
import l5 from './photos/gallery1.jpg';
import caddy4 from './photos/gallery1-2.jpg';
const images = [
  {
    image: caddy,
  },
  {
    image: caddy2,
  },
  {
    image: caddy3,
  },
  {
    image: wye,
  },
  {
    image: wye2,
  },
  {
    image: shot2,
  },
  {
    image: shot3,
  },
  {
    image: l3,
  },
  {
    image: l4,
  },
  {
    image: l5,
  },
  {
    image: shot4,
  },
  {
    image: shot5,
  },
  {
    image: shot6,
  },
  {
    image: sketch1,
  },
  {
    image: sketch2,
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
export const TestPage = () => (
  <Container>
    {
      images.map(({ image }) => (
        <img src={image} alt="test" title="test" />
      ))
    }
  </Container>
);
