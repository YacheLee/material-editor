import React from "react";
import {createUseStyles} from "react-jss";
import EditLink from "./EditLink";
import ExternalLink from "./ExternalLink";
import Unlink from "./Unlink";
import {BLACK_COLOR, BORDER_RADIUS, GREY_COLOR} from "../../config";
// import {editLink, unwrapLink} from "../../link";

const useStyles = createUseStyles({
    root: {
        overflowY: "hidden",
        display: "inline-flex",
        height: 30,
        width: 180,
        boxShadow:"0px 8px 16px 0px rgba(0,0,0,0.2)",
        padding: "4px 8px",
        zIndex: 10,

        "&:hover":{
           cursor: "pointer"
        }
    },
    a: {
        color: "#0052cc",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
            color: "#3b73af"
        }
    },
    separator: {
        display: "flex",
        background: GREY_COLOR,
        width: "1px",
        height: "28px",
        margin: "0px 8px"
    },
    editElement: {
        display: "flex",
        flex: "1 0 auto",
        padding: "0px 2px",
        justifyContent: "center",
        alignItems: "center",
        color: BLACK_COLOR,
        borderRadius: BORDER_RADIUS,
        "&:hover": {
            cursor: "pointer",
            backgroundColor: GREY_COLOR
        }
    }
});

function LinkPopup({url, onEditLinkClick, onUnlinkClick}){
    const classes = useStyles();

    return <div className={classes.root}>
        <EditLink className={classes.editElement} onClick={onEditLinkClick}/>
        <div className={classes.separator}/>
        <ExternalLink className={classes.editElement} url={url} />
        <div className={classes.separator}/>
        <Unlink className={classes.editElement} onClick={onUnlinkClick} />
    </div>
}

export default LinkPopup;
