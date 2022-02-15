import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  margin: 60px 0 60px 390px;
  color: #333;
`;

export const InfoWrapper = styled.div`
  margin-bottom: 20px;
`;

export const InfoName = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  font-size: 14px;
  padding-bottom: 5px;
`;

export const SideInfoWrapper = styled.div`
  span {
    margin: 10px;
  }
`;

export const CustomerInfo = styled.div`
  display: flex;
`;

export const TermsInfo = styled.div`
  display: flex;
  margin-bottom: 30px;

  .info {
    font-weight: 700;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
`;
export const CircleBox = styled.img.attrs({
  src: '/images/footer-Vector.png',
})`
  width: 43px;
  margin-right: 20px;
`;

export const SnsIcon = styled.img.attrs({
  src: '/images/footer-1.png',
})`
  position: absolute;
  top: 13px;
  left: 12px;
  width: 18px;
  height: 17px;
`;

export const BlogIcon = styled.img.attrs({
  src: '/images/footer-2.png',
})`
  position: absolute;
  top: 13px;
  left: 74px;
  width: 21px;
  height: 17px;
`;
