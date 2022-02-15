import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  height: 80px;
  margin-left: 390px;
  z-index: 1;
  width: 100%;
  color: #fff;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img.attrs({
  src: '/images/path88.png',
})`
  width: 47px;
  height: 30px;
  margin-right: 10px;
`;

export const Logo = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

export const CategoryWrapper = styled.ul`
  display: flex;
`;

export const Category = styled.li`
  margin-right: 50px;
  font-weight: 500;
`;
