import * as S from './Nav_Style';

export default function Nav() {
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.LogoImage />
        <S.Logo>
          <a href="/">땅콩스쿨</a>
        </S.Logo>
      </S.LogoWrapper>
      <S.CategoryWrapper>
        <S.Category>
          <a href="/">도서구매</a>
        </S.Category>
        <S.Category>
          <a href="/">장바구니</a>
        </S.Category>
        <S.Category>|</S.Category>
        <S.Category>
          <a href="/">이용권 관리</a>
        </S.Category>
        <S.Category>
          <a href="/">로그인/회원가입</a>
        </S.Category>
      </S.CategoryWrapper>
    </S.Container>
  );
}
