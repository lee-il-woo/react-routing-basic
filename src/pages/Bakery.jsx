import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Bakery = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [bakeryList, _] = useState([
    { id: 1, name: 'PARIS BAGUETTE' },
    { id: 2, name: 'Tous les jours' },
    { id: 3, name: 'Sungsimdang' },
  ]);
  const handleBakeryClick = (id) => {
    navigate(`/bakery/${id}`);
  };
  return (
    <>
      <div>bakery page</div>
      {bakeryList.map((bakery, idx) => {
        return (
          <button
            key={idx}
            onClick={() => handleBakeryClick(bakery.id)}
          >{`${bakery.name}`}</button>
        );
      })}
    </>
  );
};

export default Bakery;
