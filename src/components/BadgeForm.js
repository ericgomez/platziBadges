import React from 'react'

class BadgeForm extends React.Component {
  //Metodos Para los eventos onChange y onClick
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  }

  handleClick = e => {
    e.preventDefault();
    console.log('Button was clicked');
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
          </div>

        </form>
        <button onClick={this.handleClick} className="btn btn-primary">Save</button>
      </div>
    )
  }
}

export default BadgeForm