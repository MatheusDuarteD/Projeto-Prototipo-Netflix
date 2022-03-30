import styled from 'styled-components'

export const WrapperNavBar = styled.nav`
  background-color: #111111;
  width: 100vw - 17px;
  height: 9vh;
  color: #6a6a6a;
  font-size: var(--navBarFontSize);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 680px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    height: 13vh;
  }
`

export const WrapperNavBarImage = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  img {
    height: 100%;
    padding-left: 50px;
  }
  @media only screen and (max-width: 680px) {
    height: 65%;
    width: 100%;
    justify-content: center;
    img {
      padding-left: 0;
    }
  }
`

export const WrapperNavBarButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 55%;
  height: 100%;
  gap: 25px;
  padding-right: 33px;
  a {
    transition: color 0.3s;
    :hover {
      color: white;
    }
  }
  @media only screen and (max-width: 680px) {
    width: 100%;
    justify-content: center;
    padding-right: 0px;
    padding-bottom: 10px;
  }
`
