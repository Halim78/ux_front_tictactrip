import React, { Component } from 'react'
import axios from 'axios'
 



class Server extends Component {

    state = {
        resultat : []
      }
    
      componentDidMount(){ 
        axios.get('https://www-uat.tictactrip.eu/api/cities/autocomplete/?q=P')
        .then(res => {
          console.log(res)
        })
      }


  render() {
      if (this.state.resultat=== null)
      return "loading..."
    return (
      <div>
        <h1>TICTACTREP</h1>
          <h2>Search bar</h2>
          <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
      <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..."/>
          <a href="fichier" className="search_icon"><i className="fas fa-search"></i></a>
      </div>
      </div>
          </div>
      </div>
    )
  }
}

export default  Server;
