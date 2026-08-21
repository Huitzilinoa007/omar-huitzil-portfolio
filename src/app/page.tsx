'use client';

import { useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import TechStackSection from '../components/TechStackSection';
import {
  SiPython, SiFastapi, SiDocker, SiMysql, SiInstagram, SiFigma
} from 'react-icons/si';
import {
  FaJava, FaGraduationCap, FaEnvelope, FaLinkedin, FaGithub,
  FaDownload, FaArrowRight, FaCode, FaLaptopCode, FaAward, FaLayerGroup, FaAws, FaPhoneAlt, FaFilePdf
} from 'react-icons/fa';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'projects' | 'certifications' | 'techstack'>('projects');

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-200 font-sans relative overflow-x-hidden w-full">

      <CustomCursor />

      {/* Luces de Fondo */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-[800px] right-0 w-[80vw] max-w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px]"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-mono text-xs sm:text-sm font-bold text-teal-400 tracking-tight flex items-center gap-1.5 shrink-0">
            <span className="text-slate-500">&lt;</span>
            <span className="text-white">Data Science</span>
            <span className="text-teal-400">/</span>
            <span className="text-purple-400">AI</span>
            <span className="text-slate-500">&gt;</span>
          </a>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition">About & Education</a>
            <a href="#portfolio-workspace" className="hover:text-teal-400 transition">Workspace</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-teal-300 border border-teal-500/30 font-mono text-xs transition"
            >
              <FaFilePdf />
              <span>CV (PDF)</span>
            </a>
            <a
              href="#contact"
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold font-mono text-xs transition shadow-lg shadow-teal-500/20"
            >
              Connect ↗
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      {/* HERO SECTION REDISEÑADO CON FOTO GRANDE Y TERMINAL ABAJO */}
      <header id="home" className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 max-w-6xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Columna Izquierda: Presentación y Acciones (6 Columnas) */}
          <div className="lg:col-span-6 space-y-6 w-full max-w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20 tracking-wide max-w-full">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping shrink-0"></span>
              <span className="truncate">[ DATA SCIENCE STUDENT · BACKEND DEVELOPER ]</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight break-words">
              Hi, I'm <span className="bg-gradient-to-r from-teal-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">Omar Alejandro Huitzil Cruz</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              Data Science student at <strong className="text-white">ESCOM (IPN)</strong> and Programming Technician from <strong className="text-white">CECyT 9 "Juan de Dios Bátiz"</strong>.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              Solid foundation in Python, SQL, Java, backend development, and relational database design. Strengthening skills in AWS Cloud, applied data science, and artificial intelligence.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#portfolio-workspace"
                onClick={() => setActiveTab('projects')}
                className="px-5 sm:px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold font-mono text-xs transition shadow-lg shadow-teal-500/25 flex items-center gap-2"
              >
                <FaLaptopCode />
                <span>Explore Workspace</span>
                <FaArrowRight className="text-[10px]" />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs transition flex items-center gap-2 hover:border-teal-400/50"
              >
                <FaDownload className="text-teal-400" />
                <span>Open Resume (PDF)</span>
              </a>
            </div>

            {/* Foundational Stack */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2.5">Core Applied Technologies</p>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-amber-400/80 hover:bg-amber-500/10 hover:text-amber-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-sm">
                  <SiPython className="text-amber-400 text-sm transition-transform group-hover:scale-110" /> Python
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-rose-400/80 hover:bg-rose-500/10 hover:text-rose-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-sm">
                  <FaJava className="text-rose-500 text-sm transition-transform" /> Java
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-sky-400/80 hover:bg-sky-500/10 hover:text-sky-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-sm">
                  <SiMysql className="text-sky-400 text-sm transition-transform" /> SQL
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-teal-400/80 hover:bg-teal-500/10 hover:text-teal-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-sm">
                  <SiFastapi className="text-teal-400 text-sm transition-transform" /> FastAPI
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-amber-400/80 hover:bg-amber-500/10 hover:text-amber-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-sm">
                  <FaAws className="text-amber-400 text-sm transition-transform" /> AWS Cloud
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-purple-400/80 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-sm">
                  <SiFigma className="text-purple-400 text-sm transition-transform" /> Figma
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Foto de Perfil Destacada (6 Columnas) */}
          <div className="lg:col-span-6 flex justify-center items-center w-full">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl p-1.5 bg-gradient-to-tr from-teal-400 via-sky-500 to-purple-500 shadow-[0_0_50px_rgba(45,212,191,0.35)] group-hover:shadow-[0_0_70px_rgba(45,212,191,0.55)] transition-all duration-500">
                <div className="w-full h-full rounded-[22px] bg-[#0b1120] border-2 border-slate-900 overflow-hidden relative">
                  <img
                    src="/profile.png"
                    alt="Omar Alejandro Huitzil Cruz"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Terminal JSON Centrada y Ampliada Abajo del Hero */}
        <div className="w-full max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-slate-800/90 hover:border-teal-500/40 rounded-2xl p-6 font-mono text-xs text-slate-300 shadow-2xl transition-all">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            </div>
            <span className="text-xs text-slate-500">&lt;/&gt; engineer_profile.json</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-slate-400 text-xs sm:text-sm leading-relaxed p-2">
            <div>
              <p><span className="text-purple-400 font-bold">const</span> <span className="text-teal-300 font-bold">engineer</span> = &#123;</p>
              <p className="pl-4">name: <span className="text-amber-300">"Omar Alejandro Huitzil Cruz"</span>,</p>
              <p className="pl-4">degree: <span className="text-teal-300">"Data Science @ ESCOM - IPN"</span>,</p>
              <p className="pl-4">official_title: <span className="text-teal-300">"Técnico en Programación (CECyT 9)"</span>,</p>
            </div>
            <div>
              <p className="pl-4 sm:pl-0">target: <span className="text-emerald-300 font-bold">"Machine Learning Engineer"</span>,</p>
              <p className="pl-4 sm:pl-0">languages: [<span className="text-sky-300">"English B2"</span>, <span className="text-sky-300">"German A1"</span>],</p>
              <p className="pl-4 sm:pl-0">status: <span className="text-teal-400 font-bold">"Open for Internships & Projects"</span></p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </header>

      {/* EDUCATION */}
      <section id="about" className="py-14 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80 w-full">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            [ ACADEMIC TRAJECTORY ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Education & Official Degrees
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          {/* ESCOM */}
          <div className="group bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-teal-400/60 hover:bg-slate-900/70 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-10px_rgba(45,212,191,0.2)] cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20 group-hover:border-teal-400/40 transition-colors">
                Bachelor's Degree (Undergraduate)
              </span>
              <span className="text-xs font-mono text-slate-400 group-hover:text-teal-300 transition-colors">Studying</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 text-xl shrink-0 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  Licenciatura en Ciencia de Datos
                </h3>
                <h4 className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                  Escuela Superior de Cómputo (ESCOM) — IPN
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Focusing on statistical modeling, machine learning foundations, linear algebra, graph theory, relational and distributed database systems.
                </p>
              </div>
            </div>
          </div>

          {/* CECyT 9 */}
          <div className="group bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-purple-400/60 hover:bg-slate-900/70 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-10px_rgba(168,85,247,0.2)] cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 group-hover:border-purple-400/40 transition-colors">
                Official Degree & Cédula
              </span>
              <span className="text-xs font-mono text-slate-400 group-hover:text-purple-300 transition-colors">Graduated</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 text-xl shrink-0 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                <FaCode />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  Técnico en Programación
                </h3>
                <h4 className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                  CECyT No. 9 "Juan de Dios Bátiz" — IPN
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Deep training in object-oriented programming (Java/C++), SQL relational schemas, algorithmic efficiency, debugging, and clean architecture.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WORKSPACE TABS */}
      <section id="portfolio-workspace" className="py-14 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80 w-full">

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === 'projects'
              ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/30 scale-105'
              : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
          >
            <FaLaptopCode />
            <span>01. Projects</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('certifications')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === 'certifications'
              ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30 scale-105'
              : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
          >
            <FaAward />
            <span>02. Credentials</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('techstack')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === 'techstack'
              ? 'bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/30 scale-105'
              : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
          >
            <FaLayerGroup />
            <span>03. Tech Stack</span>
          </button>
        </div>

        <div className="w-full max-w-full">
          {activeTab === 'projects' && <ProjectsSection />}
          {activeTab === 'certifications' && <CertificationsSection />}
          {activeTab === 'techstack' && <TechStackSection />}
        </div>

      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
              [ DIRECT CONTACT ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Let's talk about machine learning, backend pipelines, and systems.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg">
              Open for Machine Learning Engineering internships, Data Science research opportunities, and technical collaboration.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="mailto:huitzil.cruz.omaralejandro@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold font-mono text-xs transition shadow-lg shadow-teal-500/20"
              >
                <FaEnvelope />
                <span>Send Direct Email</span>
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs transition"
              >
                <FaFilePdf className="text-teal-400" />
                <span>Open CV</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-2.5 font-mono text-xs w-full max-w-full">
            <p className="text-slate-500 uppercase tracking-widest text-[10px] mb-2">Verified Channels</p>

            <a
              href="https://www.linkedin.com/in/omar-alejandro-huitzil-cruz-a014922a5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-teal-400/50 hover:text-teal-300 transition"
            >
              <div className="flex items-center gap-3 truncate">
                <FaLinkedin className="text-base text-teal-400 shrink-0" />
                <span className="truncate">LinkedIn / Omar Alejandro Huitzil Cruz</span>
              </div>
              <FaArrowRight className="text-[10px] shrink-0 ml-2" />
            </a>

            <a
              href="https://github.com/Huitzilinoa007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-teal-400/50 hover:text-teal-300 transition"
            >
              <div className="flex items-center gap-3 truncate">
                <FaGithub className="text-base text-teal-400 shrink-0" />
                <span className="truncate">GitHub / Huitzilinoa007</span>
              </div>
              <FaArrowRight className="text-[10px] shrink-0 ml-2" />
            </a>

            <a
              href="https://www.instagram.com/huitzilinoa_007?igsh=MWl1dnhjZnN5eWxveg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-pink-500/50 hover:text-pink-300 transition"
            >
              <div className="flex items-center gap-3 truncate">
                <SiInstagram className="text-base text-pink-400 shrink-0" />
                <span className="truncate">Instagram / @huitzilinoa_007</span>
              </div>
              <FaArrowRight className="text-[10px]" />
            </a>

            <a
              href="mailto:huitzil.cruz.omaralejandro@gmail.com"
              className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-teal-400/50 hover:text-teal-300 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3 min-w-0">
                <FaEnvelope className="text-base text-teal-400 shrink-0" />
                <span className="text-[11px] truncate">huitzil.cruz.omaralejandro@gmail.com</span>
              </div>
              <span className="text-[10px] text-teal-400 font-bold shrink-0 ml-2">Email</span>
            </a>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-3 truncate">
                <FaPhoneAlt className="text-sm text-teal-400 shrink-0" />
                <span className="truncate">+52 55 3882 8995</span>
              </div>
              <span className="text-[10px] text-slate-500 shrink-0 ml-2">Phone</span>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-mono gap-3 text-center sm:text-left">
          <p>© 2026 Omar Alejandro Huitzil Cruz · Data Science & Systems.</p>
          <p>Production Case Studies Protected.</p>
        </div>
      </footer>

    </div>
  );
}