import React  from 'react';
import Footer from '../Footer/index.js';
import {DropSection,DropTitle,Span,Form,FormInput,InputText,InputEmail,InputExp,TextArea,Submit} from './style.js';

const Contact=()=> {
  return (
<React.Fragment>
<DropSection>
    <div className="container">
        <DropTitle><Span>Drop </Span>Me A line</DropTitle>
        <Form action="">
            <FormInput>
                <InputText type="text" placeholder="Your Name"/>
                <InputEmail type="email" placeholder="Your Email"/>
            </FormInput>
            <InputExp type="text" placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <Submit type="submit" value="Send Message"/>
        </Form>
    </div>
</DropSection>
<Footer/>
</React.Fragment>

  );
  
}

export default Contact;