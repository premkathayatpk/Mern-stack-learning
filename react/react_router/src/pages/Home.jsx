import { useNavigate } from "react-router-dom"

const navigate=useNavigate()
const Home = () => {
  return (
    <div>
      Home

      <div>
        <button
        onClick={()=>{
          navigate("/product")
        }}
        >
          Go to Product
        </button>
      </div>
    </div>
  )
}

export default Home
