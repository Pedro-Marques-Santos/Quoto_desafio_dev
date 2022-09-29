import React, { useState } from 'react';
import { Header } from './components/Header';
import { Phrases } from './components/Phrases';
import { PhrasesProvider } from './context/PhrasesContext';
import { GlobalStyle } from "./styles/goblal";

export function App() {

  const [ stateName, setStateName ] = useState(false)

  function handleTrueStateName() {
    setStateName(true)
  }

  function handleFalseStateName() {
    setStateName(false)
  }

  return (
    <PhrasesProvider>
      <Header stateName={stateName} handleFalseStateName={handleFalseStateName}/>
      <Phrases handleTrueStateName={handleTrueStateName} stateName={stateName}/>
      <GlobalStyle />
    </PhrasesProvider>
  );
}
