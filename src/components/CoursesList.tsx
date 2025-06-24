
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Play, CheckCircle, Clock } from "lucide-react"

const CoursesList = () => {
  const courses = [
    {
      id: 1,
      title: "Développement Web avec React",
      description: "Apprenez à créer des applications web modernes avec React et ses écosystèmes.",
      progress: 85,
      status: "en_cours",
      duration: "12 semaines",
      modules: 8,
      completedModules: 7,
      nextLesson: "Hooks avancés",
      difficulty: "Intermédiaire",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Design UI/UX pour Débutants",
      description: "Maîtrisez les principes du design et créez des interfaces utilisateur attrayantes.",
      progress: 60,
      status: "en_cours",
      duration: "8 semaines",
      modules: 6,
      completedModules: 3,
      nextLesson: "Prototypage avec Figma",
      difficulty: "Débutant",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "JavaScript ES6+ Avancé",
      description: "Perfectionnez vos compétences en JavaScript moderne et découvrez les dernières fonctionnalités.",
      progress: 90,
      status: "presque_fini",
      duration: "10 semaines",
      modules: 10,
      completedModules: 9,
      nextLesson: "Projet final",
      difficulty: "Avancé",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Introduction aux Bases de Données",
      description: "Découvrez SQL, NoSQL et les concepts fondamentaux des bases de données.",
      progress: 0,
      status: "pas_commence",
      duration: "6 semaines",
      modules: 5,
      completedModules: 0,
      nextLesson: "Introduction à SQL",
      difficulty: "Débutant",
      thumbnail: "/placeholder.svg"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "en_cours": return "bg-blue-500"
      case "presque_fini": return "bg-green-500"
      case "pas_commence": return "bg-gray-400"
      default: return "bg-blue-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "en_cours": return "En cours"
      case "presque_fini": return "Presque terminé"
      case "pas_commence": return "Pas commencé"
      default: return "En cours"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-100 text-green-800"
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800"
      case "Avancé": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Mes Cours</h2>
        <div className="flex space-x-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            {courses.filter(c => c.status === "en_cours").length} en cours
          </Badge>
          <Badge variant="outline" className="bg-green-50 text-green-700">
            {courses.filter(c => c.progress === 100).length} terminés
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className={getStatusColor(course.status)}>
                      {getStatusText(course.status)}
                    </Badge>
                    <Badge variant="outline" className={getDifficultyColor(course.difficulty)}>
                      {course.difficulty}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {/* Progression */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progression</span>
                    <span className="text-sm font-bold text-blue-600">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{course.completedModules}/{course.modules} modules</span>
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Prochaine leçon */}
                {course.status !== "pas_commence" && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium text-gray-700">Prochaine leçon</span>
                    </div>
                    <p className="text-sm text-gray-600">{course.nextLesson}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  {course.status === "pas_commence" ? (
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Play className="h-4 w-4 mr-2" />
                      Commencer
                    </Button>
                  ) : (
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Play className="h-4 w-4 mr-2" />
                      Continuer
                    </Button>
                  )}
                  <Button variant="outline" className="flex-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Détails
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CoursesList
