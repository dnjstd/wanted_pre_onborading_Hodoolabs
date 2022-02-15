import * as S from './Main_Style';

export default function Main() {
  return (
    <S.Container>
      <S.TextWrapper>
        <div>책 읽는 재미,</div>
        <div>땅콩스쿨이</div>
        <div>만들어줄게요!</div>
      </S.TextWrapper>
      <S.Star />
      <S.Line />
      <S.MouseAnimation>
        <S.Mouse />
      </S.MouseAnimation>
    </S.Container>
  );
}
