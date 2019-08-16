import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditShow extends Component {

    state = {
        editShow: {
            band_name: '',
            date: '',
            venue: '',
            city_state: '',
            memories: '',
            people_went_with: '',
            band_website: '',
            showId: this.props.storeInstance.fetchShowReducer.id,
        }
    }

    handleChange = (propertyName, event) => {
        console.log('event happened', this.state)
        this.setState({
            editShow: {
                ...this.state.editShow,
                [propertyName]: event.target.value,
            }
        });
    }

    updateShow = () => {
        console.log('shhhhhh');
        this.props.dispatch({ type: 'EDIT_SHOW', payload: this.state})
    }

    editShow = event => {
        event.preventDefault();
        // this.props.dispatch({ type: 'EDIT_SHOW', payload: this.state })
        console.log(this.state)

        this.props.dispatch({ type: 'FETCH_SHOWS' });
        this.props.history.push(`/home`);
    }

    render() {
        console.log(this.state.editShow.images)
        return (
            <div class="form">

                <h3>
                    Edit Show
                </h3>
                <form onSubmit={this.editShow}>

                     <br />
                    <br />

                    Bands: <input id="textbox" type="text" placeholder="Bands"
                        value={this.state.editShow.name}
                        onChange={(event) => this.handleChange('band_name', event)}></input>
                    <br />

                    Date of Show: <input id="textbox" type="text" placeholder="Date of Show"
                        value={this.state.editShow.date}
                        onChange={(event) => this.handleChange('date', event)}></input>
                    <br />

                    Venue: <input id="textbox" type="text" placeholder="Venue"
                        value={this.state.editShow.venue}
                        onChange={(event) => this.handleChange('venue', event)}></input>
                    <br />

                    City, State: <input id="textbox" type="text" placeholder="City, State"
                        value={this.state.editShow.city_state}
                        onChange={(event) => this.handleChange('city_state', event)}></input><br />

                    People Went With: <input id="textbox" type="text" placeholder="People Went With"
                        value={this.state.editShow.people_went_with}
                        onChange={(event) => this.handleChange('people_went_with', event)}></input>
                    <br />

                    Memories: <input id="textbox" type="text" placeholder="Memories"
                        value={this.state.editShow.memories}
                        onChange={(event) => this.handleChange('memories', event)}></input><br />

                    Band's Website: <input id="textbox" type="text" placeholder="Band's Website"
                        value={this.state.editShow.band_website}
                        onChange={(event) => this.handleChange('band_website', event)}></input><br />
                    <br />
                    <br />
                    <br />

                    <button onClick = {() => this.updateShow()} type="submit">Save</button>

                </form>

            </div>
        )
    }
};

const mapStateToProps = storeInstance => ({
    storeInstance
})

export default connect(mapStateToProps)(EditShow);
