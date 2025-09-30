"use client";

import { useState } from 'react';
import { ChevronDown, Download, Eye, Search, Filter, FileText, BookOpen } from 'lucide-react';
import matieresData from '@/data/premiereING.json';
import { useRouter } from 'next/navigation';

// Types pour TypeScript
interface Ressource {
  id: string;
  titre: string;
  type: string;
  annee: number;
  fichierUrl: string;
  taille: string;
  format: string;
}

interface Matiere {
  nom: string;
  ressources: Ressource[];
}

export default function PremiereAnneePage() {
  const [matieresOuvertes, setMatieresOuvertes] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filtreType, setFiltreType] = useState<string>('Tous');
  const [filtreAnnee, setFiltreAnnee] = useState<string>('Toutes');
  const [toutesOuvertes, setToutesOuvertes] = useState(false);

  const matieres: Matiere[] = matieresData.matieres;

  // Ouvrir/fermer toutes les matières
  const toggleToutesMatieres = () => {
    const nouvelEtat = !toutesOuvertes;
    setToutesOuvertes(nouvelEtat);
    
    const nouvelEtatMatieres: Record<string, boolean> = {};
    ressourcesFiltrees.forEach(matiere => {
      nouvelEtatMatieres[matiere.nom] = nouvelEtat;
    });
    setMatieresOuvertes(nouvelEtatMatieres);
  };

  const toggleMatiere = (nomMatiere: string) => {
    setMatieresOuvertes(prev => ({
      ...prev,
      [nomMatiere]: !prev[nomMatiere]
    }));
  };

  const visualiserRessource = (ressource: Ressource) => {
    console.log("Visualiser:", ressource);
    window.open(ressource.fichierUrl, '_blank');
  };

  // Filtrer les ressources selon les critères
  const ressourcesFiltrees = matieres.map(matiere => ({
    ...matiere,
    ressources: matiere.ressources.filter(ressource => {
      const matchesSearch = ressource.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           matiere.nom.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filtreType === 'Tous' || ressource.type === filtreType;
      const matchesAnnee = filtreAnnee === 'Toutes' || ressource.annee.toString() === filtreAnnee;
      
      return matchesSearch && matchesType && matchesAnnee;
    })
  })).filter(matiere => matiere.ressources.length > 0);

  // Extraire les années et types uniques pour les filtres
  const anneesUniques = Array.from(
    new Set(matieres.flatMap(m => m.ressources.map(r => r.annee.toString())))
  ).sort((a, b) => parseInt(b) - parseInt(a));

  const typesUniques = Array.from(
    new Set(matieres.flatMap(m => m.ressources.map(r => r.type)))
  );

  // Statistiques
  const totalRessources = matieres.flatMap(m => m.ressources).length;
  const ressourcesFiltreesCount = ressourcesFiltrees.flatMap(m => m.ressources).length;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 pt-25">
      <div className="max-w-6xl mx-auto">
        {/* En-tête amélioré */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
            Ressources 1ère Année Ingénieur
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full mt-5"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed pt-5">
            Tous les sujets d&apos;examens, TD et exercices pour <span className="font-semibold text-white">réussir ton année</span>
          </p>
        </div>

        {/* Barre de recherche et filtres améliorée */}
        <div className="bg-primary rounded-2xl shadow-lg p-6 mb-8 border border-gray-700">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher une ressource, une matière, un type..."
                  className="w-full pl-12 pr-4 py-3 bg-background border border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-title placeholder-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  className="pl-10 pr-8 py-3 bg-background border border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-title appearance-none"
                  value={filtreType}
                  onChange={(e) => setFiltreType(e.target.value)}
                >
                  <option value="Tous">Tous les types</option>
                  {typesUniques.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <select
                className="px-4 py-3 bg-background border border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-title"
                value={filtreAnnee}
                onChange={(e) => setFiltreAnnee(e.target.value)}
              >
                <option value="Toutes">Toutes les années</option>
                {anneesUniques.map(annee => (
                  <option key={annee} value={annee}>{annee}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Statistiques en temps réel */}
          <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {ressourcesFiltreesCount} ressource{ressourcesFiltreesCount > 1 ? 's' : ''} trouvée{ressourcesFiltreesCount > 1 ? 's' : ''}
              </span>
              <span>•</span>
              <span>{ressourcesFiltrees.length} matière{ressourcesFiltrees.length > 1 ? 's' : ''}</span>
            </div>
            
            {ressourcesFiltrees.length > 0 && (
              <button
                onClick={toggleToutesMatieres}
                className="text-accent hover:text-secondary text-sm font-medium flex items-center gap-1 transition-colors"
              >
                {toutesOuvertes ? 'Tout fermer' : 'Tout ouvrir'}
                <ChevronDown className={`w-4 h-4 transition-transform ${toutesOuvertes ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        </div>

        {/* Liste des matières améliorée */}
        <div className="space-y-4">
          {ressourcesFiltrees.length === 0 ? (
            <div className="text-center py-16 bg-primary rounded-2xl shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-title mb-2">
                Aucune ressource trouvée
              </h3>
              <p className="text-gray-300 max-w-md mx-auto">
                Aucune ressource ne correspond à votre recherche. Essayez de modifier vos filtres ou termes de recherche.
              </p>
            </div>
          ) : (
            ressourcesFiltrees.map((matiere) => (
              <div key={matiere.nom} className="bg-primary rounded-2xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <button
                  onClick={() => toggleMatiere(matiere.nom)}
                  className="w-full p-6 flex justify-between items-center hover:bg-background transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-purple rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-title text-lg">{matiere.nom}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-gray-300">
                          {matiere.ressources.length} ressource{matiere.ressources.length > 1 ? 's' : ''}
                        </span>
                        <span className="text-xs text-gray-400">
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 hidden sm:block">
                      Cliquez pour {matieresOuvertes[matiere.nom] ? 'réduire' : 'développer'}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
                        matieresOuvertes[matiere.nom] ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>
                
                {matieresOuvertes[matiere.nom] && (
                  <div className="border-t border-gray-700">
                    {matiere.ressources.map((ressource, index) => (
                      <div 
                        key={ressource.id} 
                        className={`p-6 flex justify-between items-center hover:bg-background transition-colors duration-200 ${
                          index < matiere.ressources.length - 1 ? 'border-b border-gray-700' : ''
                        }`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium text-title">{ressource.titre}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              ressource.type === 'Examen' ? 'bg-red-500/20 text-red-300' :
                              ressource.type === 'TD' ? 'bg-blue-500/20 text-blue-300' :
                              ressource.type === 'TP' ? 'bg-pink-500/20 text-pink-300' :
                              ressource.type === 'Cours' ? 'bg-green-500/20 text-green-300' :
                              'bg-gray-500/20 text-gray-300'
                            }`}>
                              {ressource.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-300">
                            <span>Année {ressource.annee}</span>
                            <span>•</span>
                            <span>{ressource.taille}</span>
                            <span>•</span>
                            <span className="font-mono text-xs bg-background px-2 py-1 rounded text-gray-300">
                              {ressource.format}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 ml-6">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              visualiserRessource(ressource);
                            }}
                            className="p-3 text-accent hover:bg-secondary/20 rounded-xl transition-colors duration-200 flex items-center gap-2"
                            title="Visualiser"
                          >
                            <Eye className="w-4 h-4" />
                            <span className="text-sm font-medium hidden sm:inline">Voir</span>
                          </button>
                          <a
                            href={ressource.fichierUrl}
                            download
                            className="p-3 text-green-400 hover:bg-green-500/20 rounded-xl transition-colors duration-200 flex items-center gap-2"
                            title="Télécharger"
                          >
                            <Download className="w-4 h-4" />
                            <span className="text-sm font-medium hidden sm:inline">Télécharger</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Pied de page */}
        <div className="mt-12 text-center">
          <div className="bg-primary rounded-2xl shadow-lg border border-gray-700 p-6">
            <h3 className="font-semibold text-title mb-2">
              📚 Collection complète de ressources
            </h3>
            <p className="text-gray-300 text-sm">
              {totalRessources} ressources disponibles au total • Mise à jour régulière
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}