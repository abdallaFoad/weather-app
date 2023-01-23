import styled from '@emotion/styled';
import { theme } from './config';
import img from './imgs/bg.jpg';


export const ParForm = styled.div`
  label:ParForm;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image:url(${img});
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-size:cover;
  width:100%;
  height:100%;
  position: relative;
  z-index: 5555;
  ::before{
    content: '';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: -1;
    background-color: #d7e2ff40;
    
  }
  `
export const H1 = styled.h1`
  label:H1;
  font-family:'Arial Narrow', Arial, sans-serif;
  color:#B3FFAE
`
export const Form = styled.div`
  label:Form;
  box-shadow:${theme.boxShadow};
  width: 80%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `