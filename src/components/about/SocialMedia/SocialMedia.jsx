import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';
import './SocialMedia.css'
const SocialMedia = () => {
    const { aboutSocialMedia } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 '>#  <span className='ml-2'> Social Links 🔗 </span></h2> <br />
            <ul className="w-full">

                <li className="w-full mb-2 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> - </h5>
                    <div className="flex-1 ml-8">
                        <h5 className="w-full text-2xl text-ternary-dark dark:text-ternary-light">
                            <a  href="https://www.linkedin.com/in/rcmehedi15/" target="_blank" rel="noreferrer" >LinkedIn</a>
                        </h5>
                    </div>
                </li>
                <li className="w-full mb-2 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> - </h5>
                    <div className="flex-1 ml-8">
                        <h5 className="w-full text-2xl text-ternary-dark dark:text-ternary-light">
                            <a  href="https://codeforces.com/profile/rcmehedi15" target="_blank" rel="noreferrer" >Codeforces</a>
                        </h5>
                    </div>
                </li>
                <li className="w-full mb-2 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> - </h5>
                    <div className="flex-1 ml-8">
                        <h5 className="w-full text-2xl text-ternary-dark dark:text-ternary-light">
                            <a  href="https://www.hackerrank.com/rcmehedi15" target="_blank" rel="noreferrer" >Hacker Rank</a>
                        </h5>
                    </div>
                </li>

                <li className="w-full mb-2 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> - </h5>
                    <div className="flex-1 ml-8">
                        <h5 className="w-full text-2xl text-ternary-dark dark:text-ternary-light">
                            <a href="https://github.com/rcmehedi15" target="_blank" rel="noreferrer" >GitHub</a>
                        </h5>
                    </div>
                </li>

                <li className="w-full mb-2 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> - </h5>
                    <div className="flex-1 ml-8">
                        <h5 className="w-full text-2xl text-ternary-dark dark:text-ternary-light">
                            <a href="https://www.facebook.com/rcmehedi15" target="_blank" rel="noreferrer" >Facebook</a>
                        </h5>
                    </div>
                </li>
                <li className="w-full mb-2 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> - </h5>
                    <div className="flex-1 ml-8">
                        <h5 className="w-full text-2xl text-ternary-dark dark:text-ternary-light">
                            <a href="https://www.instagram.com/rcmehedi15" target="_blank" rel="noreferrer" >Instagram</a>
                        </h5>
                    </div>
                </li>

            </ul>

        </div>
    );
};

export default SocialMedia;