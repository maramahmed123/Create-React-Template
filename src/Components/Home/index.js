import React  from 'react';
// import { Link } from "react-router-dom";
import {HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style.js';
const Home=()=> {
  return (
    <HomeSection>
    <div className="container">
        <HomeInformation>
            <HomeTitle>Maram Ahmed</HomeTitle>
            <HomeInfo>Web Developer</HomeInfo>
            <HomeDesc>
                Iam a Communication <Span>Engineer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
    </div>
</HomeSection>
  );
}

export default Home;