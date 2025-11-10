import {useNavigate} from "react-router-dom";
import {assets} from "../assets/assets.js";

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto py-20 lg:py-20">
            {/* Text Section */}
            <div className="flex flex-col items-center justify-center text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                    Transform Your Photos into <br /> 
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Ghibli Art
                    </span> {" "} with  {" "}
                    <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        Ghibli AI
                    </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mb-8">
                    Turn your photos or ideas into stunning Ghibli-style art with AI.
                    Upload an image or type a prompt — choose from magical Ghibli-inspired styles and watch your imagination come to life.
                </p>
                <button onClick={() => navigate('/create')} className="bg-orange-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-800 transition-transform transform hover:scale-105">
                    Try image to Ghibli art now
                </button>
            </div>

            {/* Showcase Image Section */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Before Image */}
                        <div className="relative group">
                            <div className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold z-10">
                                Original Photo
                            </div>
                            <img 
                                src={assets.step1} 
                                alt="Original Photo" 
                                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        
                        {/* After Image */}
                        <div className="relative group">
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold z-10">
                                Ghibli Style ✨
                            </div>
                            <img 
                                src={assets.grid_1} 
                                alt="Ghibli Style Transformation" 
                                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;