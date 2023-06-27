import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';

const SocialMedia = () => {
    const { aboutSocialMedia } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light'># Social Media</h2> <br />

            {aboutSocialMedia.map((SocialMedia) => (
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                    key={SocialMedia.id}
                >
                    {SocialMedia.SocialMedia}
                </p>
            ))}
        </div>
    );
};

export default SocialMedia;