import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';

const Languages = () => {
    const { aboutLanguages } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 '>#  <span className='ml-2'>Languages</span></h2> <br />

            <ul className="w-full">

                <li className="w-full mb-8 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> ● </h5>
                    <div className="flex-1 ml-8">

                        <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                            Bengali -
                        </h5>


                        <p
                            className="w-full text-lg mt-2 text-ternary-dark dark:text-ternary-light"

                        >
                            Native | Fluent Speaking | Listening | Reading and Writing
                        </p>
                    </div>
                </li>

                <li className="w-full mb-8 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> ● </h5>
                    <div className="flex-1 ml-8">

                        <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                            English -
                        </h5>


                        <p
                            className="w-full text-lg mt-2 text-ternary-dark dark:text-ternary-light"

                        >
                            Fluent Speaking | Listening | Reading and Writing
                        </p>
                    </div>
                </li>

                <li className="w-full mb-8 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> ● </h5>
                    <div className="flex-1 ml-8">

                        <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                        Hindi - 
                        </h5>


                        <p
                            className="w-full text-lg mt-2 text-ternary-dark dark:text-ternary-light"

                        >
                           Conversational | Speaking | Listening and Understanding
                        </p>
                    </div>
                </li>
            </ul>

        </div>
    );
};

export default Languages;