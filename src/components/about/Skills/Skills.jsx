import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';

const Skills = () => {
	const { aboutSkills } = useContext(AboutMeContext);

    return (
        <>
            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4'># Skills</h2> <br />
            {aboutSkills.map((skills) => (
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                    key={skills.id}
                >
                    {skills.skills}
                </p>
            ))}
        </>
    );
};

export default Skills;