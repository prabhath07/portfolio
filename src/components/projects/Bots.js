import React from 'react'
import Nav from  '../Nav';
import {Link} from 'react-router-dom';
import logo from '../images/bots.jpg'
// import { Sidebar } from 'rsuite';
import Sidebar from '../Sidebar'
function Bots() {
    return (
        <div className='screen'>
        <Nav/>
        <div className='main'>
           <Sidebar/>
            <div className='pmain'>
                <div className='description'>
                    <div className='ptitle'>
                            <span>
                            VAE and Beta Variational Auto encoder
                            </span>
                    </div>
                     <div className='para'>
                         <span>
                         I created an application to create random cryptopunk images using Variational Auto Encoders and Beta variational Auto Encoders . 
                         I followed my own approach of training Beta VAES where the decoder and the encoder are independent to each other .
                         The latent space in both the models is of size 512 and the analysis of 512 latent space distributions are plotted graphically to describe the performance of the models and effect of various latent space models .
                         </span>

                     </div>
                     <div className='git'>
                       <a className='link' id='git' href = 'https://share.streamlit.io/prabhath07/crypto_punk_generator/main/webpunk.py'> <img src='https://docs.streamlit.io/logo.svg'/> <span className='giticon'> Application</span></a>
                       <a className='link' href ='https://github.com/prabhath07/crypto_punk_generator' id='git'> <img src='https://www.tensorflow.org/images/GitHub-Mark-32px.png'/> <span className='giticon'> Git Repo</span></a>
                       
                       {/* <Link className='link'>  <span className='Colabicon'> Notebook</span></Link> */}

                     </div>
                </div>
                <div className='image'>
                    <img src='https://i.insider.com/60f1a7e17b0ec5001800a739?width=1000&format=jpeg&auto=webp' className='abimage'></img>

                </div>

            </div>
        </div>


    </div>
    )
}

export default Bots
