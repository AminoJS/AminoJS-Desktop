import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = () => ({
    avatar: {
        backgroundColor: red[500],
    },
});

class BlogPost extends React.Component {

    state = {
        favorite: false,
    };

    handleExpandClick = () => {  
        this.setState({ expanded: !this.state.expanded });
    };

    async favoritePost(){
        const { post } = this.props;

        console.log(`Calling API: ${post.id}`);

        this.setState({
            favorite: !this.state.favorite,
        });
    }

    render() {
        const { classes, post } = this.props;

        const postHeight = 
                            post.media_list ?
                                '30em'          :
                                '12em'          ;

        return (
            <div>
                <Card className={classes.card} 
                    style={{
                        background: '#70767F',
                        borderRadius: '4px 4px 0px 0px',
                        marginBottom: '1.5em',
                        width: '80vw',
                        height: postHeight,
                    }}
                >
                    <CardHeader
                        avatar={    
                            <Avatar alt={post.author.name} className={classes.avatar} src={post.author.profile_picture}></Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={
                            <span style={{color: '#FFF'}}>{post.title}</span>
                        }
                        subheader={
                            <span style={{color: '#FFF', opacity: 0.8}}>{post.author.name}</span>
                        }
                    />
                    
                    {
                        (() => {
                            if(post.media_list){
                                const firstImage = post.media_list[0].url;
                                return (
                                    <CardMedia
                                        className={classes.media}
                                        image={firstImage}
                                        style={{
                                            height: '18em'
                                        }}
                                    />
                                );
                            }
                        })()
                    }

                    <CardContent>
                        <Typography component="p">
                            {
                                (() => {
                                    const content = post.content;
                                    const splits = content.split('\n');
                                    if(splits.length >= 2){
                                        return (
                                            <span>
                                                {splits[0]}
                                                {splits[1]}
                                                ...
                                            </span>
                                        );
                                    }else{
                                        return content;
                                    }
                                }) ()
                            }
                        </Typography>
                    </CardContent>

                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites"
                            onClick={() => this.favoritePost()}
                        >
                            <FavoriteIcon 
                                style={{
                                    color: this.state.favorite ? '#f73859' : '#FFF',
                                }}
                            />
                        </IconButton>
                    </CardActions>

                </Card>
            </div>
        );
    }
}

BlogPost.propTypes = {
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogPost);