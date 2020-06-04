import React from 'react';
import YouTube from 'react-youtube';

class YouTubeEmbeded extends React.Component{
    
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0,
            },
        };

        return <YouTube videoId={this.props.url} opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}

export default YouTubeEmbeded;