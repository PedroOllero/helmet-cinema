import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[91dvh]">
      <ImageCarousel />
      <Link to="/now-showing" className="flex-grow flex items-center justify-center text-4xl font-bold text-center bg-red-600 hover-standard">
        <h1>
          What's on now?
        </h1>
      </Link>

      <Link to="/coming-soon" className="text-2xl font-bold text-center py-3 bg-red-400 hover-standard">
        <h2 >
          Cooming soon
        </h2>
      </Link>
    </div>
  );
};

export default Home;
