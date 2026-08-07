"use client";

import { motion } from "framer-motion";
import { Shield, ShieldCheck, Eye, Package, UserCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SecuritySection() {
  const securityModules = [
    {
      code: "11.2.2",
      title: "Contrôle d'accès et inspections visuelles",
      icon: UserCheck,
      description: "Contrôle des accès aux zones de sûreté, vérification des identités et badges, inspections visuelles.",
      missions: [
        "Mise en place de procédures de contrôle d'accès sur sites sensibles",
        "Sensibilisation et formation des équipes",
        "Audit des dispositifs de contrôle d'accès",
      ],
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-400/50",
    },
    {
      code: "11.2.3.9",
      title: "Contrôle de sûreté du fret et du courrier",
      icon: Package,
      description: "Inspection et filtrage du fret aérien et du courrier, application des méthodes de filtrage agréées, détection d'articles prohibés.",
      missions: [
        "Audit sûreté fret et accompagnement à la conformité",
        "Revue des processus de filtrage pour agents habilités / chargeurs connus",
        "Intégration sûreté dans les flux GDP / pharma / température dirigée",
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/50",
    },
    {
      code: "11.2.6.2",
      title: "Surveillance des zones sensibles et des marchandises",
      icon: Eye,
      description: "Surveillance des zones critiques, prévention d'intrusions et de manipulations illicites sur les marchandises sensibles.",
      missions: [
        "Construction de plans de surveillance et définition de rondes",
        "Analyse des risques de sabotage, vol ou substitution sur entrepôts",
        "Intégration sûreté + qualité + GDP",
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-400/50",
    },
    {
      code: "11.2.3.10",
      title: "Supervision du contrôle de sûreté",
      icon: ShieldCheck,
      description: "Encadrement et supervision des équipes réalisant le contrôle de sûreté, contrôle qualité des opérations, gestion des écarts et incidents.",
      missions: [
        "Audit et supervision des dispositifs sûreté existants",
        "Accompagnement des responsables sûreté et mise en place d'indicateurs de performance",
        "Animation de plans d'actions correctives",
      ],
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-400/50",
    },
    {
      code: "11.2.5",
      title: "Niveau de sûreté renforcé",
      icon: AlertTriangle,
      description: "Connaissance renforcée des risques intentionnels (intrusion, sabotage, menace terroriste) et des mesures associées pour les zones à haute sensibilité.",
      missions: [
        "Conseil sur la protection de zones et flux critiques",
        "Contribution aux analyses de vulnérabilité",
        "Intégration des exigences de sûreté renforcée dans les processus opérationnels",
      ],
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/50",
    },
  ];

  return (
    <section className="py-20 bg-[#0A1B2A] text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compétences en <span className="text-cyan-400">Sûreté de l'Aviation Civile</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            Formations certifiantes pour la sécurisation des flux sensibles et la conformité réglementaire
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Security Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityModules.map((module, index) => (
            <motion.div
              key={module.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 h-full group">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${module.bgColor} group-hover:scale-110 transition-transform`}>
                      <module.icon className={`w-6 h-6 ${module.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-gray-500 mb-1">{module.code}</div>
                      <h3 className="text-lg font-bold leading-tight group-hover:text-cyan-400 transition-colors">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4">
                    {module.description}
                  </p>

                  {/* Missions */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Missions réalisables
                    </h4>
                    <ul className="space-y-2">
                      {module.missions.map((mission, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full ${module.bgColor} mt-1.5 flex-shrink-0`} />
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-cyan-500/20">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">
                    Une expertise transverse à forte valeur ajoutée
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Mes formations en sûreté de l'aviation civile, combinées à mon expertise en <strong className="text-white">QSE</strong>, <strong className="text-white">GDP</strong>, <strong className="text-white">transport</strong> et <strong className="text-white">chaîne du froid</strong>, me permettent de proposer des missions de conseil à forte valeur ajoutée sur les thématiques suivantes :
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-gray-200">Sécurisation des flux sensibles</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-gray-200">Conformité réglementaire sûreté</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="text-gray-200">Intégration Sûreté + Qualité + Excellence Opérationnelle</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
