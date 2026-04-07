import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ContactUs = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear status when user starts typing again
        if (submitStatus) setSubmitStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const url = "https://script.google.com/macros/s/AKfycbzoKgq7FkrJY8igkN5xguk_Yq42vBFWnler2FZ1f1-ys5SLcGwL8Ae3SPpE84EDJ5lb/exec";

        // Use GET request with URL parameters instead of POST
        // This is more reliable with Google Apps Script
        const params = new URLSearchParams({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        });

        try {
            // Try GET request first (more reliable for testing)
            const response = await fetch(`${url}?${params.toString()}`, {
                method: "GET",
            });

            console.log('Response status:', response.status);
            
            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative w-full overflow-x-hidden text-white bg-[#050505] border-none">
            <Header />

            <main className="relative z-10 w-full min-h-[100vh] bg-[#050505] shadow-[0_60px_60px_rgba(0,0,0,0.8)] pb-8">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4b1111]/30 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="pt-28 pb-12 px-6 md:px-12 max-w-[1200px] mx-auto w-full relative z-10">

                    <div className="flex flex-col items-center justify-center mb-8 relative w-full text-center">
                        <button
                            onClick={() => navigate('/')}
                            className="absolute left-0 top-0 md:top-1/2 md:-translate-y-1/2 flex items-center gap-2 group text-[#D4AF37] hover:text-white transition-all duration-300"
                            aria-label="Go back to Home"
                        >
                            <div className="p-3 rounded-full border border-[#D4AF37]/30 group-hover:border-[#D4AF37] bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                <ArrowLeft size={24} />
                            </div>
                        </button>
                        <div className="mt-14 md:mt-0">
                            <h1 className="text-4xl md:text-[3.5rem] font-boldonse font-bold tracking-tighter uppercase text-white mb-2 leading-none">
                                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] pr-3">Us</span>
                            </h1>
                            <p className="text-gray-400 font-light tracking-widest uppercase text-xs md:text-sm">
                                Have questions? We're here to help.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto w-full">
                        <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />

                            <h2 className="text-3xl font-boldonse font-bold uppercase tracking-widest text-white mb-8 border-b border-white/5 pb-6 text-center">
                                Send a <span className="text-[#D4AF37]">Message</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 text-left">

                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 animate-fade-in">
                                        <CheckCircle size={20} className="flex-shrink-0" />
                                        <p className="text-sm font-medium">Your message has been sent successfully! We'll get back to you soon.</p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 animate-fade-in">
                                        <AlertCircle size={20} className="flex-shrink-0" />
                                        <p className="text-sm font-medium">Something went wrong. Please try again or contact us directly.</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Name"
                                            className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all text-sm"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 "
                                            className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="email@email.com"
                                        className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all w-full text-sm"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        placeholder="How can we help you?"
                                        className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all w-full resize-none text-sm"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`mt-2 mb-2 flex items-center justify-center gap-3 w-full sm:w-auto mx-auto px-16 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed scale-95' : 'hover:bg-white hover:scale-[1.02] active:scale-95 shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)]'}`}
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    {!isSubmitting && <Send size={16} />}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactUs;
