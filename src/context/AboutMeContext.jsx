import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { aboutMeSkills } from '../data/aboutMeSkills';
import { aboutMeExperience } from '../data/aboutMeExperience';
import { aboutMeEducation } from '../data/aboutMeEducation';
import { aboutMeLanguages } from '../data/aboutMeLanguages';
import { aboutMeSocialMedia } from '../data/aboutMeSocialMedia';
import { aboutMeProfessionalTraining } from '../data/aboutMeProfessionalTraining';
import { aboutMeCoCarriculam } from '../data/aboutMeCoCarriculam';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	const [aboutSkills, setAboutSkills] = useState(aboutMeSkills)
	const [aboutExperience, setAboutExperience] = useState(aboutMeExperience)
	const [aboutEducation, setAboutEducation] = useState(aboutMeEducation)
	const [aboutLanguages, setAboutLanguages] = useState(aboutMeLanguages)
	const [aboutSocialMedia, setAboutSocialMedia] = useState(aboutMeSocialMedia)
	const [aboutProfessionalTraining, setAboutProfessionalTraining] = useState(aboutMeProfessionalTraining)
	const [aboutCoCarriculam, setAboutCoCarriculam] = useState(aboutMeCoCarriculam)


	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,

				aboutSkills,
				setAboutSkills,

				aboutExperience,
				setAboutExperience,

				aboutEducation,
				setAboutEducation,

				aboutLanguages,
				setAboutLanguages,

				aboutSocialMedia,
				setAboutSocialMedia,

				aboutProfessionalTraining,
				setAboutProfessionalTraining,
 
				aboutCoCarriculam,
				setAboutCoCarriculam
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
