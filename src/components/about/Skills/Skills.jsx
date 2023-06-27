import React, { useContext } from 'react';
import AboutMeContext from '../../../context/AboutMeContext';
import html from '../../../assets/skills/html.png'
import css from '../../../assets/skills/css.png'
import tailwind from '../../../assets/skills/tailwind.png'
import js from '../../../assets/skills/js.png'
import git from '../../../assets/skills/git.png'
import github from '../../../assets/skills/github.png'
import react from '../../../assets/skills/react.png'
import mongodb from '../../../assets/skills/mongodb.png'
import mui from '../../../assets/skills/mui.png'
import next from '../../../assets/skills/next.png'
import formik from '../../../assets/skills/formik.png'
import node from '../../../assets/skills/node.png'
import redux from '../../../assets/skills/redux.png'
import sass from '../../../assets/skills/sass.png'
import ts from '../../../assets/skills/ts.png'
import dj from '../../../assets/skills/dj.png'
import socket from '../../../assets/skills/socket.png'
import MySQL from '../../../assets/skills/MySQL.png'
import Python from '../../../assets/skills/Python.svg'

const Skills = () => {
    const { aboutSkills } = useContext(AboutMeContext);

    return (
        <div className='container mx-auto text-ternary-dark dark:text-ternary-light text-lg'>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 '>#  <span className='ml-2'>Skills</span></h2> <br />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 ml-8 ">
                <div className="flex flex-col w-full ml-2">
                    <h4 className="text-sm pb-4 border-b mb-5 h-max dark:text-white">
                        Programming Languages
                    </h4>
                    <div className="flex flex-col ">
                        {/* TypeScript  */}

                        {/* <div className="flex items-center mb-5 last:mb-0">
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
                                        alt="TypeScript"
                                        src={ts}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">TypeScript</p>
                        </div> */}
                        <div className="flex items-center  mb-5 last:mb-0">
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
                                        alt="JavaScript"
                                        src={js}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">JavaScript</p>
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
                                        alt="Python"
                                        src={Python}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">Python</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full ml-2">
                    <h4 className="text-sm border-b pb-4 mb-5 h-max dark:text-white">
                        Frontend
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
                                        background: "white",
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
                                        alt="Next Js"
                                        src={next}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">Next Js</p>
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
                                        alt="React Js"
                                        src={react}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">React Js</p>
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
                                        alt="HTML"
                                        src={html}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">HTML</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full ml-2">
                    <h4 className="text-sm border-b pb-4 mb-5 h-max dark:text-white">
                        User Interface
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
                                        alt="Tailwind CSS"
                                        src={tailwind}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">Tailwind CSS</p>
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
                                        alt="Material UI"
                                        src={mui}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">Material UI</p>
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
                                        alt="CSS"
                                        src={css}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">CSS</p>
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
                                        alt="Sass"
                                        src={sass}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">Sass</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full ml-2">
                    <h4 className="text-sm border-b pb-4 mb-5 h-max dark:text-white">
                        Backend
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
                                        background: "white",
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
                                        alt="Node & Express Js"
                                        src={node}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">
                                Node &amp; Express Js
                            </p>
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
                                        alt="Django"
                                        src={dj}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">Django</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full ml-2">
                    <h4 className="text-sm border-b pb-4 mb-5 h-max dark:text-white">
                        Database
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
                                        alt="MongoDB"
                                        src={mongodb}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">MongoDB</p>
                        </div>
                    </div>
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
                                        alt="MySQL"
                                        src={MySQL}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">MySQL</p>
                        </div>
                    </div>
                </div>

            {/* utls  */}

                {/* <div className="flex flex-col w-full">
                    <h4 className="text-sm border-b pb-4 mb-5 h-max dark:text-white">Utls</h4>
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
                                        alt="Redux & ToolKit"
                                        src={redux}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">
                                Redux &amp; ToolKit
                            </p>
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
                                        alt="Formik"
                                        src={formik}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">Formik</p>
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
                                        alt="Socket.io"
                                        src={socket}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">Socket.io</p>
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-col w-full ml-2">
                    <h4 className="text-sm border-b pb-4 mb-5 h-max dark:text-white">
                        Version Control
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
                                        alt="Git"
                                        src={git}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">Git</p>
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
                                        alt="GitHub"
                                        src={github}
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
                            <p className="text-sm flex-1 px-4 dark:text-white">GitHub</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;