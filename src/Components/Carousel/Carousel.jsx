import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Card';
// import two from '../../img/hero3.jpg';
// import three from '../../img/hero4.jpg';
// import four from '../../img/hero5.jpg';
// import five from '../../img/red1.png';


const data= [

    {
        id: 1,
        title: 'Card Title',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    }, 

    {
        id: 2,
        title: 'Card Video2',
        text: "Some quick example text to build on the card.",
    }, 

    {
        id: 3,
        title: 'Card Cart',
        text: "Some quick example text to build on the card.",
    },
    
    {
        id: 4,
        title: 'Card option3',
        text: "Some quick example text to build on the card.",
    }, 

    {
        id: 5,
        title: 'Card Video4',
        text: "Some quick example text to build on the card.",
    },

    {
        id: 6,
        title: 'Card Video5',
        text: "Some quick example text to build on the card Tom cully",
    },
]


function chunkArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    console.log('chunk result', result);
    return result
}
 
 const CarouselEx = () => {

    //     const [index, setIndex] = useState(0);
      
    //     const handleSelect = (selectedIndex, e) => {
    //       setIndex(selectedIndex);
    //     };
      
    //     return (
    //         <div className='caroContainer'>
    //       <Carousel activeIndex={index} onSelect={handleSelect}>
    //         <Carousel.Item>
    //           <img
    //             className="d-block w-100"
    //             src="holder.js/800x400?text=First slide&bg=373940"
    //             alt="First slide"
    //           />
    //           <Carousel.Caption>
    //             <h3>First slide label</h3>
    //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className="d-block w-100"
    //             src="holder.js/800x400?text=Second slide&bg=282c34"
    //             alt="Second slide"
    //           />
      
    //           <Carousel.Caption>
    //             <h3>Second slide label</h3>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className="d-block w-100"
    //             src="holder.js/800x400?text=Third slide&bg=20232a"
    //             alt="Third slide"
    //           />
      
    //           <Carousel.Caption>
    //             <h3>Third slide label</h3>
    //             <p>
    //               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //             </p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //       </Carousel>
    //       </div>
    //     );
    //   }
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
    
      setIndex(selectedIndex);
    };
  
    return (
        <div className='caroContainer'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
       {chunkArray(data, 3).map((chun, index) =>{
           {console.log('chunnn', chun)}
       return <Carousel.Item key={index} activeIndex={index} className='carousel__item'>
          {/* {chun.map((item, idx) =>
          {console.log('Item', item)
        return <Cards item={item}  key={idx}/>}
            // <div className='catoItem' key={idx}>{item.name}</div>
         )} */}
          
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
       }
        
      
        )}
       
      </Carousel>
      </div>
    );
 }
  
  {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
  
export default CarouselEx;