import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <main className="">

    </main>
  )
}