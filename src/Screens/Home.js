import React from 'react';
import './Home.css';
import { InstaHead, Headtag, Hometext, HomeFoot, Bookbtn,BgImg } from '../Components/styles';
import { Link, animateScroll as scroll } from 'react-scroll';

const Home = () => {
    return (
        <div className='cont' id='home'>
            <div className="video-background">
                <div className="video-foreground">
                    <iframe src="https://www.youtube.com/embed/CEB5fApQLw4?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=CEB5fApQLw4&mute=1" frameborder="0" allowfullscreen></iframe>
                </div>
                <BgImg/>
            </div>

            <div id="vidtop-content">
                <Headtag>
                    <InstaHead href='https://instagram.com/fitness_kishore?utm_medium=copy_link' target="_blank">By @Fitness_Kishore</InstaHead>
                    <Hometext>Fitness Consultant</Hometext>
                    {/* <HomeFoot>Fitness Consultant</HomeFoot> */}
                    <Link  to='contact' smooth={true} duration={1500}><Bookbtn>Book appointment</Bookbtn></Link>
                    
                </Headtag>
            </div>
        </div>
    );
}

export default Home;