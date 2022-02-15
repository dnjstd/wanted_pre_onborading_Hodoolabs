import * as S from './Nav_Style';

export default function Nav() {
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.LogoImage />
        <S.Logo>땅콩스쿨</S.Logo>
      </S.LogoWrapper>
      <S.CategoryWrapper>
        <S.Category>
          <a>도서구매</a>
        </S.Category>
        <S.Category>
          <a>장바구니</a>
        </S.Category>
        <S.Category>|</S.Category>
        <S.Category>
          <a>이용권 관리</a>
        </S.Category>
        <S.Category>
          <a>로그인/회원가입</a>
        </S.Category>
      </S.CategoryWrapper>
    </S.Container>
  );
}
