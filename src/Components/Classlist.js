import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Classrow from "./Classrow";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const  Classlist =  () =>{
    const [state, setState] = useState([])
    const [hasError, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const url = 'http://demo6183387.mockable.io/';

    async function fetchData() {
        const res = await fetch(url);
        res
          .json()
          .then(data => {
              setState(data.result)
              setLoading(false)
            })
          .catch(err => setErrors(err));
      }
    
      useEffect(() => {
        fetchData();
      }, [url]);

      const renderSlides = () =>
      Object.keys(state).map(num => (
          
        <div class="cloumn">{num} </div>
      ));

      const settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 4, 
      };


return(
    <section class="livestream-page is-white">
   {!loading && <div class="sticky box">
          <div class="cloumns">
                <Slider {...settings}>
                    {renderSlides()}
                </Slider>
            </div>    
        </div>
       }

    <div class="container">

    <h1 class="title is-4 heading1">BOOK YOUR NEXT STEM ADVENTURE</h1>
    </div>
    <div class="container">
    {  Object.keys(state).map( key => {
 
              return  <Classrow date={key} data={state[key]}/>
         }
         
       )
    }
    </div>
    { console.log("VVV", loading)}
    { loading && <section> <progress class="progress is-large is-primary" max="100">60%</progress></section> }
  </section>
);
  }

  export default Classlist;