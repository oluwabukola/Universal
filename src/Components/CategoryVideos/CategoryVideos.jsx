import React from 'react';
import VideoImage from '../Pages/VideoImage';
import VideoDescription from '../VideoPages/VideoDescription';
import {IoIosVideocam} from 'react-icons/io';
import PaginatedItems from '../Pagination/Pagination';
import one from '../../img/one.jpg';
import two from '../../img/two.jpg'
import three from '../../img/three.jpg'
import four from '../../img/four.jpg';
import five from '../../img/five.jpg';
import six from '../../img/six.jpg';
import seven from '../../img/seven.jpg';
import eight from '../../img/eight.jpg';
import nine from '../../img/nine.jpg';
import ten from '../../img/ten.jpg';
import eleven from '../../img/eleven.jpg';
import twelve from '../../img/twelve.jpg';
import thirteen from '../../img/thirteen.jpg';
const mages = [one, two, three, four, five, six, seven,
    eight, nine, ten, eleven, twelve, thirteen]


const CategoryVideos = ({pic}) => {
    
    return (
        <div className='category'>
           <div className='category__header'>
               <div className="category__header--content">
               <div className='category__title' >
               <span className="category__title--icon">
                   <IoIosVideocam />
               </span>
               Trending
               </div>
               <div className="category__search">
                   <select name="" id="" className='duration'>
                       <option value="">--Select Duration--</option>
                       <option value="">0-6mins</option>
                       <option value="">10-18mins</option>
                   </select>
             
            </div>
            </div>
            <div className="category__rule"></div>
            </div> 
       
            
            <div className="category__videos">
                { mages && mages.map( (pic) => 
              <div className="category__videos--content">
                    <VideoImage pic={pic} />
                    <VideoDescription />
                </div>
                   ) }
             
                {/* <div className="category__videos--content">
                    <VideoImage />
                    <VideoDescription />
                </div>
                <div className="category__videos--content">
                    <VideoImage />
                    <VideoDescription />
                </div>
                <div className="category__videos--content">
                    <VideoImage />
                    <VideoDescription />
                </div>
                <div className="category__videos--content">
                    <VideoImage />
                    <VideoDescription />
                </div>
                <div className="category__videos--content">
                    <VideoImage />
                    <VideoDescription />
                </div>
                <div className="category__videos--content">
                    <VideoImage />
                    <VideoDescription />
                </div>
                <div className="category__videos--content">
                    <VideoImage />
                    <VideoDescription />
                </div>
                <div className="category__videos--content">
                    <VideoImage />
                    <VideoDescription />
                </div>
                <div className="category__videos--content">
                    <VideoImage />
                    <VideoDescription />
                </div> */}
            </div>

            {/* <PaginatedItems itemsPerPage={4} /> */}
        </div>
    )
}

export default CategoryVideos
