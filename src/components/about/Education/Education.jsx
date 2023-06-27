import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';

const Experiences = () => {
    const { aboutEducation } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light'># Education</h2> <br />

            {aboutEducation.map((education) => (
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                    key={education.id}
                >
                    {education.education}
                </p>
            ))}
        </div>
    );
};

export default Experiences;