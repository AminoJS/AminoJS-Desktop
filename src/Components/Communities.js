import '../SCSS/App.scss';
import React from 'react';
import {Typography} from '@material-ui/core';
import '../SCSS/Communities.scss';
import { getJoinedComs } from 'amino.js';

export default class Communities extends React.Component {

    state = {
        communities: [],
    }

    async fetchCommunities(){
        try{
            const communities = await getJoinedComs();
            console.log(communities);
            this.setState({
                communities: communities.coms,
            });
        }
        catch(error){
            console.error(error);
        }
    }

    componentDidMount(){
        this.fetchCommunities();
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
                                                    community.name
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