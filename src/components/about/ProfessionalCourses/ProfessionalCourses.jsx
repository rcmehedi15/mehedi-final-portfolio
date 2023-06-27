import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';

const ProfessionalCourses = () => {
    const { aboutProfessionalCourses } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light'># professional Courses</h2> <br />

            {aboutProfessionalCourses.map((professionalCourse) => (
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                    key={professionalCourse.id}
                >
                    {professionalCourse.professionalCourse}
                </p>
            ))}
        </div>
    );
};

export default ProfessionalCourses;