import styled from 'styled-components'

export const Bages = styled.span`
position: relative;
margin:0px 10px 0px 10px;
display:inline-block;
&:after{
  width:15px;
  height:15px;
  position:absolute;
  content: "${props => props.value}";
  border-radius:50%;
  background-color:#ff0000;
  color:#ffffff;
  font-size:10px;
  top:-6px;
  left:6px;
  text-align:center;
}
`
