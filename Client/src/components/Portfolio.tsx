import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "@/redux/slices/projectsSlice";
import { RootState, AppDispatch } from "@/redux/store/store";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImage from "../assets/green-cart.png"
import fullStackBlogImage from "../assets/blog-app-fullstack.png"
import socialApp from "../assets/ping-up.png"
import quickAIImage from "../assets/quick-ai.png"
import fullStackPortfoloImage from "../assets/fullstack-portfolio.png"
import mgmtImage from "../assets/project-mgmt.png"

// Static fallback data
const staticProjects = [
  {
    _id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce site with product listings, shopping cart, secure checkout, and an intuitive user interface.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image:ecommerceImage,
    liveUrl: "https://green-cart-frontend-psi.vercel.app",
    githubUrl: "https://github.com/Nitish250619/greenCart_frontend",
    category: "Web App",
  },
  {
    _id: "2",
    title: "Fullstack Blog Application",
    description:
      "A modern blog platform where users can write, edit, and publish articles with authentication and comment features.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image:fullStackBlogImage,
    liveUrl: "https://fullstack-blog-application-8mkg.vercel.app",
    githubUrl: "https://github.com/Nitish250619/fullstack-blog-application",
    category: "Web App",
  },
  {
    _id: "3",
    title: "Social Connect App",
    description:
      "A full-stack social media application where users can connect, share stories, send messages, like posts, and comment in real time.",
    tags: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Vite",
      "Inngest",
      "Neon",
      "WebSockets",
    ],
    image:socialApp,
    liveUrl: "https://social-app-pingup-1mmv.vercel.app",
    githubUrl: "https://github.com/Nitish250619/social-app-pingup",
    category: "Website",
  },
  {
    _id: "4",
    title: "Quick AI – Content Creation Suite",
    description:
      "An AI-powered platform for generating text content, images, removing image backgrounds, and reviewing resumes using multiple APIs.",
    tags: [
      "React",
      "Redux",
      "Neon",
      "Styled Components",
      "Inngest",
      "Gemini API",
      "ClipDrop",
      "Cloudinary",
    ],
    image:quickAIImage,
    liveUrl: "https://quick-ai-project-gpv1.vercel.app",
    githubUrl: "https://github.com/Nitish250619/QUICK-AI-Project",
    category: "Web App",
  },
  {
    _id: "5",
    title: "Full Stack Portfolio",
    description:
      "A dynamic portfolio application allowing project addition, deletion, and real-time updates with a sleek modern UI.",
    tags: [
      "React",
      "Redux",
      "Styled Components",
      "Express",
      "MongoDB",
      "Node.js",
    ],
    image:fullStackPortfoloImage,
    liveUrl: "https://fullstack-portfolio-dna2.vercel.app",
    githubUrl: "https://github.com/Nitish250619/fullstack-portfolio",
    category: "Web App",
  },
  {
    _id: "6",
    title: "Project Management Dashboard",
    description:
      "A workspace management tool where users can add projects, create tasks, monitor analytics, manage calendars, and customize settings.",
    tags: [
      "React",
      "Redux",
      "Styled Components",
      "Neon",
      "Inngest",
      "Gemini API",
      "ClipDrop",
      "Cloudinary",
    ],
    image:mgmtImage,
    liveUrl: "https://project-mgmt-project-xqjs.vercel.app",
    githubUrl: "https://github.com/Nitish250619/Project-mgmt-project",
    category: "Web App",
  },
];


export const Portfolio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, status } = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const projectsToDisplay = status === 'failed' || projects.length === 0 ? staticProjects : projects;

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my expertise in full stack development and technical solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {status === 'loading' ? (
            <p className="text-center col-span-2">Loading projects...</p>
          ) : projectsToDisplay.map((project: any) => (
            <div key={project._id} className="group bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="bg-white text-black hover:bg-gray-100">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags && Array.isArray(project.tags) && project.tags.map((tech: string, techIndex: number) => (
                    <span key={techIndex} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
