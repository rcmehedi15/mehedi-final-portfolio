import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';

const CoCarriculam = () => {
	const { aboutCoCarriculam } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto'>
           
				<h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light'># CoCarriculam</h2> <br />
            
            {aboutCoCarriculam.map((CoCarriculam) => (
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                    key={CoCarriculam.id}
                >
                    {CoCarriculam.CoCarriculam}
                </p>
            ))}
        </div>
    );
};

export default CoCarriculam;