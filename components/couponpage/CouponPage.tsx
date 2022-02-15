import type { NextPage } from 'next';
import * as S from './CouponPage_Style';

const CouponPage: NextPage = () => {
  return (
    <>
      <S.Container>
        <S.CouponPageContainer>
          <S.DownloadText>지금 다운로드 받으세요!</S.DownloadText>
          <S.DownloadDetial>
            <S.DownloadImg src="images/section14.png" />
          </S.DownloadDetial>
          <S.CouponLeftText>
            <S.SchoolImg src="images/section14-1.png" />
            <S.CouponTitleText>
              책을 보는<pre>새로운 방법</pre>
            </S.CouponTitleText>
            <S.CouponSubText>
              지금 가입하시면 매주 8권의 동화를 보실 수 있어요!
            </S.CouponSubText>
          </S.CouponLeftText>
          <S.CouponRightText>
            <S.RigthButton>회원가입에 걸리는 시간 단 3초!</S.RigthButton>
            <S.DownLoadCoupon src="images/section14-2.png" />
          </S.CouponRightText>
        </S.CouponPageContainer>
      </S.Container>
    </>
  );
};

export default CouponPage;
