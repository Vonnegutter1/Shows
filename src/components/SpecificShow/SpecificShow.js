import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';


const styles = muiBaseTheme => ({
    card: {
        maxWidth: 700,
        margin: muiBaseTheme.spacing.unit,
        transition: "0.3s",

        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%"
    },
    content: {
        textAlign: "center",
        padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
        margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subHeading: {
        lineHeight: 1.8
    },

});

class SpecificShow extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_SHOW_DETAILS', payload: {shows_id: this.props.match.params.id }});
    }
    render() {
        
        const { classes } = this.props;
        let shows = this.props.storeInstance.fetchShowReducer;
        // const showId = this.props.match.params.id;

        return (
            
            <div>

                {shows.map(item => (
                    <div key={item.id}><img src={item.url}/></div>
                ))}

                {shows.map(item => (
                <Card key={item.id} className={classes.card}>
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
                        <br />
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            {item.people_went_with}
                        </Typography>
                        <br />
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            {item.memories}
                        </Typography>
                    </CardContent>

                </Card>
                ))}
            </div>
        )
    }

};

const mapStateToProps = storeInstance => ({
    storeInstance
})

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(SpecificShow));