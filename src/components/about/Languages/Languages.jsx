import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';

const Languages = () => {
    const { aboutLanguages } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light'># Language</h2> <br />

            {aboutLanguages.map((Language) => (
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                    key={Language.id}
                >
                    {Language.Language}
                </p>
            ))}
        </div>
    );
};

export default Languages;