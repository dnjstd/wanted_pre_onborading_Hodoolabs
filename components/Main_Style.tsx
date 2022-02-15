import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/images/img_main.jpeg');
  background-position: center;
  background-size: cover;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 230px;
  left: 380px;
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  line-height: 80px;
`;

export const Star = styled.img.attrs({
  src: '/images/star1.png',
})`
  position: absolute;
  top: 295px;
  left: 360px;
  width: 52px;
  height: 52px;
`;

export const Line = styled.img.attrs({
  src: '/images/line.png',
})`
  position: absolute;
  top: 390px;
  left: 380px;
  width: 220px;
  height: 11px;
`;

export const MouseAnimation = styled.div`
  /* width: 3.8%; */
  /* min-width: 48px; */
  position: absolute;
  animation: 0.7s ease-in 0s infinite alternate none running motion;
  display: block;
  bottom: 0px;
  left: 50%;
  padding-bottom: 50px;
  transform: translateX(-50%);
`;

export const Mouse = styled.img.attrs({
  src: '/images/mouse.png',
})`
  /* position: absolute; */
  /* margin: 0 auto; */
  /* bottom: 50px; */
  width: 72px;
  height: 72px;
`;
