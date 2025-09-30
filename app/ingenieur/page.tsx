"use client";

import { ReactNode, useState } from 'react';
import { ChevronDown, Brain, Shield, BarChart3 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function IngenieurPage() {
  type Year = {
    name: string;
    id: string;
    index: number;
  };

  type Specialty = {
    name: string;
    id: string;
    icon: ReactNode;
    color: string;
    bgColor: string;
  };
  
  const [selectedYear, setSelectedYear] = useState<Year | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter(); 

  const years = [
    { name: "1ère Année", id: "1A", index: 0 },
    { name: "2ème Année", id: "2A", index: 1 },
    { name: "3ème Année", id: "3A", index: 2 },
    { name: "4ème Année", id: "4A", index: 3 },
    { name: "5ème Année", id: "5A", index: 4 },
  ];

  const specialties = [
    { 
      name: "Intelligence Artificielle", 
      id: "ia",
      icon: <Brain className="w-6 h-6" />,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/30"
    },
    { 
      name: "Cybersécurité", 
      id: "secu",
      icon: <Shield className="w-6 h-6" />,
      color: "text-red-400",
      bgColor: "bg-red-500/10 hover:bg-red-500/20 border-red-500/30"
    },
    { 
      name: "Data Science", 
      id: "ds",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30"
    }
  ];

  const handleYearSelect = (year: Year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  const handleSpecialtySelect = (specialty: Specialty) => {
    if (!selectedYear) return;
    const url = `/ingenieur/${selectedYear.id}/${specialty.id}`;
    console.log(`Naviguer vers: ${url}`);
    router.push(url);
  };

  const handleDirectYear = (year: Year) => {
    const url = `/ingenieur/${year.id}`;
    console.log(`Naviguer vers: ${url}`);
    router.push(url);
  };

  const needsSpecialty = selectedYear && selectedYear.index >= 2;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center gap-8 p-6 pt-32 pb-20">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          ⚙️ Cycle Ingénieur
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full mx-auto"></div>
        <p className="text-blue-100 text-lg">
          Sélectionnez votre année et spécialité pour accéder aux ressources
        </p>
      </div>

      {/* Dropdown Year Selector */}
      <div className="relative w-96 z-20">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 text-white font-semibold flex items-center justify-between hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="text-lg">
            {selectedYear ? selectedYear.name : "Choisir votre année"}
          </span>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-72 overflow-y-auto">
            {years.map((year) => (
              <button
                key={year.id}
                onClick={() => handleYearSelect(year)}
                className="w-full px-6 py-4 text-left hover:bg-white/50 transition-all duration-200 border-b border-white/20 last:border-b-0 group"
              >
                <div className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {year.name}
                </div>
                <div className="text-sm text-gray-600">
                  {year.index < 2 ? "📚 Tronc commun" : "🎯 Spécialisations disponibles"}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content based on selection */}
      {selectedYear && (
        <div className="w-full max-w-4xl animate-fade-in">
          {needsSpecialty ? (
            // Specialties for 3A, 4A, 5A
            <div className="space-y-6">
              <h2 className="text-white text-2xl font-bold text-center">
                Choisissez votre spécialité
                <span className="block text-blue-300 text-lg font-normal mt-2">
                  {selectedYear.name}
                </span>
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {specialties.map((specialty) => (
                  <button
                    key={specialty.id}
                    onClick={() => handleSpecialtySelect(specialty)}
                    className={`group ${specialty.bgColor} border-2 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className={`${specialty.color} transform group-hover:scale-110 transition-transform duration-300`}>
                        {specialty.icon}
                      </div>
                      <span className="font-semibold text-center text-lg">
                        {specialty.name}
                      </span>
                      <div className="w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full rounded-full opacity-50" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Direct access for 1A, 2A
            <div className="text-center space-y-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-10">
              <div className="space-y-2">
                <h2 className="text-white text-2xl font-bold">
                  {selectedYear.name}
                </h2>
                <p className="text-blue-200">
                  Tronc commun - Tous les étudiants
                </p>
              </div>
              <button
                onClick={() => handleDirectYear(selectedYear)}
                className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl px-10 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              >
                <span>Accéder aux ressources</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Overlay léger pour fermer le dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </main>
  );
}