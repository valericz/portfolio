import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="min-h-screen border border-black/10">
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Left column */}
                <div className="w-full md:w-1/3 border-r border-black/10 p-8 left-column">
                    <Link href="/" className="block mb-6">&lt; Back</Link>

                    <h1 className="text-2xl font-normal mb-1">Contact</h1>
                    <div className="border-top mb-8"></div>
                    <p className="location-info">Feel free to reach out.</p>
                </div>

                {/* Right column */}
                <div className="w-full md:w-2/3 p-8 flex items-center">
                    <div className="max-w-2xl w-full mx-auto">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-lg font-medium mb-2">Email</h2>
                                <a
                                    href="mailto:valerieznb@gmail.com"
                                    className="text-lg hover:opacity-70"
                                >
                                    valerieznb@gmail.com
                                </a>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium mb-2">Phone</h2>
                                <a
                                    href="tel:+61478182016"
                                    className="text-lg hover:opacity-70"
                                >
                                    0478 182 016
                                </a>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium mb-2">Social</h2>
                                <div className="flex flex-col space-y-1">
                                    <a
                                        href="https://github.com/valericz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-70"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/valerie-zhang-261935322/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-70"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://www.instagram.com/airvendor/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-70"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium mb-2">Location</h2>
                                <p className="location-info">Sydney, Australia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 