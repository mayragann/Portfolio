import React from 'react'
import './Contact.css'
import {RiSendPlaneFill} from 'react-icons/ri';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';


const Contact = () => {
    return (
        <div className='container contact-section' id='contactme'>
            <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                    <Zoom top>
                        <div className='contact-form-image'>
                            <img src='https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='phone home screen with social icons'/>

                        </div>
                    </Zoom>
                </div>
                <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
                    <Bounce>
                        <div className='contact-form-design'>
                            <div className='text-center'>

                                <h5>Contact Me</h5>
                            </div>
                            <form name="contact" method="post">
                                <input type="hidden" name="form-name" value="contact"/>
                                <div className='contact-form'>
                                    <label className='form-label'>Name</label>
                                    <input type="text" name="name" className='form-control'></input>
                                </div>
                                <div className='contact-form'>
                                    <label className='form-label'>Email</label>
                                    <input type="email" name="email" className='form-control'></input>
                                </div>
                                <div className='contact-form'>
                                    <label className='form-label'>Message</label>
                                    <textarea rows='6' name="message" className='form-control'></textarea>
                                </div>
                                <div className='button-submit'>
                                    <button type="submit">Send
                                        <RiSendPlaneFill size={20}/></button>
                                </div>
                            </form>

                        </div>
                    </Bounce>
                </div>
            </div>

        </div>
    )
}

export default Contact
