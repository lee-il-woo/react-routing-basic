import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>home page</div>
      <button onClick={() => navigate('/bakery')}>go Bakery page</button>
    </>
  );
};

export default Home;
