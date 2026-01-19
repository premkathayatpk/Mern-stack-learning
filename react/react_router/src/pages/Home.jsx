import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate=useNavigate()

  const user={
    name:"Ram",
    age:22,
  }
  return (
    <div>
      Home

      <div>
        <button
        onClick={()=>{
          navigate("/product",{state:user})
        }}
        >
          Go to Product
        </button>
      </div>
    </div>
  )
}

export default Home
