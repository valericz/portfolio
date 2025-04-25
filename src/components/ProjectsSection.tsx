import Image from 'next/image';
import Link from 'next/link';

type Project = {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    tags: string[];
    demoUrl?: string;
    codeUrl?: string;
};

const projects: Project[] = [
    {
        id: 'project1',
        title: 'E-commerce Dashboard',
        description: 'A modern dashboard for e-commerce analytics with real-time data visualization and user behavior tracking.',
        imageSrc: '/projects/project1.jpg',
        tags: ['React', 'TypeScript', 'D3.js', 'Firebase'],
        demoUrl: 'https://example.com/demo1',
        codeUrl: 'https://github.com/valeriez/project1',
    },
    {
        id: 'project2',
        title: 'Health & Fitness App',
        description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
        imageSrc: '/projects/project2.jpg',
        tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
        demoUrl: 'https://example.com/demo2',
        codeUrl: 'https://github.com/valeriez/project2',
    },
    {
        id: 'project3',
        title: 'Smart Home Control System',
        description: 'IoT interface for managing connected home devices with voice commands and automated scheduling.',
        imageSrc: '/projects/project3.jpg',
        tags: ['Next.js', 'WebSockets', 'TailwindCSS', 'IoT'],
        demoUrl: 'https://example.com/demo3',
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Projects</h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                    A selection of my recent work spanning UX design and frontend development.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
            <div className="relative h-48 w-full">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span key={tag} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    {project.demoUrl && (
                        <Link
                            href={project.demoUrl}
                            target="_blank"
                            className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Live Demo
                        </Link>
                    )}
                    {project.codeUrl && (
                        <Link
                            href={project.codeUrl}
                            target="_blank"
                            className="text-sm px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            View Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection; 