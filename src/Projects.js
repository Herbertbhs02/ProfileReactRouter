import React from "react";
import Slider from "react-slick";
import './index.css';
import Calculator from './Calculator';
import Currency from './Currency';
import AdminInterface from './AdminInterface';
import Weather from './Weather';
import Wikipedia from './Wikipedia';
import Connectbambi from './Connectbambi'
 

 class Projects extends React.Component {
 
  next=()=> {
    this.slider.slickNext();
  }
  previous=()=> {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div  style={{ textAlign: "center" }} >
        <h2 >Web Development Projects</h2>

        <div className='PreNext' >
        <button className="button" onClick={this.previous}>
          Prev
        </button>
        <button className="button" onClick={this.next}>
          Next
        </button>
        <Slider ref={c => (this.slider = c)} {...settings}>
       
        
      
        <div key={1} className='sl'>
           <Currency/>
        </div>

        <div key={2} className='sl'>
           <Connectbambi/>
        </div>
        <div key={3} className='sl'>
           <Weather/>
        </div>

        <div key={4} className='sl'>
        <Wikipedia/>
        </div>
        <div key={5} className='sl'>
             <AdminInterface/>
        </div>

        <div key={6} className='sl'>
            <Calculator/>
        </div>
          
        </Slider>
       
        </div>
      </div>
    );
  }
}
export default Projects;