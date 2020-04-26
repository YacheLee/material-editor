import React from 'react';

const FONT_SIZE = 18;

const EditLink = ({className, onClick}) => {
    return(
        <div className={className} style={{fontSize: FONT_SIZE}} onClick={onClick}>Edit Link</div>
    );
};

export default EditLink;
