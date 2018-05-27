import '../SCSS/App.scss';
import React from 'react';
import {Typography} from '@material-ui/core';
import '../SCSS/Communities.scss';

export default class Communities extends React.Component {

    state = {
        communities: [
            {
                picture: 'https://avatars1.githubusercontent.com/u/38384013?v=4',
                title: 'Community 1',
                id: '001',
            },
            {
                picture: 'https://avatars1.githubusercontent.com/u/38384013?v=4',
                title: 'Community 2',
                id: '002',
            },
            {
                picture: 'https://avatars1.githubusercontent.com/u/38384013?v=4',
                title: 'Community 3',
                id: '003',
            },
            {
                picture: 'https://avatars1.githubusercontent.com/u/38384013?v=4',
                title: 'Community 4',
                id: '004',
            },
            {
                picture: 'https://avatars1.githubusercontent.com/u/38384013?v=4',
                title: 'Community 5',
                id: '0015',
            },
        ]
    }

    render(){
        return (
            <div id="communities_container"
                style={{
                    background: '#202225',
                    width: '48px',
                    height: '100vh',
                    position: 'fixed',
                    padding: '0.7em',
                    marginTop: '1.5em',
                }}
            >
                <div id="communities">
                    {
                        (() => {
                            const communities = [];
                            this.state.communities.map(community => {
                                return communities.push(
                                    <div key={community.id} className="communite_container">
                                        <div
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                background: `url(${community.picture}) no-repeat center skyblue`,
                                                backgroundSize: 'contain',
                                                borderRadius: '50%',
                                                margin: '0.5em 0em',
                                                cursor: 'pointer'
                                            }}
                                        >
                                        </div>

                                        <div className="hover_title">
                                            <Typography
                                                style={{
                                                    color: '#FFF'
                                                }}
                                            >
                                                {
                                                    community.title
                                                }
                                            </Typography>
                                        </div>

                                    </div>
                                );
                            });
                            return communities;
                        })()
                    }
                </div>
            </div>
        );
    }
}