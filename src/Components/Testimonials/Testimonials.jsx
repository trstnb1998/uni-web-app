import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();

    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='testimonials'>
            <img src={ next_icon } alt="" className='next-btn' onClick={ slideForward }/>
            <img src={ back_icon } alt="" className='back-btn' onClick={ slideBackward }/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Emily Oberg</h3>
                                    <span>Edusity, AU</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Mike Makris</h3>
                                    <span>Edusity, AU</span>
                                </div>
                            </div>
                            <p>Pursuing my degree at Edusity ranks as one of the best choices I've ever made. The modern facilities, supportive community, and unwavering commitment to academic excellence have all greatly surpassed my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Isabelle Jane</h3>
                                    <span>Edusity, AU</span>
                                </div>
                            </div>
                            <p>Deciding to pursue my degree at Edusity stands as one of the finest decisions I've ever made. The combination of a supportive community, cutting-edge facilities, and a dedication to academic excellence has greatly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Sean McAdam</h3>
                                    <span>Edusity, AU</span>
                                </div>
                            </div>
                            <p>Opting to pursue my degree at Edusity was among the best choices I've ever made. The commitment to academic excellence, state-of-the-art facilities, and a supportive community have all truly surpassed my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials