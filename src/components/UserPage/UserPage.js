import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';



// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_SHOWS' });
  }

  handleClick = (item) => {
    console.log(item);
      this.props.history.push(`/specificshow/${item.id}`)
  }

  render() {
    let shows = this.props.storeInstance.showReducer;
    return (
      <div>
        <button type="submit">Add New Show</button>
        <h1 id="welcome">
          <p>I Was There</p>
        </h1>
        <p>Click a show to see more details</p>
    
    <div>
      {shows.map(item => (
       <p key={item.id}> 
          <p onClick={() => this.handleClick(item)}>Show: {item.band_name}</p> 
       <br/>
          <p onClick={() => this.handleClick(item)}>Date: {item.date}</p>
       <br/>
          <p onClick={() => this.handleClick(item)}>Venue: {item.venue}</p>
       <br/>
          <p onClick={() => this.handleClick(item)}>City, State: {item.city_state}</p>
       <br/> 
          <p onClick={() => this.handleClick(item)}>Band's Website: {item.band_website}</p>
          <img src="public/images/EdwardSharpe.jpg" alt=""/>
          
       
       </p>
      ))}
    </div>
        
        <LogOutButton className="log-in" />
      </div>
    )
  }

};
// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
// });
const mapStateToProps = storeInstance => ({
  storeInstance
})

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
