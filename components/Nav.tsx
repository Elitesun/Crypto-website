"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 backdrop-blur-md px-4 md:px-6 z-50">
                <div className="max-w-7xl mx-auto py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold flex items-center space-x-2">CRYPTO.</h1>

                        <div className={`md:flex items-center space-x-8 ${isMenuOpen ? 'flex flex-col items-center justify-center absolute top-16 left-0 right-0 bg-black/90 p-4 space-y-4 md:space-y-0 md:relative md:top-0 md:bg-transparent md:p-0 md:flex-row' : 'hidden'}`}>
                            <button 
                                onClick={() => scrollToSection('hero')} 
                                className="text-lg hover:text-gray-300 transition-colors"
                            >
                                Home
                            </button>
                            <button 
                                onClick={() => scrollToSection('features')} 
                                className="text-lg hover:text-gray-300 transition-colors"
                            >
                                Services
                            </button>
                            <button 
                                onClick={() => scrollToSection('stats')} 
                                className="text-lg hover:text-gray-300 transition-colors"
                            >
                                About
                            </button>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="hidden md:block px-6 py-2 rounded-full bg-[#CCFF00] text-black hover:bg-[#b8e600] transition-colors font-medium">
                                Explore now
                            </button>
                            <button 
                                className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
);
}

export default Nav;