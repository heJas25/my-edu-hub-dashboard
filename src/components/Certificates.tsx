
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Download, Share, Calendar, Award, Star } from "lucide-react"

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "JavaScript ES6+ Avancé",
      course: "Développement JavaScript",
      completionDate: "2024-06-15",
      grade: "A+",
      score: 95,
      instructor: "Prof. Dubois",
      duration: "10 semaines",
      skills: ["ES6+", "Async/Await", "Modules", "Classes"],
      status: "available",
      credentialId: "JS-ES6-2024-001"
    },
    {
      id: 2,
      title: "Fondamentaux du Design UI/UX",
      course: "Design et Expérience Utilisateur",
      completionDate: "2024-05-28",
      grade: "A",
      score: 88,
      instructor: "Prof. Leroy",
      duration: "8 semaines",
      skills: ["Figma", "Prototypage", "Design Thinking", "Wireframing"],
      status: "available",
      credentialId: "UX-FUND-2024-002"
    },
    {
      id: 3,
      title: "Introduction au Développement Web",
      course: "Développement Web",
      completionDate: "2024-04-20",
      grade: "B+",
      score: 87,
      instructor: "Prof. Martin",
      duration: "6 semaines",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      status: "available",
      credentialId: "WEB-INTRO-2024-003"
    },
    {
      id: 4,
      title: "Développement React Avancé",
      course: "Développement Frontend",
      completionDate: null,
      grade: null,
      score: 85,
      instructor: "Prof. Martin",
      duration: "12 semaines",
      skills: ["React", "Hooks", "Context", "Redux"],
      status: "in_progress",
      credentialId: null
    }
  ]

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+": return "bg-green-100 text-green-800 border-green-200"
      case "A": return "bg-green-100 text-green-700 border-green-200"
      case "B+": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "B": return "bg-yellow-100 text-yellow-700 border-yellow-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const completedCertificates = certificates.filter(cert => cert.status === "available")
  const inProgressCertificates = certificates.filter(cert => cert.status === "in_progress")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Mes Certificats</h2>
        <div className="flex space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700">
            {completedCertificates.length} obtenus
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            {inProgressCertificates.length} en cours
          </Badge>
        </div>
      </div>

      {/* Statistiques */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-800">
            <Trophy className="h-5 w-5" />
            <span>Vos Réussites</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{completedCertificates.length}</div>
              <div className="text-sm text-muted-foreground">Certificats obtenus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(completedCertificates.reduce((acc, cert) => acc + cert.score, 0) / completedCertificates.length) || 0}%
              </div>
              <div className="text-sm text-muted-foreground">Score moyen</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {completedCertificates.reduce((acc, cert) => acc + cert.skills.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Compétences validées</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{inProgressCertificates.length}</div>
              <div className="text-sm text-muted-foreground">En cours</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certificats obtenus */}
      {completedCertificates.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Award className="h-5 w-5 text-green-600" />
            <span>Certificats Obtenus</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {completedCertificates.map((certificate) => (
              <Card key={certificate.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <span>{certificate.title}</span>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mb-3">
                        {certificate.course}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className={`border ${getGradeColor(certificate.grade!)}`}>
                          Note: {certificate.grade}
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          {certificate.score}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Informations du certificat */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Date d'obtention:</span>
                          <div className="font-medium">
                            {new Date(certificate.completionDate!).toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Durée:</span>
                          <div className="font-medium">{certificate.duration}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Instructeur:</span>
                          <div className="font-medium">{certificate.instructor}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">ID Certificat:</span>
                          <div className="font-medium text-xs">{certificate.credentialId}</div>
                        </div>
                      </div>
                    </div>

                    {/* Compétences acquises */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Compétences validées:</h4>
                      <div className="flex flex-wrap gap-1">
                        {certificate.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger PDF
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share className="h-4 w-4 mr-2" />
                        Partager
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Certificats en cours */}
      {inProgressCertificates.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Star className="h-5 w-5 text-blue-600" />
            <span>Certificats en Cours</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {inProgressCertificates.map((certificate) => (
              <Card key={certificate.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 flex items-center space-x-2">
                        <Star className="h-5 w-5 text-blue-500" />
                        <span>{certificate.title}</span>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mb-3">
                        {certificate.course}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                          En cours
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50 text-gray-700">
                          Progression: {certificate.score}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Informations du cours */}
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Durée totale:</span>
                          <div className="font-medium">{certificate.duration}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Instructeur:</span>
                          <div className="font-medium">{certificate.instructor}</div>
                        </div>
                      </div>
                    </div>

                    {/* Compétences à acquérir */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Compétences à valider:</h4>
                      <div className="flex flex-wrap gap-1">
                        {certificate.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        Continuer le cours
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Voir détails
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {certificates.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun certificat</h3>
            <p className="text-muted-foreground mb-4">
              Terminez vos premiers cours pour obtenir vos certificats !
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Découvrir les cours
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Certificates
