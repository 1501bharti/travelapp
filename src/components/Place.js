import React from 'react';
import axios from 'axios';
import { Grid, Row , Col} from 'react-flexbox-grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import stylefile from './stylefile';
import '../App.css';

  
class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user_venue_featured_photo:'',
      user_name:'',
      user_likes:'',
      user_loves:'',
      user_try:'',
      user_hates:'',
      user_list:''
    }
  }
  
  componentDidMount() {
    axios.get('http://api.grabbd.com/api/v1/customlist',
        {
            headers: { "Postman-Token": "grabbd-react-dev"}
        })
        .then((response) => {
            this.setState({
                photo: response.data.USER.user_venue_featured_photo,
                user_name: response.data.USER.user_name,
                user_loves:response.data.USER.user_loves,
                user_likes:response.data.USER.user_likes,
                user_try:response.data.USER.user_try,
                user_hates:response.data.USER.user_hates,
                user_list:response.data.USER.user_list,
            })
        })
        .catch((error) => {
            alert(error)
        })
}


  render() {
    const { classes } = this.props;
    return (
      <div  className="places">
                 <Grid >
                      <Row>
                        <Col>
                          <img className="imgplace" alt="img"
                               src="https://cache.marriott.com/marriottassets/destinations/hero/dubai-destination.jpg?interpolation=progressive-bilinear"/>
                        </Col>
                      </Row>

                      <Row>
                          <Col sm={12} md={12} lg={12}>
                              <h4 className="Tagline"> {this.state.user_name}'s {this.state.user_list} Trip</h4>
                          </Col>
                      </Row>

                      <Row >
                          <Col sm={12} md={12} lg={12}> 
                            <ListItem>
                              <FavoriteIcon className={classes.favicon}/>
                              <ListItemText primary= {this.state.user_loves} />
                               <p className={classes.icon_details}>Loves</p>
                            </ListItem>

                            <ListItem>
                              <ThumbUpIcon className={classes.likeicon}/>
                              <ListItemText primary={this.state.user_likes} /> 
                                <p className={classes.icon_details}>Likes</p>
                            </ListItem>

                            <ListItem>
                              <BookmarkIcon className={classes.bookmarkicon}/>
                              <ListItemText primary= {this.state.user_try} />
                                <p className={classes.icon_detail}> Want to try</p>
                            </ListItem>

                            <ListItem>
                              <ThumbDownIcon className={classes.dislikeicon}/>
                              <ListItemText primary={this.state.user_hates} />
                               <p className={classes.icon_details}>Dislikes</p>
                            </ListItem>

                          </Col>
                      </Row>
                  </Grid>
      </div>
    );
  }
}

export default withStyles(stylefile) (Place);