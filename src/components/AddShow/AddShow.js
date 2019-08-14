import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddShow.css';



class AddShow extends Component {
    state = {
        newShow: {
            band_name: '',
            date: '',
            venue: '',
            city_state: '',
            memories: '',
            people_went_with: '',
            band_website: '',
            images: '',
            images: '',
            images: '',
        }
    }

    handleChange = (propertyName, event) => {
        console.log('event happended')
        this.setState({
            newShow: {
                ...this.state.newShow,
                [propertyName]: event.target.value,
            }
        });
    }

    addNewShow = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_SHOW', payload: this.state.newShow })
        this.setState({
            newShow: {
                id: this.state.newShow.id + 1,
                
            }
        });
    }

    // componentDidMount() {
    //     this.props.dispatch({ type: '' });
    // }

    // handleClick = (item) => {
    //     console.log(item);
    //     this.props.history.push(`/specificshow/${item.id}`)
    // }

    render() {
       
        return (
            <div class="form">
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>
                    Add New Show
                </h3>
                <form onSubmit={this.handleSubmit}>
                    
                    Bands: <input id="textbox" type="text" placeholder="Bands" 
                    value={this.state.newShow.name}
                        onChange={(event) => this.handleChange('band_name', event)}></input>
                    <br/>

                    Date of Show: <input id="textbox" type="text" placeholder="Date of Show" 
                    value={this.state.newShow.date}
                        onChange={(event) => this.handleChange('date', event)}></input>
                    <br/>

                    Venue: <input id="textbox" type="text" placeholder="Venue" 
                    value={this.state.newShow.venue}
                        onChange={(event) => this.handleChange('venue', event)}></input>
                    <br/>

                    City, State: <input id="textbox"type="text" placeholder="City, State" 
                    value={this.state.newShow.city_state}
                        onChange={(event) => this.handleChange('city_state', event)}></input><br />

                    Peoplxe Went With: <input id="textbox" type="text" placeholder="People Went With" 
                        value={this.state.newShow.people_went_with}
                        onChange={(event) => this.handleChange('people_went_with', event)}></input>
                        <br />

                    Memories: <input id="textbox" type="text" placeholder="Memories" 
                    value={this.state.newShow.memories}
                        onChange={(event) => this.handleChange('memories', event)}></input><br/>

                    Band's Website: <input id="textbox" type="text" placeholder="Band's Website" 
                    value={this.state.newShow.band_website}
                        onChange={(event) => this.handleChange('band_website', event)}></input><br/>

                    Upload Image <input id="textbox" type="text" placeholder="Image 1" 
                    value={this.state.newShow.url}
                        onChange={(event) => this.handleChange('url', event)}
                    ></input><br/>

                    Upload Image <input id="textbox" type="text" placeholder="Image 2"
                        value={this.state.newShow.url}
                        onChange={(event) => this.handleChange('url', event)}></input><br />

                    Upload Image <input id="textbox" type="text" placeholder="Image 3" 
                    value={this.state.newShow.url}
                        onChange={(event) => this.handleChange('url', event)}></input><br />
                

                </form>

                <button type="submit" onClick>Save</button>
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

const mapStateToProps = storeInstance => ({
    storeInstance
})

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddShow);
