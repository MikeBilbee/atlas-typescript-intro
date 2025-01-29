//LoadingSkeleton.jsx
const LoadingSkeleton = () => {
	return (
		<div className='flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 w-full max-w-5xl mx-auto p-6 dark:bg-black text-darkMagenta dark:text-white rounded-lg shadow-2xl transition-all duration-300 animate-pulse'>

		<section className='md:w-1/2 border-4 rounded-xl shadow-lg p-6  animate-pulse'>
			<div className='p-6 rounded-lg shadow-lg border-4 transition-colors duration-300'>

			<div className='relative mb-6 aspect-square bg-gray-300 dark:bg-gray-700 rounded-md' />


			<div className='mb-4'>
				<div className='h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2' />
				<div className='h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4' />
			</div>

			<div className='flex items-center justify-between space-x-4 mt-4'>
				<div className='h-8 w-16 bg-gray-300 dark:bg-gray-700 rounded-md' />
				<div className='h-6 w-6 bg-gray-300 dark:bg-gray-700 rounded-full' />
				<div className='h-14 w-14 bg-gray-300 dark:bg-gray-700 rounded-lg border-4 border-gray-400 dark:border-gray-600 flex items-center justify-center'>
				<div className='h-8 w-8 bg-gray-400 dark:bg-gray-600 rounded-full' />
				</div>
				<div className='h-6 w-6 bg-gray-300 dark:bg-gray-700 rounded-full' />
				<div className='h-6 w-6 bg-gray-300 dark:bg-gray-700 rounded-full' />
			</div>

			<div className='flex items-center space-x-4 mt-6'>
				<div className='h-7 w-7 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center'>
					<div className='h-4 w-4 bg-gray-400 dark:bg-gray-600 rounded-full' />
				</div>
				<div className='h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full' />
			</div>
			</div>
		</section>

		<section className='md:w-1/2  shadow-lg p-6  dark:border-white'>
			<div>
			<div className='h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4' />
			<div className='space-y-3'>
				{Array(10)
				.fill(0)
				.map((_, index) => (
					<div
						key={index}
						className='flex justify-between items-center p-1 rounded-md'
					>
					<div className='flex flex-col space-y-1 w-3/4'>
						<div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4' />
						<div className='h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2' />
					</div>
					<div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-8' />
					</div>
				))}
			</div>
			</div>
		</section>
		</div>
	);
};

export default LoadingSkeleton;