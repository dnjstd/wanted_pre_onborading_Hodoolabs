import type { NextPage } from 'next';
import * as S from './ReadBookChallenge_Style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReadBookChallenge: NextPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    arrows: false,
    cssEase: 'linear',
  };
  return (
    <>
      <S.Container>
        <S.Wrap>
          <S.DiaryTextContainer>
            <S.DiaryText>
              입학 전 1000권 읽기! <pre>땅콩스쿨로 도전해보세요.</pre>
            </S.DiaryText>
            <S.DiarySubText>
              매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.
              <pre> 독서를 통해 배움의 즐거움을 알아가 보세요.</pre>
            </S.DiarySubText>
          </S.DiaryTextContainer>
          <Slider {...settings}>
            <S.SliderImages src="images/section11-1.png" />
            <S.SliderImages src="images/section11-2.png" />
            <S.SliderImages src="images/section11-3.png" />
            <S.SliderImages src="images/section11-4.png" />
            <S.SliderImages src="images/section11-5.png" />
            <S.SliderImages src="images/section11-6.png" />
            <S.SliderImages src="images/section11-7.png" />
            <S.SliderImages src="images/section11-8.png" />
            <S.SliderImages src="images/section11-9.png" />
            <S.SliderImages src="images/section11-10.png" />
          </Slider>
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default ReadBookChallenge;
