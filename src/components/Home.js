import React from 'react';
import Nav from  './Nav';
import logo from './back.svg';
import logo2 from './back2.svg';

import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className='screen'>
            <Nav/>
            <div className='main'>
                <div className='title'>
                    <spam>
                        Hello, 
                    </spam>
                <Typing loop={true} speed={100}>
                <spam >
                   I'm Prabhath Akula  
                <Typing.Delay ms={3000} />
                <Typing.Backspace count={19} speed={50}/>
                <Typing.Delay ms={500} speed={220} />
                ML Developer
                <Typing.Delay ms={3000} />

                <Typing.Backspace count={18} />
                <Typing.Delay ms={2000} />


                </spam>

                </Typing>
                <div className='butt'>
                    <button>
                        <Link to='/about' className='link'>
                        See More

                        </Link>
                    </button>

                </div>

                </div>
                <div className='image'>

                    <img src ={logo2}/>

                </div>

            </div>


        </div>
    )
}

export default Home
