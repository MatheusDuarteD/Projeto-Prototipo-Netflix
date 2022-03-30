import styled from 'styled-components'

export const WrapperButton = styled.div`
  max-height: 40%;
  width: 100vw - 30px;
  margin-top: 70px;
  padding-bottom: 100px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  overflow: hidden;
  @media only screen and (max-width: 680px) {
    margin-top: 40px;
    gap: 30px;
    padding-bottom: 40px;
  }
`
