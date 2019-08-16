import React, { Component } from 'react';
import { connect } from 'react-redux';


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
            image1: '',
            image2: '', 
            image3: '',
                
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
        let images = []
        images.push(this.state.newShow.image1, this.state.newShow.image2, this.state.newShow.image3);
        let objectToSend = {
            ...this.state.newShow, images
        }
        
        this.props.dispatch({ type: 'ADD_SHOW', payload: objectToSend })
        this.setState({
            newShow: {
                ...this.state.newShow,
                id: this.state.newShow.id + 1,
                
            }
            
        });
        this.props.dispatch({ type: 'FETCH_SHOWS' });
        this.props.history.push(`/home`);
    }

    render() {
        console.log(this.state.newShow.images)
        return (
            <div class="form">
                
                <h3>
                    Add New Show
                </h3>
                <form onSubmit={this.addNewShow}>
                     All fields with an * are required to complete the new show.
                     <br/>
                     <br/>
                   
                    * Bands: <input id="textbox" type="text" placeholder="Bands" 
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

                    People Went With: <input id="textbox" type="text" placeholder="People Went With" 
                        value={this.state.newShow.people_went_with}
                        onChange={(event) => this.handleChange('people_went_with', event)}></input>
                        <br />

                    Memories: <input id="textbox" type="text" placeholder="Memories" 
                    value={this.state.newShow.memories}
                        onChange={(event) => this.handleChange('memories', event)}></input><br/>

                    Band's Website: <input id="textbox" type="text" placeholder="Band's Website" 
                    value={this.state.newShow.band_website}
                        onChange={(event) => this.handleChange('band_website', event)}></input><br/>
                    * Upload Image 1 <input id="textbox" type="text" placeholder="Image 1" 
                    value={this.state.newShow.image1} 
                        onChange={(event) => this.handleChange('image1', event)} 
                    ></input><br/>

                    Upload Image 2 <input id="textbox" type="text" placeholder="Image 2"
                        value={this.state.newShow.image2}
                        onChange={(event) => this.handleChange('image2', event)}></input><br />

                    Upload Image 3 <input id="textbox" type="text" placeholder="Image 3" 
                    value={this.state.newShow.image3}
                        onChange={(event) => this.handleChange('image3', event)}></input><br />
                        <br/>
                        <br/>

                   
                    <button type="submit">Save</button>

                </form>

            </div>
        )
    }
};

const mapStateToProps = storeInstance => ({
    storeInstance
})

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddShow);
