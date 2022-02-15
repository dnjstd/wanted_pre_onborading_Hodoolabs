import * as S from './SelectedBook_Style';

export default function SelectedBook() {
  return (
    <S.Container>
      <S.TextWrapper>
        <S.Title>
          교육 전문가들이
          <br />
          선정한 도서
        </S.Title>
        <S.Description>
          호두랩스의 교육 전문가들이
          <br />
          교과 수록, 초등 필독 도서 등<br />
          아동 교육에 적합한 도서를
          <br />
          직접 선정해요!
        </S.Description>
      </S.TextWrapper>
      <S.BookContainer>
        <S.BookWrapper>
          <S.CheckImageFirst />
          <S.BookImageFirst />
        </S.BookWrapper>
        <S.BookWrapper>
          <S.CheckImageSecond />
          <S.BookImageSecond />
        </S.BookWrapper>
        <S.BookWrapper>
          <S.CheckImageThird />
          <S.BookImageThird />
        </S.BookWrapper>
      </S.BookContainer>
    </S.Container>
  );
}
