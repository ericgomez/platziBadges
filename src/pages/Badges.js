import React from 'react'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom'

import api from '../api'

class Badges extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined,
  }; 


  /*Este último método de la fase de montado se ejecuta una vez el componente se renderizó en el navegador y nos permite interactuar con el DOM o las otras APIs del navegador (geolocation, navigator, notificaciones, etc.).*/
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list()
      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  

  /*En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente*/
  render() {
    if (this.state.loading === true) {
      return 'Loading...'
    }

    if (this.state.error) {
      return `Error: ${this.state.error.message}`
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badges
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
            
              <BadgesList badges={this.state.data} />
              
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Badges