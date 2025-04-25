const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
                    <div className="text-lg text-gray-700 space-y-6">
                        <p>
                            I'm Valerie, a passionate UX designer and frontend developer with over 5 years of experience creating
                            beautiful digital experiences. My journey in tech began when I discovered my love for solving problems
                            through intuitive design and efficient code.
                        </p>
                        <p>
                            With a background in both design and development, I bring a unique perspective to projects,
                            bridging the gap between aesthetics and functionality. I believe in user-centered design principles
                            and creating accessible, responsive interfaces that delight users.
                        </p>
                        <p>
                            When I'm not designing or coding, you can find me exploring new hiking trails, experimenting with
                            photography, or attempting to perfect my homemade pasta recipe.
                        </p>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6">My Skills</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <SkillTag label="UI/UX Design" />
                            <SkillTag label="React.js" />
                            <SkillTag label="Figma" />
                            <SkillTag label="TypeScript" />
                            <SkillTag label="Responsive Design" />
                            <SkillTag label="User Research" />
                            <SkillTag label="Prototyping" />
                            <SkillTag label="Next.js" />
                            <SkillTag label="Tailwind CSS" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillTag = ({ label }: { label: string }) => {
    return (
        <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-center">
            {label}
        </div>
    );
};

export default AboutSection; 