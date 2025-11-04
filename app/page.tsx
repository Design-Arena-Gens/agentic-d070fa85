"use client";

import { Calendar, Users, TrendingUp, Target, Award, CheckCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [expandedTrimester, setExpandedTrimester] = useState<number | null>(1);

  const trimesters = [
    {
      number: 1,
      title: "FONDATIONS",
      months: "Mois 1-3",
      objective: "Sortir du mode pompier, structurer",
      days: [
        {
          title: "Jour 1 - Diagnostic & Gouvernance",
          topics: [
            "Où vous passez vraiment votre temps",
            "Créer votre organigramme fonctionnel",
            "Installer votre CODIR (même à 10 salariés)",
            "Délégation stratégique"
          ]
        },
        {
          title: "Jour 2 - Process & Facturation",
          topics: [
            "Votre méthode 0,04% d'impayés",
            "Cartographie des 7 processus clés",
            "Identifier les goulots d'étranglement"
          ]
        },
        {
          title: "Jour 3 - RH & Croissance",
          topics: [
            "Scaler sans turnover",
            "Recrutement & fidélisation",
            "Plan croissance 3 ans"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "DIGITALISATION",
      months: "Mois 4-6",
      objective: "Automatiser, mesurer, optimiser",
      days: [
        {
          title: "Jour 4 - Outils & CRM",
          topics: [
            "Stack tech adaptée ambulances",
            "CRM et suivi missions",
            "Automatisation administrative",
            "Tableaux de bord essentiels"
          ]
        },
        {
          title: "Jour 5 - Data & KPIs",
          topics: [
            "Les 12 indicateurs qui comptent",
            "Reporting mensuel efficace",
            "Décisions data-driven",
            "Prévisionnel fiable"
          ]
        },
        {
          title: "Jour 6 - Optimisation Opérationnelle",
          topics: [
            "Gestion planning & dispatching",
            "Optimisation tournées",
            "Réduction temps improductifs"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "PERFORMANCE",
      months: "Mois 7-9",
      objective: "Maximiser rentabilité et qualité",
      days: [
        {
          title: "Jour 7 - Finance & Marges",
          topics: [
            "Analyse rentabilité par service",
            "Optimisation trésorerie",
            "Négociation contrats",
            "Stratégie prix"
          ]
        },
        {
          title: "Jour 8 - Excellence Opérationnelle",
          topics: [
            "Qualité de service mesurable",
            "Certification & conformité",
            "Gestion des réclamations",
            "Culture de l'amélioration continue"
          ]
        },
        {
          title: "Jour 9 - Leadership & Culture",
          topics: [
            "Passer de patron à dirigeant",
            "Construire votre culture d'entreprise",
            "Management par objectifs",
            "Communication interne efficace"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "SCALE",
      months: "Mois 10-12",
      objective: "Croissance maîtrisée et durable",
      days: [
        {
          title: "Jour 10 - Stratégie Croissance",
          topics: [
            "Ouvrir une base ou acquérir ?",
            "Diversification services",
            "Partenariats stratégiques",
            "Plan d'action 3 ans"
          ]
        },
        {
          title: "Jour 11 - Organisation Scale",
          topics: [
            "Structure multi-sites",
            "Réplication des processus",
            "Formation & transmission",
            "Pilotage décentralisé"
          ]
        },
        {
          title: "Jour 12 - Bilan & Vision",
          topics: [
            "Bilan 12 mois : résultats obtenus",
            "Votre roadmap personnalisée",
            "Transmission & succession",
            "Pérennité de l'entreprise"
          ]
        }
      ]
    }
  ];

  const stats = [
    { label: "Ans d'expérience", value: "25", icon: Award },
    { label: "Salariés", value: "30", icon: Users },
    { label: "Impayés", value: "0,04%", icon: TrendingUp },
    { label: "Croissance", value: "10→80", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              LE CERCLE SCALE
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Mastermind fermé pour dirigeants d'ambulance qui veulent passer de l'artisanat
              à l'entreprise digitalisée & pilotée par la data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                <span>12 journées sur 1 an</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-blue-300"></div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span>8-10 gérants max</span>
              </div>
            </div>
            <button className="mt-10 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
              Postuler au Cercle Scale
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Unique Position */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Votre Positionnement Unique</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Croissance sans turnover</p>
                <p className="text-blue-100">10→80 salariés réalisé</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Performance inégalée</p>
                <p className="text-blue-100">0,04% d'impayés vs 2-5% secteur</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Expertise terrain</p>
                <p className="text-blue-100">25 ans d'expérience, 30 salariés</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Spécialisation complète</p>
                <p className="text-blue-100">Réorganisation, gouvernance, process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
          Programme 12 Mois
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Une journée par mois pour transformer votre entreprise
        </p>

        <div className="space-y-6">
          {trimesters.map((trimester) => (
            <div key={trimester.number} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <button
                onClick={() => setExpandedTrimester(expandedTrimester === trimester.number ? null : trimester.number)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    T{trimester.number}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900">{trimester.title}</h3>
                    <p className="text-gray-600">{trimester.months} • {trimester.objective}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    expandedTrimester === trimester.number ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {expandedTrimester === trimester.number && (
                <div className="px-8 pb-8 pt-4 bg-gray-50 border-t border-gray-200">
                  <div className="space-y-6">
                    {trimester.days.map((day, dayIndex) => (
                      <div key={dayIndex} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-blue-900 mb-4">{day.title}</h4>
                        <ul className="space-y-2">
                          {day.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prêt à transformer votre entreprise d'ambulance ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Rejoignez le cercle fermé des dirigeants qui passent à l'échelle supérieure
          </p>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
            Postuler Maintenant
          </button>
          <p className="mt-6 text-blue-200 text-sm">
            Places limitées à 8-10 participants • Sélection sur dossier
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Le Cercle Scale. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
