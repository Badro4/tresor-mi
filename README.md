# 📚 Plateforme de Ressources Étudiantes

Une plateforme collaborative créée **par les étudiants, pour les étudiants** afin de centraliser et partager facilement toutes les ressources pédagogiques.

## ✨ Fonctionnalités

- **📖 Ressources organisées** par année et spécialité
- **🔍 Recherche avancée** avec filtres par type et année
- **👥 Contribution communautaire** - chaque étudiant peut proposer des ressources
- **📱 Interface moderne** et responsive
- **🎯 Navigation intuitive** par cycle ingénieur

## 🚀 Technologies utilisées

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Styling**: Design system personnalisé avec variables CSS
- **Deployment**: Vercel (recommandé)

## 📦 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/nom-du-repo.git
cd nom-du-repo
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Lancer en développement**
```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 🎯 Structure du projet

```
src/
├── app/                    # Pages Next.js 14 (App Router)
│   ├── ingenieur/         # Pages du cycle ingénieur
│   ├── about/             # Page À propos
│   ├── contact/           # Page de contact
│   └── layout.tsx         # Layout principal
├── components/            # Composants réutilisables
├── data/                  # Données des ressources (JSON)
└── styles/               # Fichiers CSS globaux
```

## 📊 Données

Les ressources sont stockées dans des fichiers JSON dans `/data` :
- `premiereING.json` - Ressources de 1ère année
- Structure extensible pour les autres années

## 🤝 Contribution

Nous encourageons tous les étudiants à contribuer ! 

**Comment contribuer :**
1. Fork le projet
2. Ajoute tes ressources dans les fichiers JSON correspondants
3. Ou utilise le formulaire de contact pour proposer des ressources
4. Crée une Pull Request

**Types de ressources acceptés :**
- 📝 Sujets d'examens
- 📚 Travaux dirigés (TD)
- 🎓 Cours et supports
- 💡 Exercices corrigés
- 🔍 Annotations et conseils

## 📧 Contact

Une question ? Une ressource à partager ? 
Utilisez notre [page de contact](/contact) ou ouvrez une issue sur GitHub.

## 🎨 Design System

Le projet utilise un design system personnalisé avec :
- Couleurs principales : Indigo, Bleu, Violet
- Typographie : Geist Sans/Mono
- Thème sombre par défaut

## 📄 Licence

Ce projet est open source et disponible sous licence MIT. Fait par des étudiants, pour des étudiants ❤️

---

**💡 Un problème ? Une idée ?** N'hésitez pas à ouvrir une issue ou à contribuer !
