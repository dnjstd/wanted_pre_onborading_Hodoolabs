import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1267px;
  background: #f9f9f9;
`;

export const DiaryTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 586px;
  position: absolute;
  flex-direction: column;
  color: #333333;
  left: calc(50% - 586px / 2);
`;
export const DiaryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 50px;
  font-size: 50px;
  line-height: 70px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: bold;
`;
export const DiarySubText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  line-height: 40px;
  width: 990px;
`;

export const BookDiaryImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const LeftImageBox = styled.div``;
export const LeftTopImage = styled.img`
  position: absolute;
  width: 368px;
  height: 208px;
  left: 390px;
  top: 584px;
`;
export const LeftBottomImage = styled.img`
  position: absolute;
  width: 368px;
  height: 208px;
  left: 390px;
  top: 842px;
`;

export const CenterImage = styled.img`
  position: absolute;
  width: 303px;
  height: 600px;
  left: 808px;
  top: 517px;
`;
export const RightImageBox = styled.div``;
export const RightTopImage = styled.img`
  position: absolute;
  width: 368px;
  height: 208px;
  left: 1161px;
  top: 584px;
`;

export const RightBottomImage = styled.img`
  position: absolute;
  width: 368px;
  height: 208px;
  left: 1161px;
  top: 842px;
`;
