import React, { Component } from 'react'
import axios from 'axios'
import './Server.css'



class Server extends Component {

    state = {
        resultat : [],
        item : ""
      }
    
      componentDidMount = (e) => { 
        const ville = this.state.item
        axios.get(`https://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${ville}`)
        .then(res => {
          this.setState({
              resultat : res.data
          })
        })
      }

      handleChange = (e) => {
        const todoSearch = 
        this.state.resultat.filter(f => 
        (f.local_name.toLowerCase().indexOf(this.state.item) !== -1) || (f.local_name.toUpperCase().indexOf(this.state.item) !== -1));
        this.setState({
            resultat : todoSearch,
            item : e.target.value
        })
        this.forceUpdate()
      }

      handleSubmit = (e) => {
          e.preventDefault()
        this.setState({
            item : this.state.resultat[0].local_name
        })
      }

      handleClick = name => () => {
        this.setState({
            item : name
        })
      }
     

  render() {
      console.log(this.state.resultat)
      if (this.state.resultat=== null)
      return "loading..."
      const todoSearch = 
        this.state.resultat.filter(f => 
        (f.local_name.toLowerCase().indexOf(this.state.item) !== -1) || (f.local_name.toUpperCase().indexOf(this.state.item) !== -1));
    return (
      <div>
        <h1>TICTACTREP</h1>
          <h2>Search bar</h2>
      <div class="container">
    <br/>
	<div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
            <div className="col">
            <form onSubmit ={this.handleSubmit}>
                <input 
                onChange={this.handleChange}
                name="" 
                value={this.state.item}
                className="form-control form-control-lg form-control-borderless" 
                type="search" 
                placeholder="Search topics or keywords..."/>
            </form>
            </div>
        </div>
    </div>
    </div>
        <div className="card">
            {todoSearch.map((e,i) => <p onClick={this.handleClick(e.local_name)} key={i}>{e.local_name}</p>)}
        </div>
    </div>
    )
  }
}

export default  Server;
