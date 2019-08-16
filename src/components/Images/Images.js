import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { withRouter } from 'react-router-dom';


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

class Images extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_SHOW_IMAGES', payload: this.props.match.params.id });
       
        console.log('showsid is', this.props.storeInstance.fetchShowReducer.id);
        
    }
    render() {

        const { classes } = this.props;
        let shows = this.props.storeInstance.images;
        // const showId = this.props.match.params.id;
        
        return (

            <div>
                {shows.map(item => (
                    <Card key={item.id} className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={item.url} />
                    </Card>
                ))}
            

            </div>
        )
    }

};

const mapStateToProps = storeInstance => ({
    storeInstance
})

export default withStyles(styles)(withRouter(connect(mapStateToProps)(Images)));