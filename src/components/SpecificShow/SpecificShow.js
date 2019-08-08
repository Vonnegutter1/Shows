import React, { Component } from 'react';
import { connect } from 'react-redux';

class SpecificShow extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_SHOW_DETAILS', payload: this.props.match.params.id });
    }
    render() {
        
        return (
            <div>
              {JSON.stringify(this.props.storeInstance.fetchShowReducer)} 
                    
            </div>
        )
    }

};

const mapStateToProps = storeInstance => ({
    storeInstance
})

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SpecificShow);
