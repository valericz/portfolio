import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen border border-black/10">
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Left column */}
                <div className="w-full md:w-1/3 border-r border-black/10 p-8 left-column">
                    <Link href="/" className="block mb-6">&lt; Back</Link>

                    <h1 className="text-2xl font-normal mb-1">About</h1>
                    <div className="border-top mb-8"></div>
                </div>

                {/* Right column */}
                <div className="w-full md:w-2/3 p-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="mb-8">
                            <h2 className="text-lg font-medium mb-4">Education</h2>
                            <div className="mb-3">
                                <div className="flex justify-between mb-1">
                                    <div className="font-medium">University of Technology Sydney (UTS)</div>
                                    <div className="text-sm">Feb 2024 – Dec 2025 (Expected)</div>
                                </div>
                                <div>Master of Information Technology (Software Development)</div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <div className="font-medium">Beijing Electronic Science and Technology Institute</div>
                                    <div className="text-sm">Sep 2016 – Jun 2020</div>
                                </div>
                                <div>Bachelor of Computer Science</div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium mb-4">Technical Skills</h2>
                            <div className="space-y-3">
                                <div>
                                    <div className="font-medium mb-1">Programming Languages</div>
                                    <div className="text-sm">JavaScript, Python, C#, Swift, HTML/CSS, SQL</div>
                                </div>

                                <div>
                                    <div className="font-medium mb-1">Frameworks & Libraries</div>
                                    <div className="text-sm">React.js, Node.js, Express.js, Spring Boot, Pandas, NumPy, scikit-learn, XGBoost, SwiftUI, React-Bootstrap</div>
                                </div>

                                <div>
                                    <div className="font-medium mb-1">Databases & Tools</div>
                                    <div className="text-sm">MongoDB, Redis, MySQL, Git, Docker, Postman, Jira</div>
                                </div>

                                <div>
                                    <div className="font-medium mb-1">Cloud Platforms</div>
                                    <div className="text-sm">AWS, GCP, Microsoft Azure, Netlify, Vercel</div>
                                </div>

                                <div>
                                    <div className="font-medium mb-1">Other</div>
                                    <div className="text-sm">RESTful API Design, CI/CD, Agile Methodologies, Data Analysis, Technical Documentation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 