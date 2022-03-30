import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => (props.textColor ? props.textColor : 'black')};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  padding: 15px 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  font-weight: bold;
  transition: opacity 0.2s;
  font-size: var(--buttonTextFontSize);
  :hover {
    opacity: 75%;
  }
`
