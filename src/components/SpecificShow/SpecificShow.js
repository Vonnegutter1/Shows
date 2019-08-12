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
                {shows.map(item =>

                    <Card key={item.id} className={classes.card} onClick={() => this.handleClick(item)}>
                        <CardMedia
                            className={classes.media}
                            image={item.url}
                        />
                        <CardContent className={classes.content}>
                            <Typography
                                className={"MuiTypography--heading"}
                                variant={"h6"}
                                gutterBottom
                            >
                                {item.band_name}
                            </Typography>
                            <Typography
                                className={"MuiTypography--subheading"}
                                variant={"caption"}
                            >
                                {item.date}
                            </Typography>
                            <br />
                            <Typography
                                className={"MuiTypography--subheading"}
                                variant={"caption"}
                            >
                                {item.venue}
                            </Typography>
                            <br />
                            <Typography
                                className={"MuiTypography--subheading"}
                                variant={"caption"}
                            >
                                {item.city_state}
                            </Typography>
                            <br />
                            <Typography
                                className={"MuiTypography--subheading"}
                                variant={"caption"}
                            >
                                {item.band_website}
                            </Typography>


                        </CardContent>

                    </Card>
                )}
            </div>
        )
    }

};

const mapStateToProps = storeInstance => ({
    storeInstance
})

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SpecificShow);
