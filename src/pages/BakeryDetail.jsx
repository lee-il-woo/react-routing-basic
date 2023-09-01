import { useParams, useNavigate } from 'react-router-dom';

const BakeryDetail = () => {
  const navigate = useNavigate();
  const bakeryId = useParams();
  return (
    <>
      <div>bakery detail page</div>
      {/* bakeryId.id의 id는 App.jsx에서 :id 로 정했기 때문에 id를 사용한다
       *
       * 만약 <Route path="/bakery/:bakeryId" element={<BakeryDetail />} /> 였다면
       * 밑의 코드를 <div>{`bakery id = ${bakeryId.bakeryId}`}</div> 로 하면 된다
       *
       * 혹은 위의 변수를 디스트럭처링을 사용하여 const { id }  = useParams();
       * 밑의 코드를 <div>{`bakery id = ${id}`}</div> 로 하면 된다
       *
       * 만약 <Route path="/bakery/:bakeryId" element={<BakeryDetail />} /> 였다면
       * 디스트럭처링을 사용하여 const { bakeryId }  = useParams();
       * 밑의 코드를 <div>{`bakery id = ${bakeryId}`}</div> 로 하면 된다
       **/}
      <div>{`bakery id = ${bakeryId.id}`}</div>
      <button onClick={() => navigate(-1)}>back</button>
    </>
  );
};

export default BakeryDetail;
