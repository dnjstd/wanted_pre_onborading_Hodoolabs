import * as S from './Footer_Style';

export default function Footer() {
  return (
    <S.Container>
      <div>
        <S.InfoName>(주) 호두랩스</S.InfoName>
        <S.InfoWrapper>
          <S.Info>
            대표 : 김민우 | 사업자등록번호 : 431-88-01287 사업자 정보 조회
          </S.Info>
          <S.Info>
            서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)
          </S.Info>
          <S.Info>제주특별시 서귀포시 중정로 86, 304</S.Info>
          <S.Info>통신판매업 신고번호 : 2019-서울강남-00301호</S.Info>
        </S.InfoWrapper>
        <S.Info>© Hodoo Labs. ALL RIGHTS RESERVED</S.Info>
      </div>

      <S.SideInfoWrapper>
        <S.CustomerInfo>
          <span>고객센터</span>
          <span>채팅상담</span>
        </S.CustomerInfo>

        <S.TermsInfo>
          <span>이용약관</span>
          <span className="info">개인정보 처리방침</span>
          <span>환불정책</span>
        </S.TermsInfo>

        <S.IconWrapper>
          <div>
            <S.SnsIcon />
            <S.CircleBox />
          </div>
          <div>
            <S.BlogIcon />
            <S.CircleBox />
          </div>
        </S.IconWrapper>
      </S.SideInfoWrapper>
    </S.Container>
  );
}
