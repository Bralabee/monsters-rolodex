import {Component} from 'react';

import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {return { monsters: users };
  },
   () => {
     console.log(this.state);
  }
        )
      );
  }



  render() {
    return (
      <div className="App">
        <input 
        className= 'search-box' 
        type="text" 
        placeholder="Search" 
        onChange= {(event) => {
          console.log(event.target.value);
          const filteredMonsters = this.state.monsters.filter((monster) => {
            
            return monster.name.includes(event.target.value);
          });
          this.setState(()=>{
            return { monsters: filteredMonsters };
          })

        
        }}
        />
        {
          this.state.monsters.map((monster) => {
            return (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
