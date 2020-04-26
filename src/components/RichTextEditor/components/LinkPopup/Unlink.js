import React from 'react';
import Icon from "@material-ui/core/Icon";

const FONT_SIZE = 18;

const Unlink = ({className, onClick}) => {
    return (
        <div className={className} onClick={onClick}>
            <Icon className="fas fa-unlink" style={{fontSize: FONT_SIZE}} />
        </div>
    );
};

export default Unlink;
