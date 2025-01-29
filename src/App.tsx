import { useState, useEffect } from 'react';
import LoadingSkeleton from './components/LoadingSkeleton';
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },);

	return (
		<div className="h-full flex flex-col justify-between p-8 min-h-screen bg-light-background dark:bg-dark-background">
			{isLoading? (
        <LoadingSkeleton />
      ): (
        <MusicPlayer />
      )}
      <Footer />
		</div>
	);
};

export default App;