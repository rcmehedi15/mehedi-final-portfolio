import AboutMeBio from '../components/about/AboutMeBio';
import Skills from '../components/about/Skills/Skills';

import Experiences from '../components/about/Experience/Experiences';
import Education from '../components/about/Education/Education';
import Languages from '../components/about/Languages/Languages';
import ProfessionalCourses from '../components/about/ProfessionalCourses/ProfessionalCourses';
import CoCarriculam from '../components/about/CoCarriculam/CoCarriculam';
import SocialMedia from '../components/about/SocialMedia/SocialMedia';
import Contact from '../components/about/Contact/Contact';

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
			

				<Experiences />
				<Skills />
				<ProfessionalCourses />
				<CoCarriculam />
				<Languages />
				<Education />
				<SocialMedia />
				<Contact />


			
		</AboutMeProvider>
	);
};

export default About;
