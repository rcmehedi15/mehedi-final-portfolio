import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FaCode } from 'react-icons/fa';
import developerLight from '../../images/mainpic.png';
import developerDark from '../../images/mainpic.png';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';

import './AppBanner.css'
const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 lg:text-3xl xl:text-4xl text-center sm:text-left  text-ternary-dark dark:text-primary-light "
				>
					Md Mehedi Hasan
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					<TypingAnimation />
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						target='_blank'
						href="https://drive.google.com/drive/folders/1S0I3KWrTP4B0zD0pZXZD3THr01yqmv4K?usp=sharing"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FaCode className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FaCode>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							My Resume
						</span>

					</a>
				</motion.div>
			</div>
			<div className='imgBg'></div>
			<div className="widthHeight sm:mt-0">
				<img
					src={activeTheme === 'dark' ? developerLight : developerDark}
					alt="Developer"
				/>
			</div>

		</motion.section>
	);
};

export default AppBanner;
