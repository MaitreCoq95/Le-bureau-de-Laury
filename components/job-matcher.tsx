"use client";

import { useState } from "react";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Loader2, Check, Copy, Briefcase, FileText, Send, Download } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  score_global: z.number().min(0).max(100),
  scores_par_axes: z.object({
    secteur_transport_logistique_pharma: z.number().min(0).max(100),
    qualite_qse_iso_gdp_bpf: z.number().min(0).max(100),
    excellence_operationnelle_lean: z.number().min(0).max(100),
    management_multisite_codir: z.number().min(0).max(100),
    digitalisation_data_ia: z.number().min(0).max(100),
  }),
  points_forts: z.array(z.string()),
  points_a_discuter: z.array(z.string()),
  analyse_detaillee: z.string(),
  pitch_court: z.string(),
});

export function JobMatcher() {
  const [jobDescription, setJobDescription] = useState("");
  const { object, submit, isLoading, error } = useObject({
    api: "/api/analyze-job",
    schema,
  });
  const [isGeneratingCV, setIsGeneratingCV] = useState(false);
  const [cvUrl, setCvUrl] = useState<string | null>(null);

  const handleGenerateCV = async () => {
    if (!object) return;
    setIsGeneratingCV(true);
    try {
      const response = await fetch("/api/generate-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobDescription,
          jobAnalysis: {
            matchScore: object?.score_global ?? 0,
            keyMatches: object?.points_forts ?? [],
            missingSkills: object?.points_a_discuter ?? [],
            recommendations: object?.points_a_discuter?.map(p => `Expérience transférable : ${p}`) ?? [],
          },
        }),
      });

      if (!response.ok) throw new Error("Erreur lors de la génération");
      
      const data = await response.json();
      
      if (data.link) {
        setCvUrl(data.link);
        toast.success("CV généré avec succès !");
      } else {
         toast.error("Erreur: Lien non reçu de Gamma");
      }

    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la génération du CV");
    } finally {
      setIsGeneratingCV(false);
    }
  };

  const formatDataForChart = (scores: any) => {
    if (!scores) return [];
    return [
      { subject: 'Secteur', A: scores.secteur_transport_logistique_pharma ?? 0, fullMark: 100 },
      { subject: 'Qualité', A: scores.qualite_qse_iso_gdp_bpf ?? 0, fullMark: 100 },
      { subject: 'ExOps', A: scores.excellence_operationnelle_lean ?? 0, fullMark: 100 },
      { subject: 'Management', A: scores.management_multisite_codir ?? 0, fullMark: 100 },
      { subject: 'Data/IA', A: scores.digitalisation_data_ia ?? 0, fullMark: 100 },
    ];
  };

  return (
    <section id="job-matcher" className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Job Matcher AI</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Copiez-collez une offre d'emploi ci-dessous. Mon IA analysera la compatibilité avec mon profil 
            et générera un CV sur-mesure mettant en avant les compétences pertinentes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Offre d'emploi</CardTitle>
              <CardDescription>Collez le texte de l'offre ici</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Ex: Responsable Qualité H/F..."
                className="min-h-[300px]"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              <Button 
                className="w-full" 
                onClick={() => submit({ jobDescription })}
                disabled={isLoading || !jobDescription}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyse en cours...
                  </>
                ) : (
                  <>
                    <Briefcase className="mr-2 h-4 w-4" />
                    Analyser la compatibilité
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {object ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Analyse de compatibilité</span>
                      <span className={`text-2xl font-bold ${
                        (object?.score_global ?? 0) >= 80 ? 'text-green-500' : 
                        (object?.score_global ?? 0) >= 60 ? 'text-yellow-500' : 'text-red-500'
                      }`}>
                        {object?.score_global}%
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formatDataForChart(object?.scores_par_axes)}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} />
                          <Radar
                            name="Nicolas"
                            dataKey="A"
                            stroke="#d4a853"
                            fill="#d4a853"
                            fillOpacity={0.6}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" /> Points forts identifiés
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {object?.points_forts?.map((point, i) => (
                            <li key={i} className="text-muted-foreground">• {point}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" /> Pitch suggéré
                        </h4>
                        <div className="bg-muted p-3 rounded-md text-sm italic relative group">
                          "{object?.pitch_court}"
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => {
                              if (object?.pitch_court) {
                                navigator.clipboard.writeText(object.pitch_court);
                                toast.success("Copié !");
                              }
                            }}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>


              </>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-xl p-12">
                <div className="text-center">
                  <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p>Les résultats de l'analyse s'afficheront ici</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
