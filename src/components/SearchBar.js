import React from 'react';
import Spell from './Spell';

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            keyword: '',
            name: '',
            description: '',
            components: '',
            level: ''
        }

    this.handleKeyword = this.handleKeyword.bind(this);
    this.search = this.search.bind(this)
    }

    // capitalise function

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }


    
    // search function -- iterate json for current searchword (keyword)

    search(event){
        event.preventDefault()
        const keyword = this.state.keyword;
        //const capitalKeyword = // insert capitalise function -- target EACH first letter -> split tsring at ' '
        for (let i = 0 ; this.props.search[0].spells.length; i++){
            if (this.props.search[0].spells[i].name === keyword){
                this.setState({
                    name: this.props.search[0].spells[i].name,
                    description: 'Description :   ' + this.props.search[0].spells[i].description,
                    components: 'Spell Components :   ' + this.props.search[0].spells[i].components,
                    level: 'Spell Level :   ' + this.props.search[0].spells[i].spell_level
                })
                break;
            }
        }
    };

  
    // target user input and set as current keyword to input into search()

    handleKeyword(event){
        
        this.setState({ keyword: event.target.value })
    }

    


    render(){
        return (
            <div className="container">
                
                <form className="form">
                <h1>The Pathfinder SpellBook</h1>
                    <label>Enter Your Spell Name Here:</label>
                    <input type="text" placeholder="Enter Spell Name" onChange={this.handleKeyword}></input>
                    <button onClick={this.search}>Search</button>
                </form>
                <Spell name={this.state.name} description={this.state.description} components={this.state.components} level={this.state.level} />
    
            </div>
        )
    }
}

export default SearchBar;