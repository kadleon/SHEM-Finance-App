import React from 'react'
import { TrendingUp } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            SHEM Finance
          </h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bienvenue dans SHEM-Finance-App
          </h2>
          <p className="text-gray-600 mb-6">
            Application de gestion financière pour entrepreneurs en agritech et agroécologie
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">📊 Plan de Financement</h3>
              <p className="text-sm text-blue-800">Structurez vos besoins financiers</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <h3 className="font-bold text-green-900 mb-2">📈 Compte de Résultat</h3>
              <p className="text-sm text-green-800">Projections 12 mois</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
              <h3 className="font-bold text-purple-900 mb-2">💰 Plan de Trésorerie</h3>
              <p className="text-sm text-purple-800">Suivi mensuel des flux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
