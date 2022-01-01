import React from 'react';
import './styles.css';

const Widgets = (props) => {
	return (
		<div className="widgets">
			<iframe
				title="fb"
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCodingTreeFoundation&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
				target="_top"
				width="340"
				height="100%"
				style={{ border: 'none', overflow: 'hidden' }}
				scolling="no"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
			></iframe>
		</div>
	);
};

export default Widgets;
