import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { useState, useEffect } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [data, setData] = useState('');

  useEffect(function sayHello() {
    console.log(`hello ${fullName}`);
    return () => console.log('cleanup');
  }, []);

  return (
    <>
      <Header fullName={fullName} />
      <Main fullName={fullName} setFullName={setFullName} />
      <Footer fullName={fullName} />
    </>
  );
}

export default App;
