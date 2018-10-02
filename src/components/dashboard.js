import React from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from '@material-ui/core/Divider';
import CommentIcon from '@material-ui/icons/Comment';
import { withStyles } from '@material-ui/core/styles';
import Place from './Place';
import stylefile from './stylefile';
import paginate from 'paginate-array';
import '../App.css';
import { Button } from '@material-ui/core';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        ima:'https://i.pinimg.com/564x/45/27/86/452786b0abf8165b6eb042a9c54da801.jpg',
        dataa:[],
        slide:false,
        todos: [],
        size: 5,
        page: 1,
        currPage: null,
        imgid:'',
    }
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
  }

  imageload(appendimage,imgidd){
    this.setState({
        ima:appendimage,
        imgid:imgidd
    })  
}


  imageredirect(){
    document.getElementById(this.state.imgid).scrollIntoView();
  }

  componentDidMount() {
    axios.get('http://api.grabbd.com/api/v1/customlist',
        {
            headers: { "Postman-Token": "grabbd-react-dev"}
        })
        .then(response => response.data.DATA)
        .then(todos => {
          const { page, size } = this.state;

          const currPage = paginate(todos, page, size);
  
          this.setState({
            ...this.state,
            todos,
            currPage,
          });
        })
        .catch((error) => {
            alert(error)
        })
    }

    previousPage() {
        const { page, size, todos } = this.state;
    
        if (page > 1) {
          const newPage = page - 1;
          const newCurrPage = paginate(todos, newPage, size);
    
          this.setState({
            ...this.state,
            page: newPage,
            currPage: newCurrPage,
            ima:'https://i.pinimg.com/564x/45/27/86/452786b0abf8165b6eb042a9c54da801.jpg',

          });
        }
      }
    
      nextPage() {
        const { currPage, page, size, todos } = this.state;
    
        if (page < currPage.totalPages) {
          const newPage = page + 1;
          const newCurrPage = paginate(todos, newPage, size);
          this.setState({ ...this.state,
             page: newPage,
             currPage: newCurrPage,
             ima:'https://i.pinimg.com/564x/45/27/86/452786b0abf8165b6eb042a9c54da801.jpg',
          });
        }
      }


  render() {
    const { classes } = this.props;
    const { page, size, currPage } = this.state;

    return (
        <Grid>
            <Row>
                <Col className="left" sm={6} md={6} lg={6} >
                    <Col className="left" sm={12} md={12} lg={12} >
                        <Place/>
                    </Col>
            {currPage &&
                <div>
                    {currPage.data.map(item => 
                    
                    <Col sm={12} md={12} lg={12}>
                    <Divider/>
                    <Grid className="vist_grid" key={item.venue_id}>
                        <Row><span className="typograph_b" id={item.venue_id}>{item.venue_category}</span></Row>
                        <Row>
                            <Col sm={3} md={3} lg={3}>
                                <img className="imgvist" alt="img1" 
                                        onClick={this.imageload.bind(this,`http://d6ejh6ps4xec6.cloudfront.net/400X400/venue/${item.venue_photo_arr[1]}`,item.venue_id)}
                                        src={`http://d6ejh6ps4xec6.cloudfront.net/400X400/venue/${item.venue_photo_arr[1]}`}
                                    
                                />
                                <img className="imgvist" alt="img2" 
                                        onClick={this.imageload.bind(this,`http://d6ejh6ps4xec6.cloudfront.net/400X400/venue/${item.venue_photo_arr[0]}`,item.venue_id)}
                                        src={`http://d6ejh6ps4xec6.cloudfront.net/400X400/venue/${item.venue_photo_arr[0]}`}
                                />
                            </Col>

                            <Col sm={8} md={8} lg={8}>
                                <img className="imgvist3" alt="img3"
                                    onClick={this.imageload.bind(this,`http://d6ejh6ps4xec6.cloudfront.net/400X400/venue/${item.venue_photo_arr[2]}`,item.venue_id)} 
                                    src={`http://d6ejh6ps4xec6.cloudfront.net/400X400/venue/${item.venue_photo_arr[2]}`}
                                />
                           </Col>
                        </Row>

                        <Row>
                            <Col className="imgheading">
                                <h1>{item.href}</h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6} md={6} lg={6}>
                                 Address : <span className="typograph_p">
                                {item.venue_address}<br/>
                                {item.venue_city}, {item.venue_country}
                                </span>
                            </Col>
                        </Row>

                        <Row style={{marginTop:20}}>
                            <Col  sm={12} md={12} lg={12}>
                                <CommentIcon className={classes.bookmarkicon} />{item.venue_friend_grabbd_state} this place
                            </Col>
                            <Col style={{marginLeft:60,marginTop:20}} sm={12} md={12} lg={12}>
                            <div className={classes.comments}>Comments :  {item.venue_featured_comment}</div>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
                    )}
                </div>
             }
             </Col>
                {
                    currPage &&
                        <div>
                            <h3 className="selectTag">Select any venue from the left side of the page</h3>
                            {currPage.data.map(items => 
                                <Col className="right" sm={6} md={6} lg={4} key={items.venue_id}>
                                    <Col  sm={12} md={6} lg={6} >
                                        <img src={this.state.ima} alt="placeholderimg"
                                            style={{position:"fixed"}}
                                            className={classes.staticimg}
                                            onClick={this.imageredirect.bind(this)} 
                                        />
                                    </Col>
                                </Col>
                            )}
                        </div>
                }
            </Row>
                <div className="btn_div" >
                     <div className="page_bt1">Page No: {page} Size of the page: {size}</div>
                    <Button variant="raised" className="page_btn1" onClick={this.previousPage}>Previous Page</Button>
                    <Button variant="raised" className="page_btn2" onClick={this.nextPage}>Next Page</Button>
                </div>
         </Grid>
    );
  }
}

export default withStyles(stylefile)(Dashboard);