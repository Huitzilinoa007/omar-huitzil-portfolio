'use client';

import { useState } from 'react';
import { FaKey, FaDatabase, FaTable, FaLink, FaLayerGroup } from 'react-icons/fa';

interface Column {
  name: string;
  type: string;
  isPk?: boolean;
  isFk?: boolean;
  references?: string;
  isUnique?: boolean;
}

interface TableModel {
  name: string;
  layer: 'Core Identity' | 'Habits & Gamification' | 'Communication & Customization';
  description: string;
  columns: Column[];
}

const tablesData: TableModel[] = [
  {
    name: "Tutor",
    layer: "Core Identity",
    description: "Main account responsible for managing child accounts, defining habits, and establishing rewards.",
    columns: [
      { name: "id_tutor", type: "INT", isPk: true },
      { name: "cod_presa", type: "VARCHAR(16)", isUnique: true },
      { name: "nombre", type: "VARCHAR(70)" },
      { name: "apellidos", type: "VARCHAR(70)" },
      { name: "edad", type: "INT" },
      { name: "email", type: "VARCHAR(70)" },
      { name: "contrasenia", type: "VARCHAR(21)" },
      { name: "img_perfil", type: "VARCHAR(50)" },
      { name: "fecha_registro", type: "DATE" }
    ]
  },
  {
    name: "Hijo",
    layer: "Core Identity",
    description: "Student profile associated with a tutor via unique dam code ('cod_presa') with reward metrics.",
    columns: [
      { name: "id_hijo", type: "INT", isPk: true },
      { name: "cod_presa", type: "VARCHAR(16)", isFk: true, references: "Tutor(cod_presa)" },
      { name: "nombre_usr", type: "VARCHAR(30)" },
      { name: "edad", type: "INT" },
      { name: "ramitas", type: "INT" },
      { name: "hojitas", type: "INT" },
      { name: "imgPerfil", type: "VARCHAR(50)" },
      { name: "fecha_registro", type: "DATE" }
    ]
  },
  {
    name: "Habitos",
    layer: "Habits & Gamification",
    description: "Agreement engine mapping habit frequencies, time windows, and completion streak tracking.",
    columns: [
      { name: "id_habito", type: "INT", isPk: true },
      { name: "id_tutor", type: "INT", isFk: true, references: "Tutor(id_tutor)" },
      { name: "id_hijo", type: "INT", isFk: true, references: "Hijo(id_hijo)" },
      { name: "nombre", type: "VARCHAR(50)" },
      { name: "tipo", type: "VARCHAR(30)" },
      { name: "ramitas", type: "INT" },
      { name: "reps", type: "INT" },
      { name: "dia_inicio", type: "DATE" },
      { name: "dia_fin", type: "DATE" },
      { name: "hora_inicio", type: "TIME" },
      { name: "hora_fin", type: "TIME" },
      { name: "estado", type: "INT" },
      { name: "fechas_completas", type: "TEXT" },
      { name: "dias_completados", type: "TEXT" }
    ]
  },
  {
    name: "Recompensa",
    layer: "Habits & Gamification",
    description: "Incentive catalogue configured by tutors with milestone levels and ramita costs.",
    columns: [
      { name: "id_recompensa", type: "INT", isPk: true },
      { name: "id_tutor", type: "INT", isFk: true, references: "Tutor(id_tutor)" },
      { name: "nombre", type: "VARCHAR(50)" },
      { name: "nivel", type: "INT" },
      { name: "tipo", type: "VARCHAR(30)" },
      { name: "costo", type: "INT" },
      { name: "descripcion", type: "VARCHAR(250)" },
      { name: "estado", type: "INT" },
      { name: "favorito", type: "INT" }
    ]
  },
  {
    name: "Conversacion & Mensaje",
    layer: "Communication & Customization",
    description: "Hierarchical parent-child chat stream with relational message tracking and delivery states.",
    columns: [
      { name: "id_conversacion", type: "INT", isPk: true },
      { name: "id_tutor", type: "INT", isFk: true, references: "Tutor(id_tutor)" },
      { name: "id_hijo", type: "INT", isFk: true, references: "Hijo(id_hijo)" },
      { name: "id_mensaje", type: "BIGINT", isPk: true },
      { name: "tipo_remitente", type: "VARCHAR(20)" },
      { name: "contenido", type: "TEXT" },
      { name: "fecha", type: "DATETIME" },
      { name: "estatus", type: "INT" }
    ]
  },
  {
    name: "Avatar & Estanque",
    layer: "Communication & Customization",
    description: "Gamified space customization, avatar accessories, and daily journal emotional tracking.",
    columns: [
      { name: "id_hijo", type: "INT", isPk: true, isFk: true, references: "Hijo(id_hijo)" },
      { name: "cabeza / torso / piernas", type: "TEXT" },
      { name: "accesorio / mascota", type: "TEXT" },
      { name: "pared / techo / piso", type: "TEXT" },
      { name: "espacio1..espacio5", type: "TEXT" },
      { name: "Diario: sentimiento / privacidad", type: "VARCHAR / INT" }
    ]
  }
];

