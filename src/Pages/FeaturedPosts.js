import '../SCSS/App.scss';
import React from 'react';
import BlogPost from '../Components/BlogPost';

export default class FeaturedPosts extends React.Component {
    sid = localStorage.getItem('sid');

    state = {
        posts: [
            {
                id: '001',
                title: 'One post',
                content: 'Something about something',
                author: {
                    id: 'some_ppl_01',
                    profile_picture: 'http://www.meug.be/wp-content/uploads/2017/05/Team-Member.jpg',
                    name: 'User',
                }
            },
            {
                id: '002',
                title: 'Anything',
                content: 'Something about something, and that thing about that thing',
                author: {
                    id: 'some_ppl_01',
                    profile_picture: 'http://www.meug.be/wp-content/uploads/2017/05/Team-Member.jpg',
                    name: 'User',
                }
            },
            {
                id: '003',
                title: 'Cats!!1!',
                content: 'Something about cats [img_01], and MORE CATS!!!!!!!!!!!! [img_02]',
                media_list: [
                    {
                        id: 'img_01',
                        url: 'https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg'
                    },
                    {
                        id: 'img_02',
                        url: 'https://i.imgur.com/xkKw5r8.jpg'
                    },
                ],
                author: {
                    id: 'some_ppl_01',
                    profile_picture: 'http://www.meug.be/wp-content/uploads/2017/05/Team-Member.jpg',
                    name: 'User',
                }
            },
            {
                id: '004',
                title: '2 Long lol',
                content: 'And some REALLY REALLY LONG \n POST ABOUT SOMETHING \n THAT I DO\' EVENT \n KNOW, AND WHY YOU STILL READING THIS??? I DON\'T UNDERSTAND YOU MATE, LIKE CAN \n YOU JUST STOP DOING THIS, \n LIKE STOP READING THIS TEXT, LIKE RIGHT \n NOW RIGHT NOW.',
                author: {
                    id: 'some_ppl_01',
                    profile_picture: 'http://www.meug.be/wp-content/uploads/2017/05/Team-Member.jpg',
                    name: 'User',
                }
            },
        ]
    }

    render(){
        return (
            <div id="featured_posts_container">
                
                <div id="posts">
                    {
                        (() => {
                            const posts = [];
                            this.state.posts.map(post => {
                                return posts.push(
                                    <BlogPost post={post} key={post.id} />
                                );
                            });
                            return posts;
                        })()
                    }
                </div>
            </div>
        );
    }
}