import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 '>#  <span className='ml-2'> Email Me 📧 </span></h2> <br />

            <ul className="w-full">

                <li className="w-full mb-2 flex ">
                    <h5 className="text-xl   text-ternary-dark dark:text-ternary-light"></h5>
                    <div className="flex-1 ml-8">
                        <h5 className="w-full text-2xl text-ternary-dark dark:text-ternary-light">
                            <p>Feel free to contact me at <a href="mdmehedihasan20188@gmail.com" target="_blank" rel="noreferrer">mdmehedihasan20188@gmail.com</a> or contact my website hire me option. I am always ready to contact you</p>
                        </h5>
                    </div>
                </li>
            </ul>


        </div>
    );
};

export default Contact;