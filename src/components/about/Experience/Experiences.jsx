import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';

const Experiences = () => {
    const { aboutExperience } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 '>#  <span className='ml-2'>Work Experiance 👨‍💼</span></h2> <br />

            <ul className="w-full">

            <li className="w-full mb-8 flex ">
                    <h5 className="text-2xl  text-ternary-dark dark:text-ternary-light">4. </h5>
                    <div className="flex-1 ml-8">
                      
                            <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                            Jr. Software Engineer(ReactJS+Django)
                            </h5>
                            <span className="w-full text-lg md:text-xl mb-4 text-ternary-dark dark:text-ternary-light flex items-center  gap-2">
                                <BiSolidShoppingBagAlt />
                                Secret | Uttara-Dhaka, Bangladesh | (Sep 2023 – Present)
                            </span>
                      
                        <p
                            className="w-full text-lg mt-3 text-ternary-dark dark:text-ternary-light"

                        >
                           Collaborated on responsive design and development resolved browser compatibility issues and maintained internal design systems and troubleshooting.
                        </p>
                    </div>
                </li>
                <li className="w-full mb-8 flex ">
                    <h5 className="text-2xl  text-ternary-dark dark:text-ternary-light">3. </h5>
                    <div className="flex-1 ml-8">
                      
                            <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                            Software Engineering (Intern)
                            </h5>
                            <span className="w-full text-lg md:text-xl mb-4 text-ternary-dark dark:text-ternary-light flex items-center  gap-2">
                                <BiSolidShoppingBagAlt />
                                Divine IT LTD | Uttara-Dhaka, Bangladesh | (OCT 2022 – DEC 2022)
                            </span>
                      
                        <p
                            className="w-full text-lg mt-3 text-ternary-dark dark:text-ternary-light"

                        >
                           Collaborated on responsive design and development resolved browser compatibility issues and maintained internal design systems and troubleshooting.
                        </p>
                    </div>
                </li>
               
              <li className="w-full mb-8 flex ">
                    <h5 className="text-2xl  text-ternary-dark dark:text-ternary-light">2. </h5>
                    <div className="flex-1 ml-8">
                      
                            <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                            Assistant General Manager -IT (Remote)
                            </h5>
                            <span className="w-full text-xl   mb-4 text-ternary-dark dark:text-ternary-light flex items-center gap-2">
                                <BiSolidShoppingBagAlt />
                                Travel Til Dawn | South California, USA | (July 2021 – Aug 2022)
                            </span>
                      
                        <p
                            className="w-full text-lg mt-3 text-ternary-dark dark:text-ternary-light"

                        >
                           Assisting in social media post design, website maintenance, video editing and marketing and providing guidance on various business development issues
                        </p>
                    </div>
                </li>
               
                <li className="w-full mb-8 flex ">
                    <h5 className="text-2xl  text-ternary-dark dark:text-ternary-light">1. </h5>
                    <div className="flex-1 ml-8">
                      
                            <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
                            Full Stack Web Developer And Graphic Designer (Remote)
                            </h5>
                            <span className="w-full text-xl   mb-4 text-ternary-dark dark:text-ternary-light flex items-center gap-2">
                                <BiSolidShoppingBagAlt />
                                Fiverr - Upwork | World Wide | (July 2019 – Present)
                            </span>
                      
                        <p
                            className="w-full text-lg mt-3 text-ternary-dark dark:text-ternary-light"

                        >
                           Assisting in social media post design, website maintenance, video editing and marketing and providing guidance on various business development issues
                        </p>
                    </div>
                </li>
               
              
                
            </ul>

        </div>
    );
};

export default Experiences;