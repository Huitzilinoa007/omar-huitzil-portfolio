'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '../../../data/projects';
import CustomCursor from '../../../components/CustomCursor';
import CastorwayERD from '../../../components/CastorwayERD';
import { 
  SiPython, SiFastapi, SiSupabase, SiDocker, 
  SiLinux, SiJavascript, SiSpringboot, SiMysql, SiFigma, SiAndroid
} from 'react-icons/si';
import { 
  FaJava, FaEnvelope, FaCode, FaArrowLeft, 
  FaLock, FaRobot, FaCheckCircle, FaProjectDiagram, FaServer, FaDatabase, FaArrowDown, FaFigma, FaImages
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

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = projectsData.find((p) => p.id === resolvedParams.id);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  if (!project) {
    notFound();
  }

  const handleImageError = (url: string) => {
    setImageErrors((prev) => ({ ...prev, [url]: true }));
  };

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-200 font-sans selection:bg-teal-400 selection:text-slate-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
      <CustomCursor />

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5">
          <Link 
            href="/#portfolio-workspace"
            className="text-xs sm:text-sm font-mono text-teal-400 hover:text-teal-300 flex items-center gap-2 transition bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 hover:border-teal-400/50"
          >
            <FaArrowLeft />
            <span>Back to Catalogue</span>
          </Link>
          
          <span className="text-xs font-mono text-slate-500">
            System Spec // <strong className="text-slate-300">{project.id.toUpperCase()}</strong>
          </span>
        </div>

        {/* Project Header */}
        <div className="space-y-3">
          <span className="text-[11px] font-mono font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-md border border-teal-500/20 inline-block">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-sm font-mono text-teal-300">Engineering Role: {project.role}</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <h2 className="font-mono text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
                🎯 Problem Statement & Requirements
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <h2 className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">
                🏗️ Core Architecture & Implementation
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                {project.caseStudy.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold">❯</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECCIÓN DE EVIDENCIA VISUAL: ERD Y GALERÍA DE IMÁGENES */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="font-mono text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                  <FaImages />
                  <span>Visual Evidence & Architectural Artifacts</span>
                </h2>
                <span className="text-[10px] font-mono text-slate-500">Verified System Models</span>
              </div>

              {/* RENDERIZADO INTERACTIVO DEL ESQUEMA SQL EN CASTORWAY */}
              {project.id === "castorway" && (
                <div className="space-y-3 mb-6">
                  <CastorwayERD />
                </div>
              )}

              {/* GALERÍA DE IMÁGENES PRESENTE EN TODOS LOS PROYECTOS */}
              <div className="space-y-5">
                {project.caseStudy.gallery.map((media, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-4 space-y-3">
                    <h3 className="text-xs font-bold text-white font-mono">{media.title}</h3>

                    <div className="w-full min-h-[220px] bg-slate-900 rounded-xl flex flex-col items-center justify-center relative overflow-hidden border border-slate-800/80">
                      {!imageErrors[media.url] ? (
                        <img 
                          src={media.url} 
                          alt={media.title}
                          className="w-full h-auto object-cover rounded-xl"
                          onError={() => handleImageError(media.url)}
                        />
                      ) : (
                        <div className="text-center p-6 space-y-2">
                          <FaImages className="text-2xl text-slate-600 mx-auto" />
                          <p className="text-xs font-mono text-slate-300 font-bold">{media.title}</p>
                          <p className="text-[11px] text-slate-400 max-w-sm mx-auto">{media.caption}</p>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">{media.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Decisions */}
            <div>
              <h2 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-wider mb-3">
                💡 Key Engineering Decisions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.caseStudy.techDecisions.map((dec, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="font-bold text-purple-300 block mb-1">{dec.choice}</span>
                    <span className="text-slate-400 text-[11px] leading-snug">{dec.reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Badges */}
            <div>
              <h2 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                &lt;/&gt; Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t) => {
                  const techInfo = techIconMap[t] || { icon: FaCode, color: "text-slate-400" };
                  const IconComp = techInfo.icon;
                  return (
                    <span 
                      key={t} 
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm"
                    >
                      <IconComp className={`text-sm ${techInfo.color}`} />
                      <span>{t}</span>
                    </span>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Pipeline Visual */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider font-bold flex items-center gap-2">
                  <FaProjectDiagram />
                  <span>System Pipeline Flow</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">Node Architecture</span>
              </div>

              <div className="space-y-3">
                {project.caseStudy.pipelineNodes.map((node, idx) => (
                  <div key={idx} className="relative">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 shrink-0 mt-0.5">
                        {node.step}
                      </span>
                      <div>
                        <h3 className="font-bold text-white text-xs">{node.label}</h3>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{node.detail}</p>
                      </div>
                    </div>
                    {idx < project.caseStudy.pipelineNodes.length - 1 && (
                      <div className="flex justify-center my-1 text-slate-600 text-xs">
                        <FaArrowDown className="text-teal-400/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Figma Scope */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-purple-500/30 space-y-2">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block font-bold flex items-center gap-1.5">
                <FaFigma />
                <span>[ UI/UX FIGMA SYSTEM ]</span>
              </span>
              <h3 className="text-sm font-bold text-white">
                {project.caseStudy.figmaAvailable ? "Figma Interface Design System" : "Headless Architecture"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.caseStudy.figmaScope}
              </p>
            </div>

            {/* Key Features */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
              <h3 className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                ✨ Key System Features
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.caseStudy.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
              <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                📊 Delivered Value & Metrics
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.caseStudy.metrics.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-mono gap-4">
          <span className="flex items-center gap-1.5">
            <FaLock className="text-teal-400" /> Proprietary production codebase protected under intellectual property policies.
          </span>
          <Link 
            href="/#portfolio-workspace"
            className="px-5 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold transition"
          >
            Back to All Systems
          </Link>
        </div>

      </div>
    </main>
  );
}