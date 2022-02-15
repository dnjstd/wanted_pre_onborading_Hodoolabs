import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 647px;
  background-color: #f9f9f9;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 150px;
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

export const BookContainer = styled.div`
  display: flex;
  position: absolute;
  left: 890px;
  top: 161px;
`;

export const BookWrapper = styled.div`
  padding-right: 100px;
`;

export const CheckImageFirst = styled.img.attrs({
  src: '/images/section4-imb_check_1.png',
})`
  width: 106px;
  height: 94px;
  margin-bottom: 33px;
`;

export const BookImageFirst = styled.img.attrs({
  src: '/images/section4-img_book_1.png',
})`
  width: 150px;
  height: 200px;
`;

export const CheckImageSecond = styled.img.attrs({
  src: '/images/section4-imb_check_2.png',
})`
  width: 106px;
  height: 94px;
  margin-bottom: 33px;
`;

export const BookImageSecond = styled.img.attrs({
  src: '/images/section4-img_book_2.png',
})`
  width: 150px;
  height: 200px;
`;

export const CheckImageThird = styled.img.attrs({
  src: '/images/section4-imb_check_3.png',
})`
  width: 106px;
  height: 94px;
  margin-bottom: 33px;
`;

export const BookImageThird = styled.img.attrs({
  src: '/images/section4-img_book_3.png',
})`
  width: 150px;
  height: 200px;
`;
