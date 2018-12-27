import React, { Component } from 'react'
import axios from 'axios'
import '../css/Server.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class Server extends Component {

    state = {
        resultats : [],
        resultat : [],
        arrive : "",
        depart : "",
        startDate: new Date(),
        startDate2: new Date()

      }

      handleChange3=(date)=> {
        this.setState({
          startDate: date
        });
      }

      handleChange4=(date)=> {
        this.setState({
          startDate2: date
        });
      }

      handleChange=(date)=> {
        this.setState({
          startDate: date
        });
      }

      handleChange = (e) => {
          e.preventDefault()
          this.setState({
              arrive : e.target.value
          })
          const ville = this.state.arrive
        axios.get(`https://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${ville}`)
        .then(res => {
          this.setState({
              resultats : res.data,
          })
        })
      }

      handleChange2 = (e) => {
        e.preventDefault()
        this.setState({
            depart : e.target.value
        })
        const depart = this.state.depart
      axios.get(`https://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${depart}`)
      .then(res => {
        this.setState({
            resultats : [],
            resultat : res.data
        })
      })
    }

    onChange3 = date => this.setState({ date })

      handleClick = name => () => {
        this.setState({
            arrive : name,
        })
      }

      handleClick2 = name => () => {
        this.setState({
            depart : name
        })
      }

      handleClick3 = (e) => {
        this.setState({
            success : !this.state.success
        })
      }
     
      handleSubmit = (e) => {
          e.preventDefault()
        this.setState({
            arrive : this.state.resultats[0].local_name
        })
      }

      handleSubmit2 = (e) => {
        e.preventDefault()
      this.setState({
          depart : this.state.resultat[0].local_name
      })
    }


  render() {
      console.log(this.state.resultats)
      if (this.state.resultat=== null)
      return "loading..."
    return (
      <div>
          <h1>TICTACTRIP</h1>
      <div className="container">
    <br/>
    <div className="bloc1">
	<div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
            <div className="col">
            <form onSubmit ={this.handleSubmit}>
            <h2>Quel est votre trajet ?</h2>
                <input 
                onChange={this.handleChange}
                name="" 
                value={this.state.arrive}
                className="form-control form-control-lg form-control-borderless" 
                type="search" 
                placeholder="Saisissez votre gare de départ..."/>
            </form>
            <form onSubmit ={this.handleSubmit2}>
            <input 
                onChange={this.handleChange2}
                name="" 
                value={this.state.depart}
                className="form-control form-control-lg form-control-borderless" 
                type="search" 
                placeholder="Saisissez votre gare d' arrivée..."/>
            </form>
            <h2>Date de réservation :</h2>
            <DatePicker
                className="calendrier"
                dateFormat="d MMMM, yyyy"
                selected={this.state.startDate}
                onChange={this.handleChange3}
            />
            <DatePicker
                className="calendrier"
                dateFormat="d MMMM, yyyy"
                selected={this.state.startDate2}
                onChange={this.handleChange4}
            />
            </div>
        </div>
    </div>
   
    </div>
        <div className="card">         
            {this.state.resultats.map((e,i) => <p onClick={this.handleClick(e.local_name)} key={i}>{e.local_name}</p>)} 
            {this.state.resultat.map((e,i) => <p onClick={this.handleClick2(e.local_name)} key={i}>{e.local_name}</p>)}  
        </div>
       
    </div>
    </div>
    )
  }
}

export default  Server;