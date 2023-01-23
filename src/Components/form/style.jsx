import styled from "@emotion/styled";
import { theme } from "../config";

export const ChForm = styled.form`
  label:ChForm;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:2rem;
  width:50%;
  height:50%;
  padding:2rem;
`
export const Input = styled.input`
  label:Input;
  width:100%;
  padding:1rem 1rem;
  background-color: transparent;
  outline:none;
  border:none;
  color:${theme.whiteColor};
  caret-color: ${theme.whiteColor};
  border:2px solid ${theme.whiteColor};
  font-size:1.1rem;
  border-radius:6px;
  ::placeholder{
    color:${theme.whiteColor};
    font-size:1.1rem;
  }
  :hover{
    box-shadow: ${theme.boxShadow};
  }
`

export const Button = styled.button`
  label:Button;
  padding:.8rem;
  color:${theme.whiteColor};
  background-color: ${theme.darkColor};
  font-size:1.3rem;
  border:none;
  outline: none;
  cursor:pointer;
  transition: all .6s;
  border-radius:6px;
  border:2px solid #B3FFAE;
  :hover{
    color:${theme.darkColor};
    background-color:  ${theme.whiteColor};
    border:2px solid #B3FFAE;
  }
`