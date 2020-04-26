import React from 'react';
import Icon from "@material-ui/core/Icon";

const FONT_SIZE = 18;

function ExternalLink({className, url}){
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
            <Icon className="fas fa-external-link-alt" style={{fontSize: FONT_SIZE}} />
        </a>
    );
}

export default ExternalLink;
