'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { projectsData } from '../data/projects';
import { 
  SiPython, SiFastapi, SiSupabase, SiDocker, 
  SiLinux, SiJavascript, SiSpringboot, SiMysql, SiFigma, SiAndroid
} from 'react-icons/si';
import { 
  FaJava, FaEnvelope, FaCode, FaArrowRight, FaArrowLeft,
  FaRobot, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';

const techIconMap: Record<string, { icon: any; color: string }> = {
  "Python": { icon: SiPython, color: "text-amber-400" },
  "FastAPI": { icon: SiFastapi, color: "text-teal-400" },
  "OpenAI API": { icon: FaRobot, color: "text-emerald-400" },
  "Supabase": { icon: SiSupabase, color: "text-emerald-500" },
  "SQL (MySQL)": { icon: SiMysql, color: "text-sky-400" },
  "Docker": { icon: SiDocker, color: "text-sky-400" },
  "Linux VPS": { icon: SiLinux, color: "text-amber-300" },
  "JavaScript": { icon: SiJavascript, color: "text-yellow-400" },
  "Java": { icon: FaJava, color: "text-rose-500" },
  "Spring Boot": { icon: SiSpringboot, color: "text-emerald-400" },
  "Android": { icon: SiAndroid, color: "text-emerald-400" },
  "Figma": { icon: SiFigma, color: "text-purple-400" },
  "NFC Protocols": { icon: FaCode, color: "text-cyan-400" },
  "SQLite": { icon: SiMysql, color: "text-sky-300" },
  "Apache POI": { icon: FaCode, color: "text-rose-400" },
  "RESTful APIs": { icon: FaCode, color: "text-indigo-400" },
  "OOP & Clean Architecture": { icon: FaCode, color: "text-teal-400" },
  "Git": { icon: FaCode, color: "text-rose-400" }
};

export default function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            [ 📂 SECTION 01 // PRODUCTION ARCHITECTURES ]
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
            Featured Systems Catalogue
          </h3>
        </div>

        {/* Controles de Navegación del Carrusel */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-3 rounded-xl border font-mono text-xs transition flex items-center justify-center cursor-pointer ${
              canScrollLeft
                ? 'bg-slate-900 border-slate-700 text-teal-400 hover:bg-slate-800 hover:border-teal-400/50'
                : 'bg-slate-950/50 border-slate-900 text-slate-600 cursor-not-allowed'
            }`}
            title="Previous project"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-3 rounded-xl border font-mono text-xs transition flex items-center justify-center cursor-pointer ${
              canScrollRight
                ? 'bg-slate-900 border-slate-700 text-teal-400 hover:bg-slate-800 hover:border-teal-400/50'
                : 'bg-slate-950/50 border-slate-900 text-slate-600 cursor-not-allowed'
            }`}
            title="Next project"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>

      {/* Track Horizontal tipo Netflix */}
      <div
        ref={sliderRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2 w-full select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projectsData.map((project, idx) => (
          <div
            key={project.id}
            className="w-[310px] sm:w-[360px] lg:w-[380px] shrink-0 snap-start"
          >
            <Link
              href={`/projects/${project.id}`}
              className="group h-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/90 hover:border-teal-400/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(45,212,191,0.25)] block"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    SYSTEM 0{idx + 1} // {project.category.split('/')[0]}
                  </span>
                  <span className="text-[11px] font-mono text-teal-400 opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>Inspect</span>
                    <FaArrowRight className="text-[9px] group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                <div className="w-full rounded-xl bg-slate-950/90 border border-slate-800 group-hover:border-teal-500/30 p-3.5 mb-4 transition-colors space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>Architecture Flow</span>
                    <span className="text-teal-400">{project.flowBadge}</span>
                  </div>
                  <p className="text-xs font-mono text-slate-300 group-hover:text-teal-300 transition leading-relaxed line-clamp-2">
                    {project.flowSummary}
                  </p>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                  {project.title}
                </h4>
                
                <p className="text-[11px] font-mono text-teal-400 mb-3">{project.role}</p>

                <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map((t) => {
                    const techInfo = techIconMap[t] || { icon: FaCode, color: "text-slate-400" };
                    const IconComp = techInfo.icon;
                    return (
                      <span 
                        key={t} 
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        <IconComp className={`text-xs ${techInfo.color}`} />
                        <span>{t}</span>
                      </span>
                    );
                  })}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-500">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="w-full py-2.5 px-4 rounded-xl bg-slate-950/80 group-hover:bg-teal-400 group-hover:text-slate-950 text-teal-300 border border-slate-800 group-hover:border-teal-400 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all">
                  <span>View Full Architecture Page</span>
                  <FaArrowRight className="text-[10px]" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}