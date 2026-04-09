# Architecture SHEM-Finance-App

## Vue d'ensemble


## Modules Principaux

### 1. Plan de Financement
- Gestion des immobilisations (corporelles et incorporelles)
- Calcul du BFR (Besoin en Fonds de Roulement)
- Agrégation des ressources (apports, emprunts, subventions)

### 2. Compte de Résultat
- Chiffre d'affaires prévisionnel
- Charges d'exploitation détaillées
- Calcul de l'EBE (Excédent Brut d'Exploitation) et résultat net

### 3. Plan de Trésorerie
- Suivi mensuel des encaissements et décaissements
- Calcul des soldes cumulés
- Alertes de trésorerie

## Stack Technique

| Couche | Technologie |
|--------|-------------|
| Frontend | React 18 + Tailwind CSS + Lucide Icons |
| Backend | Laravel 10 + PHP 8.1 |
| Database | MySQL 8.0 |
| Conteneurisation | Docker Compose |
| CI/CD | GitHub Actions |

## Flux de données

1. **Frontend** envoie les données via l'API REST
2. **Backend (Laravel)** valide et traite les calculs
3. **Database (MySQL)** stocke les données persistantes
4. **Services Laravel** gèrent la logique métier financière
5. **Frontend** affiche les résultats avec graphiques et tableaux
