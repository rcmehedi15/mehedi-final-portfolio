import AboutMeBio from '../components/about/AboutMeBio';
import Skills from '../components/about/Skills/Skills';

import Experiences from '../components/about/Experience/Experiences';
import Education from '../components/about/Education/Education';
import Languages from '../components/about/Languages/Languages';
import ProfessionalCourses from '../components/about/ProfessionalCourses/ProfessionalCourses';
import CoCarriculam from '../components/about/CoCarriculam/CoCarriculam';
import SocialMedia from '../components/about/SocialMedia/SocialMedia';

// import AboutCounter from '../components/about/AboutCounter';
// import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
				
			</motion.div>

			{/* // skills */}
			

				<Skills />
				<Experiences />
				<Education />
				<Languages />
				
				<ProfessionalCourses />
				<CoCarriculam />
				<SocialMedia />


			
		</AboutMeProvider>
	);
};

export default About;
