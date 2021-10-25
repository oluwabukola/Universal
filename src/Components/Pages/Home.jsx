import React from 'react';
import Navigation from '../Header/Navigation';
import TrendingVideos from './TrendingVideos';

const Home = () => {
    return (
        <>
        <Navigation />
        <div className='home'>
            <section className='hero'>
           
            <div className='hero__text'>
                <div className='hero__text--heading'><h2>Become a universal member</h2></div>
                <div className='hero__text--body'><p>Engage with UNIVERSAL_PAINLESS in a whole new way. UNIVERSAL_PAINLESS Members earn exclusive access to unforgettable events with big names from the universal stage.</p></div>
                <div className='search'>
                    <input  type='text'  placeholder='search' name='search' className='search__input'/>
                    <button className='search__button'>Search</button>
                </div>
                
                </div>
                 <div className='hero__logo'>UNIVERSAL_PAINLESS</div>
            </section>
         <TrendingVideos />
        </div>
       

        
        </>
    )
}

export default Home