import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';

const Experiences = () => {
	const { aboutExperience } = useContext(AboutMeContext);

    return (
        <>
           
				<h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light'># Experience</h2> <br />
            
            {aboutExperience.map((experience) => (
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                    key={experience.id}
                >
                    {experience.experience}
                </p>
            ))}
        </>
    );
};

export default Experiences;