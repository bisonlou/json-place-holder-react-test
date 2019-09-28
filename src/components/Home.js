import React, { Component } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import styles from '../assets/styles/styles';
import axios from 'axios';
import Post from './Post';
import NavBar from './NavBar';


class Home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => this.setState({ posts: data }))
      .catch(error => console.log(error))
  };

  render() {
    const { posts } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {
                posts.map(post => (
                  <Post
                    post={post}
                    classes={classes}
                  />
                ))
              }

            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default withStyles(styles)(Home);
