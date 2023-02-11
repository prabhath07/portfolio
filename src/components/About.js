import React from 'react'
import Nav from './Nav';
import logo from './images/image2.jpeg'
import {Link} from 'react-router-dom'
function About() {
    return (
        <div className='screen'>
        <Nav/>
        <div className='main'>
            <div className='atitle'>
                <div className='at'>
                    <span>
                        About Me 
                    </span>

                </div>
                <div className='at2'>
                    <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>

                </div>
                <div className='butt' style={{marginLeft:'2vw'}}>
                    <button >
                     <Link to='/projects' className='link'>
                     Projects
                     </Link>
                    </button>
                    
                </div>
                </div>
                <div className='image'>
                    <img src = {logo} className='abimage'>

                    </img>

            </div>
        </div>


    </div>
    )
}

export default About
