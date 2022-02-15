import type { NextPage } from 'next';
import * as S from './PeanutSchool_Style';

const PeanutSchool: NextPage = () => {
  return (
    <>
      <S.Container>
        <S.DiaryTextContainer>
          <S.DiaryText>땅콩스쿨만의 특징</S.DiaryText>
        </S.DiaryTextContainer>
        <S.StudyTypeContainer>
          <S.TableClass>
            <S.LeftIcon src="images/section12-1.png" />
            <S.OnlineClassUsePhone>화상수업</S.OnlineClassUsePhone>
            <S.ExplainOnlineClass>
              휴대폰이나 태블릿으로 시간이나 장소 관계없이 편하게 수업을
              들어보세요.
            </S.ExplainOnlineClass>
          </S.TableClass>
          <S.BothWayTraining>
            <S.CenterIcon src="images/section12-2.png" />
            <S.BothWayTitleText>양방향</S.BothWayTitleText>
            <S.BothWaySubText>
              화면에 그림도 그려보고, 읽은 책으로 선생님과 퀴즈도 풀어보는
              양방향 수업을 경험해보세요.
            </S.BothWaySubText>
          </S.BothWayTraining>
          <S.OnlineClass>
            <S.OnlineClassIcon src="images/section12-3.png" />
            <S.OnlineClassTitleText>화상수업</S.OnlineClassTitleText>
            <S.OnlineClassSubTitleText>
              친숙한 캐릭터와 목소리로 수업에 대한 부담을 낮춰보세요.
            </S.OnlineClassSubTitleText>
          </S.OnlineClass>
        </S.StudyTypeContainer>
      </S.Container>
    </>
  );
};

export default PeanutSchool;
