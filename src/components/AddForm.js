import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf, setError } from '../actions'

const AddForm = (props) => {

  const [state, setState] = useState({
    name:"",
    position:"",
    nickname:"",
    description:""
  });
  
  console.log('err',props)
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (state.name === "" || state.position === "" || state.nickname === "") {
      props.setError("Name, position and nickname fields are required.");
    } else {
      props.addSmurf(state);
      props.setError("");
      setState({ name: "", position: "", nickname: "", description: "" })
    }
  }

  return(
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label><br/>
          <input onChange={handleChange} value={state.name} name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label><br/>
          <input onChange={handleChange} value={state.position} name="position" id="position" />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label><br/>
          <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label><br/>
          <textarea onChange={handleChange} value={state.description} name="description" id="description" />
        </div>
        {props.errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.errorMessage}</div>
        }
        <button>Submit Smurf</button>
      </form>
  </section>);
}

const mapStateToProps = (state) =>{
  return{
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps, { addSmurf, setError })(AddForm);
