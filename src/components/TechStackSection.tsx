'use client';

import { 
  SiPython, SiFastapi, SiDocker, SiLinux, 
  SiSpringboot, SiMysql, SiPandas, SiFigma, SiGit, SiCplusplus, SiJavascript
} from 'react-icons/si';
import { FaJava, FaAws, FaRobot, FaCode, FaChartBar, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';

const techGroups = [
  {
    category: "Languages & Algorithmic Foundations",
    skills: [
      { name: "Python", icon: SiPython, color: "text-amber-400", level: "Advanced", desc: "Data Analysis (Pandas), Backend Development, Automation & Scripting" },
      { name: "Java", icon: FaJava, color: "text-rose-500", level: "Advanced", desc: "Object-Oriented Programming (OOP), Enterprise Architecture, Spring Boot & Android" },
      { name: "SQL (MySQL)", icon: SiMysql, color: "text-sky-400", level: "Advanced", desc: "Relational 3NF Database Design, Normalization, Query Optimization & Indexing" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-400", level: "Foundations", desc: "Algoritmia, Data Structures, Memory Management & Performance" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", level: "Proficient", desc: "Web Interactivity, DOM Manipulation & Fullstack Integration" }
    ]
  },
  {
    category: "Backend, Systems & Cloud Computing",
    skills: [
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-400", level: "Advanced", desc: "Asynchronous REST APIs, Pydantic Schemas & OpenAPI Documentation" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-emerald-400", level: "Proficient", desc: "Layered MVC Architecture (Controller, Service, Repository, DTO)" },
      { name: "AWS Cloud Fundamentals", icon: FaAws, color: "text-amber-400", level: "Workshop & Practice Exam", desc: "Core Services (EC2, S3, IAM), Cloud Architecture & Security" },
      { name: "OpenAI API Integration", icon: FaRobot, color: "text-emerald-400", level: "Advanced", desc: "Deterministic JSON Schema Enforcement & LLMOps Pipelines" },
      { name: "Linux VPS & Deployment", icon: SiLinux, color: "text-amber-300", level: "Proficient", desc: "System Daemons, Environment Configuration & Server Operations" },
      { name: "Docker Containerization", icon: SiDocker, color: "text-sky-400", level: "Proficient", desc: "Isolated Microservice Environments & Dependency Management" },
      { name: "Distributed Systems & Security", icon: FaNetworkWired, color: "text-indigo-400", level: "Academic Core", desc: "Concepts of Distributed Computing, API Boundaries & Cybersecurity" }
    ]
  },
  {
    category: "Data Analysis, UI/UX & Tooling",
    skills: [
      { name: "Pandas & Data Processing", icon: SiPandas, color: "text-sky-300", level: "Core", desc: "Tabular Wrangling, Vector Operations & Exploratory Data Analysis" },
      { name: "Power BI & Excel", icon: FaChartBar, color: "text-yellow-400", level: "Active Development", desc: "Metric Modeling, Business Intelligence Dashboards & Analytics" },
      { name: "Figma (UI/UX Design)", icon: SiFigma, color: "text-purple-400", level: "Advanced", desc: "Web & Mobile Interface Systems, Interaction Mockups & Design Tokens" },
      { name: "Git & Version Control", icon: SiGit, color: "text-rose-400", level: "Advanced", desc: "Branching Strategies, GitHub Collaboration & Repository Maintenance" }
    ]
  }
];

export default function TechStackSection() {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          [ ⚡ SECTION 03 // TECHNICAL TOOLKIT ]
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Tools, Frameworks & Core Stack
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-2">
          Comprehensive matrix covering software engineering, data systems, cloud, and interface architecture.
        </p>
      </div>

      <div className="space-y-8">
        {techGroups.map((group, gIdx) => (
          <div key={gIdx} className="bg-slate-900/30 rounded-2xl p-6 border border-slate-800/80">
            <h4 className="font-mono text-xs font-bold text-teal-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>❯</span>
              <span>{group.category}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.skills.map((skill, sIdx) => {
                const IconComp = skill.icon;
                return (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group flex items-start gap-3.5 cursor-pointer"
                  >
                    <div className={`p-2.5 rounded-lg bg-slate-900 text-2xl ${skill.color} group-hover:scale-110 transition-transform shrink-0`}>
                      <IconComp />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm group-hover:text-teal-300 transition-colors">
                        {skill.name}
                      </h5>
                      <span className="text-[10px] font-mono text-teal-400/90 bg-teal-500/10 px-1.5 py-0.5 rounded inline-block my-1">
                        {skill.level}
                      </span>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}