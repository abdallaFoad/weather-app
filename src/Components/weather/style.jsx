import styled from "@emotion/styled";
import { theme } from "../config";

export const Weather = styled.div`
  label:Weather;
  display:flex;
  align-items: center;
  justify-content: space-between;
  gap:2rem;
  background-color: #444;
  padding:2rem;

`
export const Data = styled.div`
  label:Data;
  color:${theme.whiteColor};
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.3rem;
  border:1px solid #333;
  padding:1rem;
  
`
export const Span = styled.div`
  label:Span;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande';
  font-size:1rem;
  color:${theme.darkColor}

`