import styled, { keyframes } from "styled-components";
import * as palette from './Variables.js';
import fat from '../Assets/fat.png';
import Slim from '../Assets/Slim.png';

const testani = keyframes`
  0%,25%,50%,70%{
    background-image: url(${fat});
  }
  100% {
    background-image: url(${Slim});
  }
`

const testtrans = keyframes`
  0%{
    top: 30%;
    left: 0%;
    opacity: 1;
  }
  6%{
    top: 30%;
    left: 12.5%;
    opacity: 1;
  }
  12.5% {
    top: 30%;
    left: 25%;
    opacity: 0.7;
    visibility: hidden;
  }
  100%{
    visibility: hidden;
  }
`
const testtrans2 = keyframes`
  0%{
    top: 45%;
    right: 0%;
    opacity: 1;
  }
  6%{
    top: 45%;
    right: 12.5%;
    opacity: 1;
  }
  12.5% {
    top: 45%;
    right: 25%;
    opacity: 0.7;
    visibility: hidden;
  }
  100%{
    visibility: hidden;
  }
`
const testtrans3 = keyframes`
  0%{
    top: 60%;
    left: 0%;
    opacity: 1;
  }
  6%{
    top: 60%;
    left: 12.5%;
    opacity: 1;
  }
  12.5% {
    top: 60%;
    left: 25%;
    opacity: 0.7;
    visibility: hidden;
  }
  100%{
    visibility: hidden;
  }
`
const testtrans4 = keyframes`
  0%{
    top: 80%;
    right: 0%;
    opacity: 1;
  }
  6%{
    top: 80%;
    right: 12.5%;
    opacity: 1;
  }
  12.5% {
    top: 80%;
    right: 25%;
    opacity: 0.7;
    visibility: hidden;
  }
  100%{
    visibility: hidden;
  }
`
const up = keyframes`
  0%{
    opacity: 1;
    transform: translateY(0px) rotate(90deg);
  }
  100%{
    opacity: 0.6;
    transform: translateY(-10px) rotate(90deg);
  }
`
export const Container = styled.div`
width: 100%;
height: 100%;
/* height: fit-content; */
margin: 0;
padding: 0;
`;

