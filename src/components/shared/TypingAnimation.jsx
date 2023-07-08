import React from 'react';
import Typewriter from "typewriter-effect";

const TypingAnimation = () => {
    return (
        <>
            <Typewriter
                options={{
                    strings: ["MERN Stack Developer", "Ui Designer", "Self Learner"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 5
                }}
            />
        </>
    );
};

export default TypingAnimation;