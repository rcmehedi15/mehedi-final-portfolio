import React from 'react';
import Typewriter from "typewriter-effect";

const TypingAnimation = () => {
    return (
        <>
            <Typewriter
                options={{
                    strings: ["MERN Stack Learner", "Ex Graphic Designer", "Self Learner"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 5
                }}
            />
        </>
    );
};

export default TypingAnimation;