import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Spacer from "./utils/Spacer";
import TickIcon from "./components/TickIcon";

export default function ImageSlicer() {

  return (
    <ImageSlicerContainer>
      <TwitterUIContainer>
        <ProfileArea>
          <RoundImage />
          <TextWrapper>
            <UserInfo>
              <NickName>사진댕겅댕겅</NickName >
              <TickIcon />
              <ID>@image_slicer</ID >
            </UserInfo>
            <Spacer axis={"horizontal"} size={5} />
            <TextContents>아래는 미리보기 화면입니당</TextContents>
          </TextWrapper>
        </ProfileArea>
        <Spacer axis={"horizontal"} size={12} />
        <ImageArea>
          <Spacer axis={"vertical"} size={48} />
          <CanvasWrapper>
            <canvas style={{ width: '100%', height: 'auto' }} />
          </CanvasWrapper>
        </ImageArea>
      </TwitterUIContainer>
      <Spacer axis={"horizontal"} size={15} />
      <Wrapper>
        <input type='file' accept='image/*' />
        <button>다운로드</button>
      </Wrapper>
    </ImageSlicerContainer>
  );
}

const resetP = css`
  margin: 0;
  margin-left: 8px;
  font-size: 15px;
`

const ImageSlicerContainer = styled.div`
  display: flex;
  width: 598px;
  height: 398px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

const TwitterUIContainer = styled.div`
  padding: 14px 16px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`

const RoundImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blue;
`

const ProfileArea = styled.div`
  display: flex;
`
const TextWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`
const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const NickName = styled.p`
  ${resetP}
  margin-right:3px;
  line-height: 1;
  padding-top: 2px;
  font-weight: 600;
`

const ID = styled.p`
  ${resetP}
  margin-left: 3px;
  color: #687684;
`

const TextContents = styled.p`
  ${resetP}
`

const ImageArea = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  max-height: 292.25px;

`

const CanvasWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 292.25px;
  border-radius: 12px;
  border: 1px solid #e1e1e1;
`


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`