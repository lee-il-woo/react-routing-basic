import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    return(
        <>
        <div>home page</div>
        <div onClick={()=>navigate('/bakery')}>go Bakery page</div>
        </>
    )
}

export default Home