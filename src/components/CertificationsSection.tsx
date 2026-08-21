'use client';

import { certificationsData } from '../data/projects';
import { FaFileAlt, FaExternalLinkAlt, FaAward, FaBookOpen } from 'react-icons/fa';

export default function CertificationsSection() {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          [ 📜 SECTION 02 // CREDENTIALS & DEGREES ]
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Certifications & Academic Proof
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-2">
          Verified credentials from CECyT 9 "Bátiz", AWS Club IPN, and international hackathons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert) => (
          <div 
            key={cert.id}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-teal-400">{cert.issuer}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {cert.status}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{cert.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{cert.summary}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cert.skillsLearned.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-300 border border-slate-800">
                    {s}
                  </span>
                ))}
              </div>

              {cert.proofDocuments.length > 0 ? (
                <div className="space-y-2">
                  {cert.proofDocuments.map((doc, dIdx) => (
                    <a
                      key={dIdx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-purple-500/10 hover:bg-purple-500 hover:text-white text-purple-300 border border-purple-500/30 text-xs font-mono font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FaFileAlt />
                      <span>{doc.name}</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="w-full py-2.5 px-3 rounded-xl bg-slate-950 text-slate-500 border border-slate-800 text-xs font-mono flex items-center justify-center gap-2">
                  <FaBookOpen />
                  <span>Active Academic Trajectory (No document needed)</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}