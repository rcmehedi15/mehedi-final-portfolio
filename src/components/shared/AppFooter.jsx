import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';



const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-10 sm:pt-30 pb-8 mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
			

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
