import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchTimeline } from "@/redux/slices/timelineSlice";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Code, Database, Globe, Users } from "lucide-react";

export const About = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items: timeline, status } = useSelector(
    (state: RootState) => state.timeline
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTimeline());
    }
  }, [status, dispatch]);

  const staticTimelineData = [
    {
      _id: "685e5175c366e3179143c074",
      title: "Software Engineer",
      company: "Tech Mahindra (Pune , India)",
      year: "Dec 2021 – Present",
      description:
        "Developing a unified Service Desk and Fault Monitoring platform enabling automated incident ticketing, alarm filtering, and real-time updates. Implemented end-to-end features for streamlined telecom operations and reduced manual overhead.",
      type: "work",
      achievements: [
        "Engineered an automated ticketing workflow converting real-time telecom alarms into incidents, reducing manual processing time by over 40%",
        "Implemented domain-based alarm filtering and configurable refresh intervals, enhancing monitoring accuracy and responsiveness",
        "Optimized backend APIs and frontend dashboards for real-time fault visibility and secure incident resolution across teams",
        "Collaborated with cross-functional teams to deploy a unified Service Desk & Fault Monitor platform, improving operational efficiency and system reliability",
      ],
    },
    {
      _id: "685e4f85c366e3179143c055",
      title: "Freelance Full-Stack Web Developer",
      company: "crackoffcampus.com (Startup)",
      year: "April-May 2024",
      description:
        "Designed and developed a complete job-portal website for a startup, handling both front-end and back-end. Ensured on-time delivery and a clean, user-friendly interface.",
      type: "work",
      achievements: [
        "Delivered the project on the agreed deadline with excellent client feedback",
        "1000 + active users within months of launch",
        "Integrated Cashfree as the payment gateway for premium services",
        "Built an admin dashboard for posting jobs; applicants can apply directly",
      ],
    },
    {
      _id: "685e4e16c366e3179143c048",
      title: "Full Stack Development Trainee",
      company: "Crio.Do",
      year: "March 2023 – Nov 2024",
      description:
        "Completed an intensive Full Stack Development program at Crio.Do, gaining hands-on experience in building scalable web applications using modern technologies such as React, Node.js, Express, and MongoDB. Focused on writing clean, testable code and mastering both frontend and backend development workflows.",
      type: "education",
      achievements: [
        "Built multiple full stack projects applying real-world development principles",
        "Gained proficiency in React, Node.js, Express, and MongoDB for end-to-end web solutions",
        "Learned and implemented unit and integration testing to ensure code reliability",
        "Strengthened problem-solving and debugging skills through structured learning and mentorship",
      ],
    },
    {
      _id: "685e4c30c366e3179143c03b",
      title: "B.E. in Electronics and Communication Engineering",
      company:
        "Sant Longowal Institute of Engineering and Technology, Punjab",
      year: "2018–2021",
      description:
        "CGPA: 9.0\nCore Subjects: Data Structures, Operating Systems",
      type: "education",
      achievements: [
        "🥇 Secured top position in departmental academic performance with a 9.0 CGPA",
        "🤝 Actively participated in technical and cultural events, showcasing teamwork and leadership",
        "✅ Solved 90+ DSA problems to enhance algorithmic thinking and coding proficiency",
      ],
    },
  ];

  const timelineItems =
    status === "succeeded" && Array.isArray(timeline) && timeline.length > 0
      ? [...timeline].reverse()
      : staticTimelineData;

  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Typescript",
      ],
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication","git","postman"],
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL", "Mongoose ODM"],
      icon: Database,
      color: "from-purple-500 to-violet-500",
    },
    
  ];

  const stats = [
    { number: "5+", label: "Projects Completed", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Users },
    { number: "3.10+", label: "Years Experience", icon: Calendar },
    { number: "24/7", label: "Support Available", icon: Globe },
  ];

  const JourneyCard = () => (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
      <CardContent className="p-8">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">My Journey</h3>
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed text-lg">
            As a dedicated{" "}
            <span className="font-semibold text-blue-600">
              full stack developer
            </span>
            , I specialize in creating robust MERN applications driven by clean
            code, great UX, and solving complex problems.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            I’ve delivered for{" "}
            <span className="font-semibold text-purple-600">
              startups and established businesses
            </span>
            , plus strong docs with LaTeX and hands-on debugging & maintenance.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
            <h4 className="font-semibold text-gray-900 mb-3">What drives me:</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                Creating impactful digital solutions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                Continuous learning and innovation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                Building long-term client relationships
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const SkillCard = ({
    category,
    items,
    icon: Icon,
    color,
  }: {
    category: string;
    items: string[];
    icon: any;
    color: string;
  }) => (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div
            className={`w-10 h-10 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h4 className="font-bold text-lg text-gray-900">{category}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((skill, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const TimelineCard = ({ item }: { item: (typeof staticTimelineData)[number] }) => (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 break-inside-avoid">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {item.year}
          </span>
          <Badge
            variant={item.type === "work" ? "default" : "secondary"}
            className="capitalize"
          >
            {item.type}
          </Badge>
        </div>
        <h4 className="font-bold text-xl mb-1 text-gray-900">{item.title}</h4>
        <div className="text-base font-medium text-gray-700 mb-2">
          {item.company}
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
        {!!item.achievements?.length && (
          <div className="space-y-2">
            <h5 className="font-semibold text-gray-800">Key Achievements:</h5>
            <ul className="space-y-1">
              {item.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            ABOUT ME
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Passionate Developer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions with clean code
            and innovative design.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Two-column layout: LEFT (Bio+Skills) | RIGHT (Timeline only) */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* LEFT COLUMN: strictly Bio + Skills */}
          <div className="space-y-8">
            <JourneyCard />
            {skills.map((s, i) => (
              <SkillCard
                key={i}
                category={s.category}
                items={s.items}
                icon={s.icon}
                color={s.color}
              />
            ))}
          </div>

          {/* RIGHT COLUMN: full width across 2 columns for timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Experience & Education
            </h3>

            {/* Masonry INSIDE the right column only */}
            <div className="columns-1 md:columns-2 gap-6">
              {timelineItems.map((item) => (
                <div key={item._id} className="mb-6 break-inside-avoid">
                  <TimelineCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
