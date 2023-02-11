import React from 'react'
import Nav from  '../Nav';
import {Link} from 'react-router-dom';
import logo from '../images/mlp.png'
import Sidebar from '../Sidebar'
function Mlp() {
    return (
        <div className='screen'>
        <Nav/>
        <div className='main'>
           <Sidebar/>
            <div className='pmain'>
                <div className='description'>
                    <div className='ptitle'>
                            <span>
                           Machine Learning Playground
                            </span>
                    </div>
                     <div className='para'>
                         <span>
                        This is a website with nice visualisation of various Machine Learning classification algorithms on different datasets. One can change the dataset with adding data points and adding noise making it a new dataset . There are multiple algorithms which one can test on the generated dataset . 

                        Hyperparameter tuning can also be done to visualize the improved performance . 

                        There is an option of ensemble technique as well for those who wants mess around with ensemble techniques like bagging and voting ensemble techniques.
                         </span>

                     </div>
                     <div className='git'>
                       <a className='link' id='git' href='https://share.streamlit.io/prabhath07/ml-playground/main/web.py'> <img src='https://docs.streamlit.io/logo.svg'/> <span className='giticon'> Application</span></a>
                       <a className='link' href ='https://github.com/prabhath07/ML-Playground' id='git'> <img src='https://www.tensorflow.org/images/GitHub-Mark-32px.png'/> <span className='giticon'> Git Repo</span></a>
                       
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

export default Mlp
