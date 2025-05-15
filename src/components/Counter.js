import React, { useState, useEffect } from 'react';

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end); // Garante que o valor final seja exato
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start)); // Arredonda para cima
      }
    }, 20); // Atualiza a cada 10ms

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, [end, duration]);

  return <span>{count}</span>;
}

export default Counter;