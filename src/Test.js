import React, { Component } from 'react'
import axios from 'axios'
import './Server.css'



class Test extends Component {

    state = {
        resultats : [],
        items : ""
      }

      handleChange = (e) => {
          e.preventDefault()
          this.setState({
              items : e.target.value
          })
          const ville = this.state.items
        axios.get(`https://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${ville}`)
        .then(res => {
          this.setState({
              resultats : res.data
          })
        })

        axios.get(`http://www-uat.tictactrip.eu/api/cities/popular/5`)
        .then(res => {
          this.setState({
              resultats : res.data
          })
        })
      }

      handleClick = name => () => {
        this.setState({
            items : name
        })
      }
     
      handleSubmit = (e) => {
          e.preventDefault()
        this.setState({
            items : this.state.resultats[0].local_name
        })
      }

  render() {
      console.log(this.state.resultats)
      if (this.state.resultat=== null)
      return "loading..."
    return (
      <div>
        <h1>TICTACTREP</h1>
          <h2>Search bar</h2>
      <div className="container">
    <br/>
	<div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
            <div className="col">
            <form onSubmit ={this.handleSubmit}>
                <input 
                onChange={this.handleChange}
                name="" 
                value={this.state.items}
                className="form-control form-control-lg form-control-borderless" 
                type="search" 
                placeholder="Search topics or keywords..."/>
            </form>
            </div>
        </div>
    </div>
    </div>
        <div className="card">
            {this.state.resultats.map((e,i) => <p onClick={this.handleClick(e.local_name)} key={i}>{e.local_name}</p>)}
        </div>
    </div>
    )
  }
}

export default  Test;
