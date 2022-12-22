import React  from 'react';
import {CreativeSection,CreativEInfo,InfoTitle,Span,InfoDir,InfoDesc,Anchor} from './style.js';
const About=()=> {
  return (
    <CreativeSection>
    <div className="container">
        <CreativEInfo>
            <InfoTitle><Span>This is</Span> Me</InfoTitle>
            <InfoDir>Web Developer</InfoDir>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor>explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
            </CreativEInfo>
            </div>
        </CreativeSection>
  );
}

export default About;