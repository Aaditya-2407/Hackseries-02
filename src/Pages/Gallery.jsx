import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Importing generated images
import img1 from '../assets/gallery/1.jpeg';
import img2 from '../assets/gallery/2.jpeg';
import img3 from '../assets/gallery/3.jpeg';
import img4 from '../assets/gallery/4.jpeg';
import img5 from '../assets/gallery/5.jpeg';
import img6 from '../assets/gallery/6.jpeg';
import img7 from '../assets/gallery/7.jpeg';
import img8 from '../assets/gallery/8.jpeg';
import img9 from '../assets/gallery/9.jpeg';
import img10 from '../assets/gallery/10.jpeg';
import img11 from '../assets/gallery/11.jpeg';
import img12 from '../assets/gallery/12.jpeg';
import img13 from '../assets/gallery/13.jpeg';
import img14 from '../assets/gallery/14.jpeg';
import img15 from '../assets/gallery/15.jpeg';
import img16 from '../assets/gallery/16.jpeg';
import img17 from '../assets/gallery/17.jpeg';
import img18 from '../assets/gallery/18.jpeg';
import img19 from '../assets/gallery/19.jpeg';

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  
  const albums = [
    {
      id: 'hs01',
      title: 'Hackseries 01',
      images: [img1, img2, img3, img4, img5, img12, img13, img14]
    },
    {
      id: 'hs01-hackathon',
      title: 'Hackseries 01 Hackathon',
      images: [img6, img7, img8, img9, img10, img11]
    },
    {
      id: 'git-session',
      title: 'Git & GitHub Session',
      images: [img12, img13]
    },
    {
      id: 'hs00-roadmap',
      title: 'Hackseries 00 Roadmap Session',
      images: [img14, img15, img16, img17, img18, img19]
    }
  ];

  const handleBack = () => {
    if (selectedAlbum) {
      setSelectedAlbum(null);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="relative w-full bg-black overflow-x-hidden text-white">
      <Header />

      <main className="relative z-10 w-full bg-black min-h-screen mb-[60vh] md:mb-[65vh] shadow-[0_50px_50px_rgba(0,0,0,0.5)]">
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        {/* Header Section */}
        <div className="flex items-center mb-12 gap-6 relative">
            <button 
                onClick={handleBack} 
                className="flex items-center gap-2 group text-[#D4AF37] hover:text-white transition-all duration-300"
                aria-label={selectedAlbum ? "Go back to albums" : "Go back to Home"}
            >
                <div className="p-3 rounded-full border border-[#D4AF37]/30 group-hover:border-[#D4AF37] bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all">
                    <ArrowLeft size={24} />
                </div>
            </button>
            <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 uppercase">
                    {selectedAlbum ? selectedAlbum.title : <><span className="text-white">EVENT</span> <span className="text-[#D4AF37]">GALLERY</span></>}
                </h1>
                <p className="text-gray-400 font-light tracking-wide">
                    {selectedAlbum ? "Explore moments from this event." : "Relive the moments from HackSeries. Select an album to view."}
                </p>
            </div>
        </div>

        {/* Gallery Grid */}
        {!selectedAlbum ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {albums.map((album) => (
                    <div 
                        key={album.id}
                        onClick={() => setSelectedAlbum(album)}
                        className="relative group cursor-pointer overflow-hidden rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/80 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] bg-[#0a0a0a]"
                    >
                        <div className="aspect-[4/3] w-full overflow-hidden relative">
                            <img 
                                src={album.images[0]} 
                                alt={album.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
                            
                            <div className="absolute bottom-0 w-full p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-[#D4AF37] mb-1">{album.title}</h3>
                                <p className="text-sm text-gray-300">{album.images.length} Photos</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedAlbum.images.map((src, index) => (
                    <div 
                        key={index}
                        className="relative group overflow-hidden rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                    >
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <img 
                                src={src} 
                                alt={`${selectedAlbum.title} image ${index + 1}`} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>
        )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
