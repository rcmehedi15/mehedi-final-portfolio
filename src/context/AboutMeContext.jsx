import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';
import { aboutMeSkills } from '../data/aboutMeSkills';
import { aboutMeExperience } from '../data/aboutMeExperience';
import { aboutMeEducation } from '../data/aboutMeEducation';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	const [aboutSkills, setAboutSkills] = useState(aboutMeSkills)
	const [aboutExperience, setAboutExperience] = useState(aboutMeExperience)
	const [aboutEducation, setAboutEducation] = useState(aboutMeEducation)


	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

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
				setAboutEducation
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
