import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import './UserPage.css';
import Grid from '@material-ui/core/Grid';


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
    paddingTop: "56.25%",
    
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

class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_SHOWS' });
  }

  handleClick = (item) => {
    console.log(item);
    this.props.dispatch({ type: 'FETCH_SHOW_DETAILS', payload: item });
    
    this.props.history.push(`/specificshow/${item.id}`)
    console.log(this.props.storeInstance.showReducer);
  }

  handleAddClick = ()
  render() {
    
    const { classes } = this.props;

    let shows = this.props.storeInstance.showReducer;
    
    return (
      <div>
        <button type="submit" onClick={() => this.handleAddClick(item)}>Add New Show</button>
        <h1 id="welcome">
          <p><center>I Was There</center></p>
        </h1>
        <p><center>Click on a show to see more details!</center></p>

  <Grid className="center">
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
                <br/>
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  {item.venue}
                </Typography>
                <br/>
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  {item.city_state}
                </Typography>
                <br/>
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  {item.band_website}
                </Typography>
               
            
              </CardContent>

            </Card>
          )}
        </Grid>
        
        <LogOutButton className="log-in" />
      
      </div>
    )
  }
};

const mapStateToProps = storeInstance => ({
  storeInstance
})
// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(UserPage));
