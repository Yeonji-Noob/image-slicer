import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function ImageSlicer() {
  return (
    <>
      <ImageSlicerContainer>
        <TwitterUIContainer>
          <ProfileArea>
            <RoundImage />
            <TextWrapper>
              <NickName>데미</NickName >
              <TextContents>하이하이~</TextContents>
            </TextWrapper>
          </ProfileArea>
          <ImageArea style={{ maxWidth: '300px', margin: '10px 0' }}>
            <canvas style={{ width: '100%', height: 'auto' }} />
          </ImageArea>
        </TwitterUIContainer>
        <Wrapper>
          <input type='file' accept='image/*' />
          <button>다운로드</button>
        </Wrapper>
      </ImageSlicerContainer>
    </>
  );
}

const resetP = css`
  margin: 0;
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
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`

const RoundImage = styled.div`
width: 55px;
height: 55px;
border-radius: 50%;
background-color: blue;
`

const ProfileArea = styled.div`
display: flex;

`
const TextWrapper = styled.div``

const NickName = styled.p`
${resetP}
`
const TextContents = styled.p`
${resetP}
`

const ImageArea = styled.div`
max-width: 100%;
max-height: 292.25px;
background-color: blue;
`


const Wrapper = styled.div`
  display: flex;
`