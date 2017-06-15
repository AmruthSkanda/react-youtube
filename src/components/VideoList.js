import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = (props) => {
	const VideoItems = props.videos.map((video,index) => {
		return <VideoListItem 
			video={video} 
			key={video.etag}
			onVideoSelect={props.onVideoSelect}
			/>
	})
	return (
		<ul className="col-md-12 list-group">
			{VideoItems}
		</ul>
	);
}

export default VideoList;