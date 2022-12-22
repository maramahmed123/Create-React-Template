import React ,{Component} from 'react';


import Home from './../Home';
import About from './../About';
import Footer from './../Footer';
import Portofolio from './../Portofolio';
import Profile from './../Profile';
import SocialMedia from './../SocialMedia';
import Work from './../Work';




class Index extends Component {
  render(){
    return (
      <div className="App">
        <div>
          <Home/>
          <Work/>
          <Portofolio/>
          <Profile/>
          <About/>
          <SocialMedia/>
          <Footer/>
        </div>
  
      </div>
    );
  }

  }


export default Index;
