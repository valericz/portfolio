import Link from 'next/link';

const projects = [
    {
        id: 'project1',
        title: 'Full-Stack Online Grocery Platform',
        description: 'A fully functional online grocery platform with a responsive React.js frontend and Node.js/Express.js backend, supporting dynamic category filtering, real-time inventory sync, and seamless shopping cart flows.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Stripe'],
        link: 'https://github.com/valericz/online-grocery-store-',
        period: 'Jan 2025 – Mar 2025'
    },
    {
        id: 'project2',
        title: 'BubblePop iOS Game',
        description: 'A high-performance iOS game implementing a quadtree spatial partitioning algorithm for optimized collision detection with Core Animation and SpriteKit for advanced visual effects.',
        technologies: ['Swift', 'SwiftUI', 'Core Animation', 'SpriteKit', 'MVVM'],
        link: 'https://github.com/valericz',
        period: 'Apr 2025'
    },
    {
        id: 'project3',
        title: 'Personal Portfolio Website',
        description: 'A responsive portfolio website showcasing professional projects, resume, and GitHub contributions using modern frontend technologies with animated UI components.',
        technologies: ['React', 'React-Bootstrap', 'Netlify', 'CI/CD', 'Animate.css'],
        link: 'https://github.com/valericz',
        period: 'Jul 2024 – Oct 2024'
    },
    {
        id: 'project4',
        title: 'Pacman Game',
        description: 'Game development project featuring classic Pacman mechanics with custom gameplay elements.',
        technologies: ['Unity', 'C#', 'ShaderLab', 'Game Development'],
        link: 'https://github.com/valericz/Pacman',
        period: '2023'
    }
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen border border-black/10">
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Left column */}
                <div className="w-full md:w-1/3 border-r border-black/10 p-8 left-column">
                    <Link href="/" className="block mb-6">&lt; Back</Link>

                    <h1 className="text-2xl font-normal mb-1">Projects</h1>
                    <div className="border-top mb-8"></div>
                </div>

                {/* Right column */}
                <div className="w-full md:w-2/3 p-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-10">
                            {projects.map((project) => (
                                <div key={project.id}>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                        <h2 className="text-xl font-medium">{project.title}</h2>
                                        <div className="text-sm text-gray-600">{project.period}</div>
                                    </div>
                                    <p className="my-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-2 mb-3">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-sm px-2 py-1 bg-black/5 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm underline hover:opacity-70"
                                    >
                                        View project →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 