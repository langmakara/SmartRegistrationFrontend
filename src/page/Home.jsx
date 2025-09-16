import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="p-3 px-5 mb-2  text-white">
      <nav className="bg-light shadow p-4 mb-3 rounded-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-dark text-xl font-bold">Navbar</span>
          <div className="space-x-4">
            <button className="text-dark hover:text-blue-400 bg-light px-3 py-2 rounded" onClick={() => navigate("/")}>
              Home
            </button>
            <button className="text-dark hover:text-blue-400 bg-light px-3 py-2 rounded" onClick={() => navigate("/examresul")}>
              Exam Result
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl text-dark font-bold mb-4">Welcome Home</h1>
        <p className="text-gray-300 text-dark">This is the home page with a black background.</p>
      </div>
    </div>
  )
}

export default Home
