# 🎓 NextStep - Assistant d'Orientation Étudiante

> **Une application Nuxt 4 moderne pour aider les étudiants à estimer leurs chances d'accès aux formations supérieures**

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.1.3-00DC82?style=flat-square&logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.15-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5.22-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)

## 🎯 À propos

NextStep est une application web développée pour **Edumapper**, une plateforme d'aide à l'orientation des étudiants. L'application permet aux étudiants d'estimer leurs chances d'accéder à une formation en fonction de leurs informations personnelles et académiques.

### ✨ Fonctionnalités principales

- 🏫 **Sélection de lycée** - Interface intuitive pour choisir parmi 19 lycées français
- 📚 **Configuration académique** - Sélection de classe et type de bac
- 🎯 **Spécialités** - Choix parmi 13 spécialités disponibles
- 📄 **Fiche Avenir** - Page dédiée pour l'upload de documents
- 🎲 **Données aléatoires** - API qui pré-remplit le formulaire à chaque rechargement
- 📱 **Design responsive** - Interface adaptée mobile et desktop

## 🚀 Technologies utilisées

- **[Nuxt 4](https://nuxt.com/)** - Framework Vue.js full-stack
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progressif
- **[Nuxt UI](https://ui.nuxt.com/)** - Composants UI officiels

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/NextStep.git
cd NextStep

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
pnpm build
pnpm preview
```

## 🏗️ Structure

- `app/components/` - Composants Vue
- `app/pages/` - Pages de l'application
- `server/api/` - Routes API
- `server/data/` - Données JSON

## 🔧 API

- `/api/prefill` - Données aléatoires pour pré-remplir le formulaire

## 📊 Données

- **19 lycées** (publics/privés)
- **Classes** (Terminale générale/technologique)
- **13 spécialités** (HGGSP, HLP, LLCE, LCA, Maths, NSI, PC, SVT, SI, SES, EPS, Arts, BE)

## 🎯 Utilisation

1. Sélectionner un lycée
2. Choisir sa classe et type de bac
3. Sélectionner les spécialités
4. Uploader la fiche Avenir
5. Obtenir l'estimation

## ✅ État du projet

### 🎉 Réalisé

- ✅ **Page principale** - Interface de sélection de lycée et formulaire académique
- ✅ **Sélection de lycée** - Interface fonctionnelle avec 19 lycées
- ✅ **Sélection de classe** - Classes et types de bac avec pré-remplissage
- ✅ **Spécialités** - 13 spécialités disponibles en sélection multiple
- ✅ **API de pré-remplissage** - Données aléatoires à chaque rechargement
- ✅ **Composants de base** - Composants réutilisables (boutons, chip, etc.)
- ✅ **Design responsive** - Interface adaptée mobile et desktop

### 🚧 En cours / À améliorer

- ⚠️ **Code de sélection** - Implémentation pas assez propre (contrainte temps)
- ⚠️ **Page d'accueil** - Code à refactoriser

### ❌ Non implémenté

- ❌ **Page Fiche Avenir complète** - Interface d'upload non développée
- ❌ **Page de résultats** - Affichage des estimations non implémenté
