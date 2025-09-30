"use client";

import { useState } from 'react';
import { Mail, MessageCircle, Heart, Send } from 'lucide-react';

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    
    // Hna dir logique d'envoie de l'email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setMessage('');
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12 pt-15">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-title mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-300">
            Une question ? Une ressource à partager ? On est là pour vous !
          </p>
        </div>

        {/* Carte de contact */}
        <div className="bg-primary rounded-2xl shadow-lg border border-gray-700 p-8 mb-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-title mb-3">
              Envoyez-nous un message
            </h2>
            <p className="text-gray-300">
              Que ce soit pour ajouter des ressources, signaler un problème<br />
              ou simplement nous faire part de vos suggestions
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-title mb-2">
                Message envoyé !
              </h3>
              <p className="text-gray-300 mb-6">
                Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-accent hover:text-secondary font-medium transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-title mb-3">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Dites-nous tout... Ressources à ajouter, problème technique, suggestion d'amélioration, ou simplement un mot gentil 😊"
                  className="w-full px-4 py-3 bg-background border border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-title placeholder-gray-400 resize-none"
                  required
                />
              </div>

              <div className="bg-background/50 rounded-xl p-4 border border-gray-600">
                <h4 className="font-semibold text-title text-sm mb-2">
                  💡 Idées de ce que vous pouvez nous envoyer :
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Des sujets d&apos;examens manquants</li>
                  <li>• Des TD ou exercices supplémentaires</li>
                  <li>• Des corrections détaillées</li>
                  <li>• Un bug sur le site</li>
                  <li>• Une suggestion d&apos;amélioration</li>
                  <li>• Une matière que vous souhaitez voir ajoutée</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !message.trim()}
                className="w-full bg-gradient-to-r from-secondary to-purple hover:from-blue-600 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Informations supplémentaires */}
        <div className="text-center">
          <div className="bg-primary rounded-2xl border border-gray-700 p-6">
            <h3 className="font-semibold text-title mb-2">
              🤝 Rejoignez la communauté
            </h3>
            <p className="text-gray-300 text-sm">
              Chaque contribution fait la différence. Ensemble, construisons la meilleure plateforme étudiante !
            </p>
          </div>
          
          <div className="mt-6 text-gray-400 text-sm">
            <p>Construit avec ❤️ par des étudiants • 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}