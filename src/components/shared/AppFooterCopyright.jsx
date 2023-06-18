function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				<a
					href="https://github.com/realstoman/react-tailwindcss-portfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Copyright 
				</a>

				&copy; {new Date().getFullYear()}

				<a
					href="https://github.com/rcmehedi15"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Md Mehedi Hasan
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
