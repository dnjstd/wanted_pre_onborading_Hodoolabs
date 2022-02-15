import * as S from './LiveBookClass_Style';

export default function LiveBookClass() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          랜선 라이브 <br />
          북클래스
        </S.Title>
        <S.Description>
          친구들과 함께
          <br /> 그림 그리기, 퀴즈 풀기.
          <br />
          선생님과 대화하며 경험해요!
        </S.Description>
      </S.Wrapper>
      <S.VideoBoxImage />
      <S.VideoWrapper>
        <video height="526" width="700" autoPlay muted loop>
          <source src="/video/main_video.mp4" type="video/mp4" />
          해당 브라우저는 video를 지원하지 않습니다.
        </video>
      </S.VideoWrapper>
    </S.Container>
  );
}
