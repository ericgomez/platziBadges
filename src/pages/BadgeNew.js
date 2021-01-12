import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar'

class BadgeNew extends React.Component {
  
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } }

  // FORMA NUMERO 1
  // handleChange = e => {
  //   const nextForm = this.state.form
  //   nextForm[e.target.name] = e.target.value
  //   this.setState({
  //     form: nextForm,
  //   })
  // }

  // FORMA NUMERO 2
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} email={this.state.form.email} avatarUrl="http://www.gravatar.com/avatar/?d=identicon" />
            </div>
            <div className="col-6">
              <BadgeForm onChange= {this.handleChange} formValues= {this.state.form} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew