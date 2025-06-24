
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Calendar, Clock, Trophy } from "lucide-react"

const DashboardOverview = () => {
  const student = {
    name: "Marie",
    avatar: "/placeholder.svg",
    globalProgress: 75,
    completedCourses: 8,
    activeCourses: 3
  }

  const recentCourses = [
    { id: 1, title: "Introduction à React", progress: 85, lastAccessed: "Il y a 2h" },
    { id: 2, title: "Design UI/UX Avancé", progress: 60, lastAccessed: "Hier" },
    { id: 3, title: "JavaScript ES6+", progress: 90, lastAccessed: "Il y a 3h" }
  ]

  const upcomingSession = {
    title: "Cours en direct - React Hooks",
    date: "Aujourd'hui à 14h00",
    duration: "1h30"
  }

  return (
    <div className="space-y-6">
      {/* Salutation personnalisée */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-white/20">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback className="bg-white/20 text-white text-xl">
              {student.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Bonjour {student.name} ! 👋</h1>
            <p className="text-blue-100">Prête à continuer ton parcours d'apprentissage ?</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Progrès global */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progrès Global</CardTitle>
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600 mb-2">{student.globalProgress}%</div>
            <Progress value={student.globalProgress} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">
              {student.completedCourses} cours terminés • {student.activeCourses} en cours
            </p>
          </CardContent>
        </Card>

        {/* Prochaine session */}
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prochaine Session</CardTitle>
            <Calendar className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold text-green-600 mb-1">
              {upcomingSession.title}
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{upcomingSession.date}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Durée: {upcomingSession.duration}
            </p>
          </CardContent>
        </Card>

        {/* Activité récente */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Activité Récente</CardTitle>
            <BookOpen className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
            <p className="text-xs text-muted-foreground">
              Cours consultés cette semaine
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Derniers cours suivis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            <span>Derniers Cours Suivis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCourses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{course.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex-1 max-w-xs">
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <span className="text-sm font-medium text-blue-600">{course.progress}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{course.lastAccessed}</p>
                </div>
                <Button variant="outline" size="sm" className="ml-4">
                  Continuer
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardOverview
