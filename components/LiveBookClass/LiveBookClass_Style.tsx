import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 873px;
  background-image: url('/images/section3-bg.png');
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 281px;
  left: 390px;
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  font-size: 24px;
  line-height: 40px;
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: 175px;
  left: 800px;
  border-radius: 15px;
  overflow: hidden;
`;

export const VideoBoxImage = styled.img.attrs({
  src: '/images/section5-1.png',
})`
  position: absolute;
  top: 150px;
  left: 777px;
  width: 746px;
  height: 574px;
`;
