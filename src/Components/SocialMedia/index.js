import React, { Component }  from 'react';
import axios from 'axios';
import {SocialMediaSection,Social,Icon,Span,P,SpanInfo} from './style.js';

class SocialMedia extends Component{
  state ={
    social :[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(res => {this.setState({social: res.data.social})})
}
  render(){
    const {social} =this.state;
    const SocialList = social.map((socialItem)=>{
      return (
       
                
        <Social item ={socialItem.id} key={socialItem.id}>
            <Icon className={socialItem.icon}></Icon>
            <P>
                <Span>{socialItem.title}</Span>
                <SpanInfo>{socialItem.body}</SpanInfo>
            </P>
        </Social>
      

      );
    })
    return(
      <SocialMediaSection>
                {SocialList}
      </SocialMediaSection>
    
    )

  }

}

export default SocialMedia;