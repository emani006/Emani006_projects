import React from 'react';
import Super from './components/Super';
import superheros from './components/Superlist';


class App extends React.Component {
  render (){
    return (
      <div className="App">
        {
          superheros.map((hero) =>
            <Super key={hero.name} image={hero.image} name={hero.name} rating={hero.rating} description={hero.description} features={hero.features}></Super>)
        }
      </div>
    );
  }
}

export default App;
