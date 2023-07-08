import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 '>#  <span className='ml-2'> Email Me 📧 </span></h2> <br />

            <ul className="w-full">
                <li className="w-full mb-2 flex flex-col sm:flex-row">
                    <h5 className="text-xl text-ternary-dark dark:text-ternary-light"></h5>
                    <div className="flex-1 ml-8">
                        <h5 className="w-full text-xl text-ternary-dark dark:text-ternary-light sm:text-3xl md:text-4xl lg:text-5xl">
                            Feel free to contact me at <br />
                            mdmehedihasan20188@gmail.com or 
                            contact my website hire me option.
                        </h5>

                    </div>
                </li>
            </ul>


        </div>
    );
};

export default Contact;