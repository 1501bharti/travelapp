import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import stylefile from './stylefile';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import '../App.css';

class TitleBar extends Component {
    constructor(props) { 
        super(props); 
        this.state ={
            user_name:'',
            user_profile_pic:'',
        }
      }


    componentDidMount() {
        axios.get('http://api.grabbd.com/api/v1/customlist',
            {
                headers: { "Postman-Token": "grabbd-react-dev"}
            })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    user_name: response.data.USER.user_name,
                    user_profile_pic: response.data.USER.user_profile_pic,
                })
            })
            .catch((error) => {
                alert(error)
            })
    }

  render() {
    const { classes } = this.props;
    return (
        <div>
           <AppBar className={classes.AppBar}>
                <Toolbar>
                    <Grid>
                        <Row>
                            <Col>
                                <img height="50" width="43" alt="logo"
                                    src="http://d6ejh6ps4xec6.cloudfront.net/150x150/user/w5PUZ5qaLk99t1BLyK0orPtKm7PydjQ4QxZAkBwAgeWVh4GAjj7gB1oWwc3nEar7wpPNIZHYBBjUYoCJUL1owgAEh8v5Q3PDUqgTDnD0kUheASf1FP5tA3uFq4rS6aMC.jpeg" 
                                    className="logo"
                                />
                            </Col>

                            <Col>
                                <Avatar alt="Remy Sharp"                                
                                src={`http://d6ejh6ps4xec6.cloudfront.net/50X50/user/${this.state.user_profile_pic}`}
                                   className="avatar" 
                                />
                            </Col>

                            <Col>
                                <span className="typograph_short">List created by</span><br/>
                                <span className="typograph_bold">{this.state.user_name}</span>
                            </Col>

                                <Col sm={3} md={3} lg={3}>
                                    <span>
                                        <a href="https://itunes.apple.com/us/app/grabbd-grab-share-places-you/id1060585858">
                                            <Button
                                                id="enterKey" 
                                                className={classes.btn}>
                                                Create Your Own List With US
                                            </Button>
                                        </a>

                                        <Button
                                            id="enterKey" 
                                            className={classes.btn_share}>
                                            Share
                                        </Button>
                                    </span>
                            </Col>
                        </Row>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
  }
}

export default withStyles(stylefile)(TitleBar);