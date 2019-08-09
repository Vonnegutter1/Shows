import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';


class AddShow extends Component {

    componentDidMount() {
        this.props.dispatch({ type: '???' });
    }

    // handleClick = (item) => {
    //     console.log(item);
    //     this.props.history.push(`/specificshow/${item.id}`)
    // }

    render() {
        let shows = this.props.storeInstance.showReducer;
        return (
            <div>
                <button type="submit">Save</button>
                <h1 id="welcome">
                    <p>Add New Show</p>
                </h1>

                <form>
                    
                </form>
               
                {/* <div>
                    {shows.map(item => (
                        <p key={item.id}>
                            <p onClick={() => this.handleClick(item)}>Show: {item.band_name}</p>
                            <br />

                        </p>
                    ))}
                </div> */}



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
export default connect(mapStateToProps)(AddShow);
