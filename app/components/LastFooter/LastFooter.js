import React from 'react'
import "./LastFooter.css"
import play from "../images/play.png";
import app from "../images/app.png";
import Image from 'next/image';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineGoogle } from 'react-icons/ai';
import { CiYoutube } from 'react-icons/ci';

const LastFooter = () => {
    return (
        <div className='last_footer'>
            <div className='last_div'>
                <div className='footer_div'>
                    <div className='footer_display'>
                        <div className='Footer_logo_text'>
                            <img className='bazaar_logo' src='https://bazaar.ui-lib.com/assets/images/logo.svg' alt='No Internet' />
                            <p className='para_one'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et,
                                in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut
                                sollicitudin elit at amet.</p>

                            <div className='play_app'>
                                <div className='play_div'>
                                    <div className='play_store'>
                                        <Image src={play} className='play_img' />
                                    </div>
                                    <div className='playtext_div'>
                                        <h6 className='play_text1'>Get it on</h6>
                                        <h6 className='play_text2'>Google Play</h6>
                                    </div>
                                </div>

                                <div className='app_div'>
                                    <div className='app_store'>
                                        <Image src={app} className='play_img' />
                                    </div>
                                    <div className='playtext_div'>
                                        <h6 className='play_text1'>Download On The</h6>
                                        <h6 className='play_text2'>App Store</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='about_us'>
                            <h1 className='aboutus'>About Us</h1>
                            <h4 className='about_text'>Careers</h4>
                            <h4 className='about_text'>Our Stores</h4>
                            <h4 className='about_text'>Our Cares</h4>
                            <h4 className='about_text'>Terms And Condition</h4>
                            <h4 className='about_text'>Privacy policy</h4>
                        </div>

                        <div className='customer_care'>
                            <h1 className='aboutus'>Customer Care</h1>
                            <h4 className='about_text'>Help Center</h4>
                            <h4 className='about_text'>How To Buy</h4>
                            <h4 className='about_text'>Track Your Order</h4>
                            <h4 className='about_text'>Corporate & Bulk Purchasing</h4>
                            <h4 className='about_text'>Return And Refunds</h4>
                        </div>

                        <div className='contact_us'>
                            <h1 className='aboutus'>Contact Us</h1>
                            <h4 className='about_text'>70 Washington Square South, New York, NY 10012, United States</h4>
                            <h4 className='about_text'>Email: uilib.help@gmail.com</h4>
                            <h4 className='about_text'>Phone: +1 1123 456 780</h4>

                            <div className='footer_icons'>
                                <span className='footer_icon'><BsFacebook /></span>
                                <span className='footer_icon'><BsTwitter /></span>
                                <span className='footer_icon'><CiYoutube /></span>
                                <span className='footer_icon'><AiOutlineGoogle /></span>
                                <span className='footer_icon'><AiFillInstagram /></span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastFooter
