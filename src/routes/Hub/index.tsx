import { useEffect } from 'react';

export default function Hub() {
  useEffect(() => {
    document.title = "Hub de Colaboração";
  }, []);
  
  return (
    <main className="">

    </main>
  )
}