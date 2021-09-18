import React from 'react'
import Nav from  './Nav';
import {Link} from 'react-router-dom';
import logo from './images/braille.png'

function Projects() {
    return (
        <div className='screen'>
        <Nav/>
        <div className='main'>
            <div className='sidebar'>
                <div className='ptit' id='this' >
              <Link className='link' to='/projects'> <span > Braille Character Recognition</span></Link> 
                </div>
                <div className='ptit'>
               <Link className='link' to='/projects/face'> <span > Face Recognition</span></Link>
                </div>
                <div className='ptit'>
              <Link className='link' to = '/projects/stock'>  <span > Stock prediction using RNN</span></Link>
                </div>
                <div className='ptit'>
             <Link className='link' to = '/projects/system'>   <span > Recommendation System</span></Link>
                </div>
                <div className='ptit'>
              <Link className='link' to = '/projects/bots'>  <span > Reinforcement Bots</span></Link>
                </div>

            </div>
            <div className='pmain'>
                <div className='description'>
                    <div className='ptitle'>
                            <span>
                            Braille Character Recognition
                            </span>
                    </div>
                     <div className='para'>
                         <span>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                         </span>

                     </div>
                     <div className='git'>
                       <a className='link' id='git'> <img src='https://www.tensorflow.org/images/colab_logo_32px.png'/> <span className='giticon'> NoteBook</span></a>
                       <a className='link' href ='https://github.com/prabhath07/Braille-charcter-recognition' id='git'> <img src='https://www.tensorflow.org/images/GitHub-Mark-32px.png'/> <span className='giticon'> Git Repo</span></a>
                       
                       {/* <Link className='link'>  <span className='Colabicon'> Notebook</span></Link> */}

                     </div>
                </div>
                <div className='image'>
                    <img src={logo} className='abimage'></img>

                </div>

            </div>
        </div>


    </div>
    )
}

export default Projects
