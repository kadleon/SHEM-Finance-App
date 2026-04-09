# API Reference - SHEM-Finance-App

## Base URL

## Authentication
Utilisez Laravel Sanctum pour les tokens d'authentification.

## Endpoints

### Plan de Financement

#### GET /projets/{id}/plan-financement
Récupère le plan de financement d'un projet.

**Response:**
```json
{
  "plan_financement": {
    "id": 1,
    "projet_id": 1,
    "immobilisations_terrains": 50000,
    "immobilisations_constructions": 100000,
    "bfr_stocks": 15000,
    "apport_personnel": 80000,
    "pret_bancaire": 120000
  },
  "totaux": {
    "total_besoins": 165000,
    "total_ressources": 200000,
    "equilibre": true
  }
}
{
  "immobilisations_terrains": 50000,
  "immobilisations_constructions": 100000,
  "bfr_stocks": 15000,
  "apport_personnel": 80000,
  "pret_bancaire": 120000,
  "montant_pret_bancaire": 120000,
  "duree_pret_mois": 60,
  "taux_interet_annuel": 3.5
}

---

Créons `docs/GUIDE_UTILISATION.md` :

```bash
cat > docs/GUIDE_UTILISATION.md << 'EOF'
# Guide d'utilisation - SHEM-Finance-App

## 1. Installation

### Prérequis
- Docker & Docker Compose
- Git
- Node.js 18+ (pour développement frontend)
- PHP 8.1+ (pour développement backend)

### Démarrage rapide

```bash
# Cloner le repository
git clone https://github.com/kadleonfais/SHEM-Finance-App.git
cd SHEM-Finance-App

# Lancer avec Docker
docker-compose up -d

# Accédez aux services
# Frontend : http://localhost:5173
# Backend : http://localhost:8000
# MySQL : localhost:3306

---

Mettons à jour le `README.md` principal :

```bash
cat > README.md << 'EOF'
# 🌾 SHEM-Finance-App

Application web de gestion financière pour entrepreneurs en **agritech** et **agroécologie**.

Structurez vos projets avec une traduction chiffrée réaliste.

## 📋 Modules

- **Plan de Financement Initial** : Immobilisations, BFR, Ressources
- **Compte de Résultat Prévisionnel** : 12 mois de projections
- **Plan de Trésorerie** : Suivi mensuel des flux (6-12 mois)

## 🛠 Stack

| Composant | Technologie |
|-----------|-------------|
| Frontend | React 18 + Tailwind CSS + Lucide Icons |
| Backend | Laravel 10 + PHP 8.1 |
| Database | MySQL 8.0 |
| Infrastructure | Docker Compose |
| CI/CD | GitHub Actions |

## 🚀 Démarrage rapide

### Avec Docker (Recommandé)

```bash
# Cloner le repository
git clone https://github.com/kadleonfais/SHEM-Finance-App.git
cd SHEM-Finance-App

# Démarrer l'environnement
docker-compose up -d

# Accédez aux services
# Frontend : http://localhost:5173
# Backend : http://localhost:8000

# Backend (Laravel)
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

# Frontend (React)
cd frontend
npm install
npm run dev
SHEM-Finance-App/
├── backend/           # Laravel API
├── frontend/          # React App
├── docs/              # Documentation
├── .github/workflows/ # CI/CD
└── docker-compose.yml # Orchestration
