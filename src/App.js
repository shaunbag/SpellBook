import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SpellList from './Utils/SpellList.json';  // imported json file

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
            spells: [SpellList]   // state set to json file
    }
   
  }
  
  render(){
  return (
    <div className="App">      
      <SearchBar search={this.state.spells}/> {/*json sent as props to searchbar */}
    </div>
  );
}}

export default App;
