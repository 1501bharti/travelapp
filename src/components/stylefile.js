  const stylefiles = theme => ({
    bookmarkicon: {
      color:"white",
      borderRadius:100,
      backgroundColor:'#FFA500',
      padding:5,
      fontSize:15,
      marginRight:5
    },

    favicon: {
        color:"white",
        borderRadius:100,
        backgroundColor:'#ff1493',
        padding:5,
        fontSize:15,
        marginRight:5
    },

    likeicon: {
        color:"white",
        borderRadius:100,
        backgroundColor:'#7EC0EE',
        padding:5,
        fontSize:15,
        marginRight:5
    },

    dislikeicon: {
        color:"white",
        borderRadius:100,
        backgroundColor:'darkblue',
        padding:5,
        fontSize:15,
        marginRight:5
      },

      button:{
          backgroundColor:"blue",
          borderRadius:25,
      },

      btn:{
        border: 0,
        backgroundColor:'#FFA500',
        color: "white",
        // width: "100%",
        height: 42,
        textTransform: "unset",
        fontSize: 14,
        fontWeight:400,
        borderRadius:25,
        outline:0,
        padding:"2px 35px 2px 35px",
        position: "absolute",
        right: 206,
      '&:hover': {
        boxShadow:'0 5px 14px 0 rgba(0,0,0,.19)',
        backgroundColor:'#00B9F5',
        [theme.breakpoints.down('lg')]: {
          right: 206,
        },
        [theme.breakpoints.down(1210)]: {
          right: 170,
          height: 38,
        },
      
        [theme.breakpoints.down(992)]: {
          right: 100,
          height: 30,
          fontSize: 12,
          padding:"2px 25px 2px 25px",
        },
      
        [theme.breakpoints.down(768)]: {
          right: 90,
          height: 28,
          fontSize: 10,
          padding:"2px 15px 2px 15px",
        },

        [theme.breakpoints.down(700)]: {
          right: 80,
          height:26,
          fontSize: 9,
          padding:"2px 10px 2px 10px",
        },
       }
        },

    btn_share:{
        position: "absolute",
        right: 80,
        border: 0,
        backgroundColor:'#7EC0EE',
        color: "white",
        // width: "20%",
        height: 42,
        textTransform: "unset",
        fontSize: 14,
        fontWeight:400,
        borderRadius:25,
        outline:0,
        padding:"2px 35px 2px 35px",
      '&:hover': {
        boxShadow:'0 5px 14px 0 rgba(0,0,0,.19)',
        backgroundColor:'#D3D3D3',
       }
    },

    icon_details:{
     position:"relative",
     right:230,

     [theme.breakpoints.down(1400)]: {
      position:"relative",
      right:200,
    },
    [theme.breakpoints.down(1210)]: {
      position:"relative",
      right:110,
    },

    [theme.breakpoints.down(1019)]: {
      position:"relative",
      right:90,
    },
  
    [theme.breakpoints.down(992)]: {
      position:"relative",
      right:90,
    },
  
    [theme.breakpoints.down(768)]: {
      position:"relative",
     right:70,
    },

    [theme.breakpoints.down(700)]: {
      position:"relative",
      right:60,
    },
  },

    
    icon_detail:{
        position:"relative",
        right:230,
        
        [theme.breakpoints.down(1400)]: {
          position:"relative",
          right:170,
        },
        [theme.breakpoints.down(1210)]: {
          position:"relative",
          right:90,
        },
    
        [theme.breakpoints.down(1019)]: {
          position:"relative",
          right:70,
        },
      
        [theme.breakpoints.down(992)]: {
          position:"relative",
          right:70,
        },
      
        [theme.breakpoints.down(768)]: {
          position:"relative",
         right:50,
        },
    
        [theme.breakpoints.down(700)]: {
          position:"relative",
          right:40,
        },
       },

    comments:{
        fontSize:14,
        width:380,
        marginBottom:20,
        wordWrap:"break-word",
    },

        AppBar:{
            height:64,
            paddingTop:6,
            backgroundColor:'white',
            position: 'fixed',
            top:0,
            boxShadow:'0 2px 6px 0 rgba(0,0,0,.19)',
        },

        staticimg:{
            position:'fixed',
            marginTop:40,
            borderRadius:25,
            height:410,
            width:480,
            [theme.breakpoints.down('lg')]: {
                height:410,
                width:480,
              },
              [theme.breakpoints.down(1210)]: {
                height:360,
                width:380,
              },

              [theme.breakpoints.down(1077)]: {
                marginLeft:30,
                height:360,
                width:340,
              },

              [theme.breakpoints.down(999)]: {
                marginLeft:30,
                height:310,
                width:320,
              },
            
              [theme.breakpoints.down(855)]: {
                marginLeft:30,
                height:280,
                width:300,
              },

              [theme.breakpoints.down(813)]: {
                marginLeft:50,
                height:240,
                width:280,
              },

              [theme.breakpoints.down(736)]: {
                marginLeft:60,
                height:240,
                width:280,
              },
        }
    
  });
  
  export default stylefiles;