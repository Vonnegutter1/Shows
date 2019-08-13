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
            images: '',
            images: '',
        }
    }

    // componentDidMount() {
    //     this.props.dispatch({ type: '' });
    // }

    // handleClick = (item) => {
    //     console.log(item);
    //     this.props.history.push(`/specificshow/${item.id}`)
    // }

    render() {
        // let shows = this.props.storeInstance.showReducer;
        return (
            <div>
                
                <h3>
                    Add New Show
                </h3>
                <form onSubmit={this.handleSubmit}>
                    
                    Bands: <input type="text" placeholder="Bands"></input>
                    <br/>
                    Date of Show: <input type="text" placeholder="Date of Show"></input><br/>
                    Venue: <input type="text" placeholder="Venue"></input><br />
                    City, State: <input type="text" placeholder="City, State"></input><br />
                    People Went With: <input type="text" placeholder="People Went With"></input><br />
                    Memories: <input type="text" placeholder="Memories"></input><br/>
                    Band's Website: <input type="text" placeholder="Band's Website"></input><br/>

                    Upload Image <input type="text" placeholder="Image 1"></input><br/>
                    Upload Image <input type="text" placeholder="Image 2"></input><br />
                    Upload Image <input type="text" placeholder="Image 3"></input><br />
                

                </form>

                <button type="submit">Save</button>
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
