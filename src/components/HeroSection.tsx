import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center pt-20 pb-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-indigo-600">Valerie Z</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                        UX Designer & Frontend Developer
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg">
                        I create beautiful, intuitive interfaces and bring them to life with clean, efficient code.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/#projects"
                            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="/#contact"
                            className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-200">
                        <Image
                            src="/profile.jpg"
                            alt="Valerie Z"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 