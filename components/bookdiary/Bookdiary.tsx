import type { NextPage } from 'next';
import * as S from './Bookdiary_Style';

const Bookdiary: NextPage = () => {
  return (
    <>
      <S.Container>
        <S.DiaryTextContainer>
          <S.DiaryText>
            매일 매일 <pre>알아서 기록하는 독서 일기</pre>
          </S.DiaryText>
          <S.DiarySubText>
            오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를
            통해 확인해보세요.
            <pre>읽기만 해도 자동으로 기록되고, 공유도 가능해요.</pre>
          </S.DiarySubText>
        </S.DiaryTextContainer>
        <S.BookDiaryImageContainer>
          <S.LeftImageBox>
            <S.LeftTopImage src="images/section10-1.png" />
            <S.LeftBottomImage src="images/section10-2.png" />
          </S.LeftImageBox>
          <S.CenterImage src="images/section10-3.png" />
          <S.RightImageBox>
            <S.RightTopImage src="images/section10-4.png" />
            <S.RightBottomImage src="images/section10-5.png" />
          </S.RightImageBox>
        </S.BookDiaryImageContainer>
      </S.Container>
    </>
  );
};

export default Bookdiary;
