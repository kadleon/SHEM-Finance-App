.PHONY: help up down logs build install dev test

help:
	@echo "SHEM-Finance-App - Commandes disponibles"
	@echo ""
	@echo "  make up          - Démarrer les conteneurs Docker"
	@echo "  make down        - Arrêter les conteneurs"
	@echo "  make logs        - Afficher les logs"
	@echo "  make build       - Builder les images Docker"
	@echo "  make install     - Installer les dépendances"
	@echo "  make dev         - Démarrer en mode développement"
	@echo "  make test        - Lancer les tests"

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

build:
	docker-compose build

install:
	docker-compose exec php composer install
	docker-compose exec node npm install

dev:
	docker-compose up

test:
	docker-compose exec php php artisan test
