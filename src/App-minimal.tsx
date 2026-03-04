import React from 'react';

const App = () => {
  return React.createElement('div', {
    style: { padding: '20px', fontFamily: 'Arial, sans-serif' }
  }, [
    React.createElement('h1', null, 'Resolenergies - Test Minimal'),
    React.createElement('p', null, 'Si vous voyez ce texte, React fonctionne !'),
    React.createElement('div', {
      style: { background: '#f0f0f0', padding: '10px', margin: '10px 0' }
    }, [
      React.createElement('h2', null, 'Test de contenu'),
      React.createElement('p', null, 'Ceci est un test pour vérifier que React s\'affiche correctement.')
    ])
  ]);
};

export default App;
