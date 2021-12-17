import React, { useState } from 'react';

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

export default function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    alert('data');
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
    </div>
  );
}
