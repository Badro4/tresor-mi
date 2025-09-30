"use client";

import { Heart, Users, BookOpen, Sparkles, Shield, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16 pt-15">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-title mb-4">
            À Propos de Notre Plateforme
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Par les étudiants, pour les étudiants ✨
          </p>
        </div>

        {/* Section Mission */}
        <div className="bg-primary rounded-2xl shadow-lg border border-gray-700 p-8 mb-12">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-br from-purple to-secondary rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-title mb-4">Notre Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Créer une plateforme collaborative où chaque étudiant peut accéder facilement 
                à toutes les ressources pédagogiques nécessaires pour réussir son parcours. 
                Nous croyons en la puissance du partage et de l&apos;entraide entre étudiants.
              </p>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-primary rounded-2xl border border-gray-700 p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-title mb-3">Communauté</h3>
            <p className="text-gray-300 text-sm">
              Une plateforme construite et enrichie par les étudiants eux-mêmes, 
              pour un partage authentique et utile.
            </p>
          </div>

          <div className="bg-primary rounded-2xl border border-gray-700 p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-semibold text-title mb-3">Accessibilité</h3>
            <p className="text-gray-300 text-sm">
              Toutes les ressources organisées et classées pour un accès rapide 
              et intuitif, sans complications.
            </p>
          </div>

          <div className="bg-primary rounded-2xl border border-gray-700 p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-semibold text-title mb-3">Qualité</h3>
            <p className="text-gray-300 text-sm">
              Des ressources vérifiées et organisées pour garantir 
              la fiabilité des contenus partagés.
            </p>
          </div>
        </div>

        {/* Histoire */}
        <div className="bg-primary rounded-2xl shadow-lg border border-gray-700 p-8 mb-12">
          <h2 className="text-2xl font-bold text-title mb-6 text-center">Notre Histoire</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Tout a commencé par une simple constatation : nous passions trop de temps à chercher 
              des ressources éparpillées entre différentes plateformes, groupes WhatsApp et drives personnels.
            </p>
            <p>
              Fatigués de cette dispersion, un groupe d&apos;étudiants s&apos;est réuni pour créer 
              <span className="text-accent font-semibold"> l&apos;outil que nous aurions aimé avoir </span>
              dès notre première année.
            </p>
            <p>
              Aujourd&apos;hui, la plateforme continue d&apos;évoluer grâce aux contributions de toute la communauté étudiante, 
              rendant l&apos;apprentissage plus collaboratif et moins stressant pour tous.
            </p>
          </div>
        </div>

        {/* Chiffres */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-background rounded-xl p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-title mb-1">500+</div>
            <div className="text-xs text-gray-400">Ressources</div>
          </div>
          <div className="bg-background rounded-xl p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-title mb-1">20+</div>
            <div className="text-xs text-gray-400">Modules</div>
          </div>
          <div className="bg-background rounded-xl p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-title mb-1">5</div>
            <div className="text-xs text-gray-400">Années couvertes</div>
          </div>
          <div className="bg-background rounded-xl p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-title mb-1">100%</div>
            <div className="text-xs text-gray-400">Gratuit</div>
          </div>
        </div>

        {/* Appel à contribution */}
        <div className="bg-gradient-to-r from-secondary to-purple rounded-2xl p-8 text-center">
          <Globe className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Rejoins la communauté !</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Tu as des ressources utiles à partager ? Tu veux améliorer la plateforme ? 
            Chaque contribution compte pour aider tes camarades et les générations futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Contribuer aux ressources
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Nous contacter
            </button>
          </div>
        </div>

        {/* Footer de la page */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Construit avec ❤️ par des étudiants passionnés • 2025
          </p>
        </div>
      </div>
    </div>
  );
}