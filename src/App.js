import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';

function App() {

  //busqueda
  const [busqueda, guardarBusqueda] = useState('');

  useEffect( () => {
    
    const consultarAPI = async () =>{
      if(busqueda === '') return;

      const imagenesPorPagina = 30;
      const Key = '18249930-3ba2076b0c7ac932827465943';
      const url = `https://pixabay.com/api/?key=${Key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado.hits);
    }
    consultarAPI();

  }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>

        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
