'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Valerie Z
                </Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/#about" className="hover:text-gray-600 transition-colors">
                        About
                    </Link>
                    <Link href="/#projects" className="hover:text-gray-600 transition-colors">
                        Projects
                    </Link>
                    <Link href="/#experience" className="hover:text-gray-600 transition-colors">
                        Experience
                    </Link>
                    <Link href="/#contact" className="hover:text-gray-600 transition-colors">
                        Contact
                    </Link>
                </nav>
            </div>

            {/* Mobile navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white py-4 px-6 flex flex-col space-y-4">
                    <Link href="/#about" className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/#projects" className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/#experience" className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Experience
                    </Link>
                    <Link href="/#contact" className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Navbar; 