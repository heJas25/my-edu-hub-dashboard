
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Bell, 
  Award, 
  Settings, 
  HelpCircle,
  Menu,
  X
} from "lucide-react"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: "overview", label: "Vue d'ensemble", icon: LayoutDashboard },
    { id: "courses", label: "Mes Cours", icon: BookOpen },
    { id: "calendar", label: "Planning", icon: Calendar },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "certificates", label: "Certificats", icon: Award },
    { id: "settings", label: "Paramètres", icon: Settings },
    { id: "support", label: "Support", icon: HelpCircle }
  ]

  const handleSectionChange = (section: string) => {
    onSectionChange(section)
    setIsOpen(false) // Ferme le menu mobile après sélection
  }

  return (
    <>
      {/* Bouton mobile */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Overlay mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:block
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EL</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">E-Learning</h1>
                <p className="text-xs text-gray-500">Dashboard Étudiant</p>
              </div>
            </div>
          </div>

          {/* Profil utilisateur */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg" alt="Marie" />
                <AvatarFallback className="bg-blue-100 text-blue-600">M</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">Marie Dubois</p>
                <p className="text-xs text-gray-500 truncate">marie.dubois@email.com</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start h-11 ${
                        isActive 
                          ? "bg-blue-600 text-white hover:bg-blue-700" 
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                      onClick={() => handleSectionChange(item.id)}
                    >
                      <item.icon className={`h-4 w-4 mr-3 ${isActive ? "text-white" : "text-gray-500"}`} />
                      {item.label}
                      {item.id === "notifications" && (
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                          3
                        </span>
                      )}
                    </Button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
              <h3 className="text-sm font-medium text-gray-900 mb-1">Progressez plus vite !</h3>
              <p className="text-xs text-gray-600 mb-2">
                Rejoignez nos sessions live pour poser vos questions
              </p>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
                Voir les sessions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
