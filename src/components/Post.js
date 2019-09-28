import React from 'react';
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const Post = ({
  post,
  classes,
}) => (
    <Grid key={post.id} item>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {post.title}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {post.body}
          </Typography>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid >
  );

export default Post;
