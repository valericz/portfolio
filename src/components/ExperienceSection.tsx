type Experience = {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
};

const experiences: Experience[] = [
    {
        id: 'exp1',
        role: 'Senior UX Designer',
        company: 'TechFlow Solutions',
        period: 'Jan 2022 - Present',
        description: [
            'Lead UX design efforts for enterprise SaaS platform serving 500,000+ users',
            'Conducted user research and usability testing, resulting in 30% improvement in user satisfaction scores',
            'Collaborated with cross-functional teams to implement design system improving product consistency',
            'Mentored junior designers and facilitated design thinking workshops'
        ]
    },
    {
        id: 'exp2',
        role: 'Frontend Developer',
        company: 'InnovateCraft',
        period: 'Mar 2020 - Dec 2021',
        description: [
            'Developed responsive web applications using React, TypeScript and Next.js',
            'Implemented CI/CD pipelines reducing deployment time by 40%',
            'Optimized performance of legacy applications, improving page load times by 60%',
            'Participated in code reviews and contributed to internal developer documentation'
        ]
    },
    {
        id: 'exp3',
        role: 'UI/UX Designer',
        company: 'DigitalForge',
        period: 'Jun 2018 - Feb 2020',
        description: [
            'Created wireframes, prototypes, and high-fidelity mockups for mobile and web applications',
            'Conducted A/B testing for e-commerce site, resulting in 25% increase in conversion rate',
            'Redesigned company website improving lead generation by 35%',
            'Collaborated with marketing team to ensure brand consistency across all platforms'
        ]
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((experience, index) => (
                        <div key={experience.id} className="mb-12 last:mb-0">
                            <ExperienceCard experience={experience} />
                            {index < experiences.length - 1 && (
                                <div className="h-16 w-0.5 bg-gray-300 mx-auto"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold">{experience.role}</h3>
                    <h4 className="text-lg text-indigo-600">{experience.company}</h4>
                </div>
                <div className="mt-2 md:mt-0 text-gray-500 font-medium">{experience.period}</div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceSection; 