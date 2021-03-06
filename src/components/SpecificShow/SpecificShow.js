import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Images from '../Images/Images'
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';


const styles = muiBaseTheme => ({
    card: {
        width: 600,
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

    handleEdit = () => {
        this.props.history.push(`/edit`);
    }

    handleDelete =() => { 
        console.log('Deleted Button Click', this.props.storeInstance.fetchShowReducer.id)
        Axios({
            method: 'DELETE',
            url: `/shows/${this.props.storeInstance.fetchShowReducer.shows_id}`
        }).then ((response) => {
            console.log('Deleted', response)
        }).catch((error) => {
            console.log(error);
            alert('Unable to delete item');
        })
        
        this.props.history.push(`/home`);
        this.props.dispatch({ type: 'FETCH_SHOWS'});
    }

    render() {
        
        const { classes } = this.props;
        let shows = this.props.storeInstance.fetchShowReducer;
        console.log(shows);
        console.log(this.props.storeInstance.fetchShowReducer)
        return (    
            <>
            <div>
               <Grid container spacing={24}>
                    
                   <Grid item xs={3}>
                        </Grid>
                <Card className={classes.card}>
                    {/* <CardMedia
                        className={classes.media}
                        image={item.url}
                    /> */}
                    <CardContent className={classes.content}>
                        <Typography
                            className={"MuiTypography--heading"}
                            variant={"h6"}
                            gutterBottom
                        >
                            Bands: {shows.band_name}
                        </Typography>
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            Date: {shows.date}
                        </Typography>
                        <br />
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            Venue: {shows.venue}
                        </Typography>
                        <br />
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            City, State: {shows.city_state}
                        </Typography>
                        {/* <br />
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            Band's Website: {shows.band_website}
                        </Typography> */}
                        <br />
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            People I Went With: {shows.people_went_with}
                        </Typography>
                        <br />
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            Memories: {shows.memories}
                        </Typography>
                    </CardContent>
                    <Images shows_id={this.props.storeInstance.fetchShowReducer}/> 
                </Card>

                    </Grid>
                    
                    <button className="button1" type="submit" onClick={this.handleEdit}>Edit</button>
                    <button className="button1" type="submit" onClick={this.handleDelete}>Delete</button>
            </div>  
          
           </>
        )   
                        
                }

};

const mapStateToProps = storeInstance => ({
    storeInstance
})

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(SpecificShow));