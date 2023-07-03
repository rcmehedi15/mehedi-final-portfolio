import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Project from './Project/Project';


const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<Project />

			
		</div>
	);
};

export default Home;
