import React from 'react';
import photoshop from '../../../assets/skills/photoshop.png'
import illustrator from '../../../assets/skills/illustrator.svg'
import Figma from '../../../assets/skills/Figma.svg'
import xd from '../../../assets/skills/xd.svg'


const GraphicDesignSkills = () => {
    return (
        <>
           <div className="flex flex-col w-full ml-2">
                    <h4 className="text-sm border-b pb-4 mb-5 h-max dark:text-white">
                        Graphic Design
                    </h4>
                    <div className="flex flex-col">
                        <div className="flex items-center mb-5 last:mb-0">
                            <div className="w-5 h-5 relative dark:bg-white">
                                <span
                                    style={{
                                        boxSizing: "border-box",
                                        display: "block",
                                        overflow: "hidden",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0
                                    }}
                                >
                                    <img
                                        alt="photoshop"
                                        src={photoshop}
                                        decoding="async"
                                        data-nimg="fill"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            boxSizing: "border-box",
                                            padding: 0,
                                            border: "none",
                                            margin: "auto",
                                            display: "block",
                                            width: 0,
                                            height: 0,
                                            minWidth: "100%",
                                            maxWidth: "100%",
                                            minHeight: "100%",
                                            maxHeight: "100%",
                                            objectFit: "contain"
                                        }}
                                        sizes="100vw"
                                    />
                                </span>
                            </div>
                            <p className="text-sm flex-1 px-4 dark:text-white">Photoshop</p>
                        </div>
                        <div className="flex items-center mb-5 last:mb-0">
                            <div className="w-5 h-5 relative dark:bg-white">
                                <span
                                    style={{
                                        boxSizing: "border-box",
                                        display: "block",
                                        overflow: "hidden",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0
                                    }}
                                >
                                    <img
                                        alt="illustrator"
                                        src={illustrator}
                                        decoding="async"
                                        data-nimg="fill"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            boxSizing: "border-box",
                                            padding: 0,
                                            border: "none",
                                            margin: "auto",
                                            display: "block",
                                            width: 0,
                                            height: 0,
                                            minWidth: "100%",
                                            maxWidth: "100%",
                                            minHeight: "100%",
                                            maxHeight: "100%",
                                            objectFit: "contain"
                                        }}
                                        sizes="100vw"
                                    />
                                </span>
                            </div>
                            <p className="text-sm flex-1 px-4 dark:text-white">illustrator</p>
                        </div>
                        <div className="flex items-center mb-5 last:mb-0">
                            <div className="w-5 h-5 relative dark:bg-white">
                                <span
                                    style={{
                                        boxSizing: "border-box",
                                        display: "block",
                                        overflow: "hidden",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0
                                    }}
                                >
                                    <img
                                        alt="Figma"
                                        src={Figma}
                                        decoding="async"
                                        data-nimg="fill"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            boxSizing: "border-box",
                                            padding: 0,
                                            border: "none",
                                            margin: "auto",
                                            display: "block",
                                            width: 0,
                                            height: 0,
                                            minWidth: "100%",
                                            maxWidth: "100%",
                                            minHeight: "100%",
                                            maxHeight: "100%",
                                            objectFit: "contain"
                                        }}
                                        sizes="100vw"
                                    />
                                </span>
                            </div>
                            <p className="text-sm flex-1 px-4 dark:text-white">Figma</p>
                        </div>
                       {/*  */}
                    </div>
                </div> 
        </>
    );
};

export default GraphicDesignSkills;