export default function CastorwayERD() {
  const [selectedLayer, setSelectedLayer] = useState<string>('All');
  const [activeTable, setActiveTable] = useState<string | null>(null);

  const filteredTables = selectedLayer === 'All'
    ? tablesData
    : tablesData.filter((t) => t.layer === selectedLayer);

  return (
    <div className="w-full bg-[#080d1a] border border-sky-500/30 rounded-3xl p-5 sm:p-7 space-y-6 shadow-2xl">
      
      {/* Header del ERD */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 text-sm">
              <FaDatabase />
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white font-mono">
              castorway_schema.sql (3NF Relational ERD)
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Interactive relational schema detailing primary keys, foreign constraints, and entity dependencies.
          </p>
        </div>

        {/* Filtros por Capa Arquitectónica */}
        <div className="flex flex-wrap gap-1.5">
          {['All', 'Core Identity', 'Habits & Gamification', 'Communication & Customization'].map((layer) => (
            <button
              key={layer}
              onClick={() => setSelectedLayer(layer)}
              className={`px-3 py-1 rounded-lg text-[11px] font-mono transition cursor-pointer ${
                selectedLayer === layer
                  ? 'bg-sky-400 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Tablas ERD */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTables.map((table) => {
          const isHighlighted = activeTable === table.name;

          return (
            <div
              key={table.name}
              onMouseEnter={() => setActiveTable(table.name)}
              onMouseLeave={() => setActiveTable(null)}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                isHighlighted
                  ? 'border-teal-400/80 bg-slate-900 shadow-[0_0_25px_rgba(45,212,191,0.2)] -translate-y-1'
                  : 'border-slate-800/90 bg-slate-950/80 hover:border-slate-700'
              }`}
            >
              {/* Encabezado de Tabla */}
              <div className="p-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaTable className="text-sky-400 text-xs" />
                  <span className="font-mono text-xs font-bold text-white tracking-wide">
                    {table.name}
                  </span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-950 text-teal-300 border border-slate-800">
                  {table.layer.split(' ')[0]}
                </span>
              </div>

              {/* Lista de Columnas y Constraints */}
              <div className="p-3.5 space-y-1.5 text-[11px] font-mono flex-1">
                {table.columns.map((col, cIdx) => (
                  <div
                    key={cIdx}
                    className={`flex items-center justify-between p-1.5 rounded-md transition ${
                      col.isPk
                        ? 'bg-amber-500/10 border border-amber-500/20 text-amber-300'
                        : col.isFk
                        ? 'bg-purple-500/10 border border-purple-500/20 text-purple-300'
                        : 'text-slate-300 hover:bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate pr-2">
                      {col.isPk && <FaKey className="text-[9px] text-amber-400 shrink-0" title="Primary Key" />}
                      {col.isFk && <FaLink className="text-[9px] text-purple-400 shrink-0" title="Foreign Key" />}
                      <span className="font-semibold truncate">{col.name}</span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 text-[10px]">
                      {col.references && (
                        <span className="text-[9px] text-purple-400/90 bg-purple-950/60 px-1 py-0.2 rounded border border-purple-800/40 hidden sm:inline">
                          ➔ {col.references}
                        </span>
                      )}
                      <span className="text-slate-500">{col.type}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pie de Tabla con Resumen Funcional */}
              <div className="p-3 bg-black/40 border-t border-slate-900 text-[10px] text-slate-400 leading-relaxed font-sans">
                {table.description}
              </div>
            </div>
          );
        })}
      </div>

      {/* Leyenda de Llaves & Integridad Referencial */}
      <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-300">
            <FaKey className="text-amber-400 text-[10px]" /> [PK] Primary Key
          </span>
          <span className="flex items-center gap-1.5 text-purple-300">
            <FaLink className="text-purple-400 text-[10px]" /> [FK] Foreign Key Constraint
          </span>
          <span className="flex items-center gap-1.5 text-sky-300">
            <FaDatabase className="text-sky-400 text-[10px]" /> MySQL 3NF Compliant
          </span>
        </div>
        <span className="text-[11px] text-teal-400 font-bold">
          Cascading Referential Integrity Active
        </span>
      </div>

    </div>
  );
}