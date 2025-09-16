import { useRouter } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const Home = () => {
  const router = useRouter()

  return (
    <div className="p-3 px-5 mb-2 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl text-gray-900 font-bold mb-4">Welcome Home</h1>
        <p className="text-gray-700">This is the home page with a clean design.</p>
      </div>
    </div>
  )
}

export default Home
