import React from 'react';

const Experiences = () => {

    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 '>#  <span className='ml-2'>Education 🧶</span></h2> <br />

            <ul className="w-full">

                <li className="w-full mb-8 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> ● </h5>
                    <div className="flex-1 ml-8">

                        <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                            Diploma in Engineering, Computer Science & Technology
                        </h5>
                        <span className="w-full text-lg md:text-xl mb-2 text-ternary-dark dark:text-ternary-light flex items-center  gap-2">


                        </span>

                        <p
                            className="w-full text-lg mt-2 text-ternary-dark dark:text-ternary-light"

                        >
                            Infra Polytechnic Institute- Barishal,<br />
                            Passing Year: 2022, Result:  CGPA 3.91 out of 4.00
                        </p>
                    </div>
                </li>

                <li className="w-full mb-8 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"> ● </h5>
                    <div className="flex-1 ml-8">

                        <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                        Secondary School Certificate(SSC),Science
                        </h5>
                        <span className="w-full text-lg md:text-xl mb-2 text-ternary-dark dark:text-ternary-light flex items-center  gap-2">


                        </span>

                        <p
                            className="w-full text-lg mt-2 text-ternary-dark dark:text-ternary-light"

                        >
                           PRC Institution- Barishal,<br />
                            Passing Year: 2018
                        </p>
                    </div>
                </li>


            </ul>

        </div>
    );
};

export default Experiences;