export const Headtag = styled.div`
position: absolute;
left: 0%;
top: 12vh;
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const MenuOpt=styled.div`
@media (min-width:720px) {
  display: none;
}
`;

export const InstaHead = styled.a`
font-family: 'Cantata One', serif;//"Source Sans Pro", sans-serif
font-size:  2.5vw;
font-weight: 700;
cursor: pointer;
background-image: linear-gradient(45deg, #A4FAB0, #57aeff);
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
text-decoration: none;
&:hover{
    transition: 0.4s ease-in-out;
    text-shadow: 2px 2px 5px lightblue;
}
/* display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
mix-blend-mode: multiply; */
`;
export const Hometext = styled.p`
font-size: 1.6vw;
font-weight: 400;
width:80vw;
text-align: center;
font-family: 'Bree Serif', serif;
color: ${palette.Honeydew};
`;
export const HomeFoot = styled.p`
font-size: 1.4vw;
font-weight: 500;
text-align: center;
width: 30vw;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
color: ${palette.Honeydew};
`;
export const Bookbtn = styled.button`
background-color: ${palette.lytblack};
width: fit-content;
height: auto;
border-radius: 5vw;
padding: 1.5vw 3vw;
font-size: 1.4vw;
font-weight: 600;
color: ${palette.Honeydew};
&:hover{
  box-shadow: 2px 2px 5px black;
  border: 1px solid lightcoral;
}
`;
export const NavBar = styled.div`
height: 15vh;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
color:  ${palette.Honeydew};
@media (max-width: 720px) {
  height: 8vh;
  justify-content: space-between; 
}
`
export const Logo = styled.img`
 height: 15vh;
 width: auto;
 &:hover{
   transform: rotate(20deg);
   transition: 0.4s ease-in-out;
 }
 @media (max-width: 720px) {
  height: 8vh;
  margin: 5vh 1vh 0vh;
}
`
export const Ico = styled.img`
 height: 3vh;
 width: auto;
 @media (max-width: 720px) {
  margin: 5vh 1vh 0vh;
}
`
export const StickyArr = styled.img`
position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 87.5vh;
  left: 92.5vw;
  width: 4vw;
  transform: rotate(90deg);
  animation: ${up} 1s linear infinite;
`
export const Arrow = styled.img`
 height: 2rem;
 width: auto;
 color:${palette.lytViolet};
 transform: rotate(${props => props.angle}deg);
 @media (max-width: 720px) {
   height: 1rem;
 }
`
export const NavIns = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 30%;
@media (max-width:720px) {
  display: none;
}
`
export const NavItem = styled.p`
font-size: 1rem;
font-weight: 400;
padding: 0.5rem;
margin: 2px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
cursor: pointer;
&:hover{
  background-color:${palette.lytViolet} ;
  border-radius: 0.5rem;
  transition: 0.4s;
}
@media (max-width: 720px) {
  
}
`
export const InfoCont = styled.div`
  width: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;//#162A4A
  @media (max-width: 720px) {
    flex-direction: column;
  }
`
export const ContactCont = styled.div`
  width: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-image: linear-gradient(to top,black, #4E4E4E);
  @media (max-width: 720px) {
    flex-direction: column;
  }
`
export const Infotext = styled.p`
  width: 40%;
  text-align: left;
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: white;
  @media (max-width: 720px) {
    width: 80%;
    font-size: 0.6rem;
  }
`
export const InfoImage = styled.img`
  width: 40%;
  height: auto;
  /* box-shadow: 0px 0px 10px #262626; */
  /* border: 1px solid honeydew; */
  border-radius: 10%;
  @media (max-width: 720px) {
    width: 80%;
  }
`
export const TraImg = styled.img`
  width: 20vw;
  height: 20vw;
  background-color: white;
  border: 1px solid honeydew;
  border-radius: 10%;
  margin: 0% 2.5% 0%;
  box-shadow: 2px 2px 20px black;
`
export const SliderCont = styled.div`
  width: 90vw;
  height: auto;
  padding: 5% 2% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`
export const TransformHead = styled.h1`
font-size: 2rem;
text-align: center;
font-weight: 700;
line-height: 0rem;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
color: ${palette.lytViolet};
text-shadow: 2px 2px 10px black;
&:hover{
  text-shadow: 2px 2px 15px black;
  font-size: 2.1rem;
  transition: 0.4s;
  transition-timing-function: ease-in-out;
}
@media (max-width: 720px) {
    font-size: 1rem;
  }
`
export const TransCont = styled.div`
  width: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to left,black, #4E4E4E);
`

export const ProgCont = styled.div`
  width: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right,black, #4E4E4E);
`
export const TransImg = styled.div`
width: 30vw;
height: 45vw;
background-image: url(${fat});
background-size: cover;
animation: ${testani} 8s linear infinite;
background-repeat: no-repeat;
position: relative;
`

export const CardCont = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
export const ImgCard = styled.img`
width: 20vw;
height: 20vw;
background-color: white;
border: 1px solid white;
border-radius: 2%;
z-index: 1;
position: relative;
top: -20%;
padding: 0;
margin-bottom: -20%;
box-shadow: 0 2px 2px grey;
object-fit: cover;
`
export const HideText = styled.div`
position : relative;
top : -60%;
font-size: 0.8rem;
font-weight: 400;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color : #111;
  text-align : center;
  visibility : hidden;
  opacity : 0;
  transition : 0.3s ease-in-out;
  @media (max-width: 1080px) {
    font-size: 0.6rem;
  }
  @media (max-width: 820px) {
    font-size: 8px;
  }
  @media (max-width: 720px) {
    font-size: 6px;
  }
  @media (max-width: 500px) {
    font-size: 4px;
  }
`
export const CardHead = styled.p`
font-size: 1rem;
font-weight: 700;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
/* position : relative;
top : -100%; */
color : #111;
text-align : center;
@media (max-width: 1080px) {
    font-size: 0.8rem;
  }
  @media (max-width: 720px) {
    font-size: 8px;
  }
  @media (max-width: 500px) {
    font-size: 5px;
  }
`
export const ContentCard = styled.div`
width: 23vw;
height: 23vw;
background-color: white;
border: 1px solid white;
color: black;
display: flex;
/* align-items: center; */
justify-content: center;
word-wrap: break-word;
box-shadow: 2px 8px 4px #2C2A2A;
padding: 2%;
padding-bottom: 0%;
flex-wrap: wrap;
border-radius: 2%;
margin: 2.5vh 2.5vw 5vh;
&:hover{
  height: 25vw;
  transition : 0.4s linear;
  border: 1px solid #09F9F2;
}
&:hover ${HideText} {
    visibility: visible;
    opacity: 1;
    /* align-items: center;
    justify-content: center; */
    //top: -20vh;
    transition : 0.4s linear;
  }
&:hover ${CardHead} {
    visibility: hidden;
    opacity: 0;
    transition : 0.4s linear;
  }
&:hover ${ImgCard} {
  /* visibility: hidden; */
  top: -70%;
  transition : 0.4s linear;
  border: 3px solid lightcoral;
  box-shadow: 0px 8px 4px grey;
  }
`

export const TransText = styled.div`
width: fit-content;
height: 2rem;
padding: 0 8% 0;
font-size: 0.7rem;
font-weight: 600;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
text-align: center;
color: black;
background-color: lavender;
border: 1px solid white;
border-radius: 40%;
align-items: center;
display: flex;
position: absolute;
animation: ${props => props.del == 0 ? testtrans : props.del == 1 ? testtrans2 : props.del == 2 ? testtrans3 : testtrans4} 8s linear infinite;
animation-delay: ${props => props.del}s;
@media (max-width: 720px) {
    font-size: 0.5rem;
  }
`
export const AchieveTag= styled.p`
width: 100%;
  text-align: left;
  flex-wrap: wrap;
  font-size: 0.8rem;
  line-height: 0.9rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: white;
  @media (max-width: 720px) {
    font-size: 0.5rem;
  }
`;

export const Achievedate= styled.span`
color: ${palette.niceblue};
`
export const Sign= styled.span`
font-family: 'Hurricane', cursive;
font-size: 1.2rem;
  @media (max-width: 720px) {
    font-size: 1rem;
  }
`;