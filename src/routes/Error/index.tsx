import { useEffect } from 'react';

export default function Error() {
  useEffect(() => {
    document.title = "Error";
  }, []);
  
  return (
    <main className="">

    </main>
  )
}