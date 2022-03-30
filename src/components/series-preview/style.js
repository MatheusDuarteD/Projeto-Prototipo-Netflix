import styled from 'styled-components'

export const WrapperBackgroundImageDiv = styled.div`
  position: relative;
  height: 65vh;
  width: 100%;
  background-image: ${props => props.imageUrl};
  background-clip: contain;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 20px;
  display: flex;
`

export const WrapperSeriesDescriptionDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 30px;
`

export const WrapperText = styled.div`
  gap: 10px;
  width: 100%;
  height: 60%;
  max-height: 60%;
  box-sizing: border-box;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  h1 {
    font-size: var(--titleFontSize);
    font-weight: bold;
    color: white;
    max-width: 50%;
  }
  p {
    font-size: var(--supportingTextFontSize);
    color: white;
    max-width: 45%;
  }
  @media only screen and (max-width: 280px) {
    p {
      display: none;
    }
  }
`

export const WrapperVideoPreviewDiv = styled.div`
  position: relative;
  height: 65vh;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
`
