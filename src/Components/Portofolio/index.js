import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,ImageWrapper,Image,Overlay,OverlaySpan } from './style.js';




const Portofolio=()=> {
  
  const [Images,setImages] =useState([]);
  useEffect(()=>{
    axios.get('js/data.json').then(res =>{ setImages(res.data.portfolio)})
  },[])
  const PortfolioImages = Images.map((imageItem)=>{
    return(
      <ImageWrapper key={imageItem.id}>
      <Image src={imageItem.image} alt=""/>
      <Overlay>
          <OverlaySpan>
              Show Image
          </OverlaySpan>
        </Overlay>
    </ImageWrapper>
    )
  
      
  })
  
  return (
    <PortfolioSection>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        
        <div class="box">
            {PortfolioImages}
        </div>
    </PortfolioSection>
  );
}

export default Portofolio;