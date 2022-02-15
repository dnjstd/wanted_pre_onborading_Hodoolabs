import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 573px;
  background-color: #ffb100;
  color: #fff;
`;

export const Logo = styled.img.attrs({
  src: '/images/path88.png',
})`
  width: 94px;
  height: 60px;
  margin-bottom: 30px;
`;

export const Title = styled.p`
  font-size: 50px;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  font-size: 24px;
  line-height: 40px;
`;
