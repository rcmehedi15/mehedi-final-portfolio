import React from 'react';
import Typewriter from "typewriter-effect";

const TypingAnimation = () => {
    return (
        <>
            <Typewriter
                options={{
                    strings: ["Self Learner","Critical Thinker", "Problem Solver", "Team Player"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 2
                }}
            />
        </>
    );
};

export default TypingAnimation;