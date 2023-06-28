import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';

const CoCarriculam = () => {
    const { aboutCoCarriculam } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 '>#  <span className='ml-2'> Co-Carriculam Activitics ✨</span></h2> <br />

            <ul className="w-full">

                <li className="w-full mb-2 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> - </h5>
                    <div className="flex-1 ml-8">

                        <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                        The Campus Team Leader of the ICT Olympiad Bangladesh. Manage 30+ People.
                        </h5>

                    </div>
                </li>

                <li className="w-full mb-2 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> - </h5>
                    <div className="flex-1 ml-8">

                        <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                        Team Player, Content Creator 
                        </h5>

                    </div>
                </li>

                <li className="w-full mb-4 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> - </h5>
                    <div className="flex-1 ml-8">

                        <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                        Research Technology, Motivator
                        </h5>


                       
                    </div>
                </li>
            </ul>

        </div>
    );
};

export default CoCarriculam;