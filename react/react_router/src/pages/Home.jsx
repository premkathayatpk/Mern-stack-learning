import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate=useNavigate()
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
