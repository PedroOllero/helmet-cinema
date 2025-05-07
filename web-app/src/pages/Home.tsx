import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[91dvh] lg:h-full">
      <ImageCarousel />
      <Link to="/now-showing" className="flex-grow lg:flex-none flex items-center justify-center text-2xl font-bold text-center bg-red-600 hover-standard lg:h-25">
        <h1>
          What's on now?
        </h1>
      </Link>

      <Link to="/coming-soon" className="text-2xl font-bold text-center flex justify-center items-center bg-red-400 hover-standard h-30 lg:h-12">
        <h2 >
          Cooming soon
        </h2>
      </Link>
    </div>
  );
};

export default Home;
