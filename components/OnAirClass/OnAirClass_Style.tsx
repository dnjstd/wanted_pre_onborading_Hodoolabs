import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 1397px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.p`
  margin: 150px 0 50px 0;
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
`;

export const Description = styled.p`
  font-size: 24px;
  line-height: 40px;
`;

export const TabletImage = styled.img.attrs({
  src: '/images/section5-1.png',
})`
  position: absolute;
  top: 500px;
  left: 420px;
  width: 880px;
  height: 665px;
`;

export const PhoneImage = styled.img.attrs({
  src: '/images/section5-2.png',
})`
  position: absolute;
  top: 600px;
  left: 1200px;
  width: 303px;
  height: 600px;
`;
