import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Importing generated images
import img1 from '../assets/gallery/futuristic_hackathon_1775424262777.png';
import img2 from '../assets/gallery/winning_team_1775424279771.png';
import img3 from '../assets/gallery/data_streams_1775424294839.png';

const Gallery = () => {
  const navigate = useNavigate();
  
  const images = [img1, img2, img3];

  return (
    <div className="relative w-full bg-black overflow-x-hidden text-white">
      <Header />

      <main className="relative z-10 w-full bg-black min-h-screen mb-[60vh] md:mb-[65vh] shadow-[0_50px_50px_rgba(0,0,0,0.5)]">
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        {/* Header Section */}
        <div className="flex items-center mb-12 gap-6 relative">
            <button 
                onClick={() => navigate('/')} 
                className="flex items-center gap-2 group text-[#D4AF37] hover:text-white transition-all duration-300"
                aria-label="Go back to Home"
            >
                <div className="p-3 rounded-full border border-[#D4AF37]/30 group-hover:border-[#D4AF37] bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all">
                    <ArrowLeft size={24} />
                </div>
            </button>
            <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                    EVENT <span className="text-[#D4AF37]">GALLERY</span>
                </h1>
                <p className="text-gray-400 font-light tracking-wide">
                    Relive the moments from HackSeries.
                </p>
            </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
                <div 
                    key={index}
                    className="relative group overflow-hidden rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                        <img 
                            src={src} 
                            alt={`Gallery image ${index + 1}`} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
            ))}
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
