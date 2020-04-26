import React, {useContext} from "react";
import PropTypes from 'prop-types';
import cn from 'classnames';
import {createUseStyles} from 'react-jss';
import {InsertLink as Link} from '@material-ui/icons';
import {BLACK_COLOR} from "../../../config";
import {EditorViewContext} from '../../../contexts';
import {canLinkBeCreatedInRange, getActiveText, insertLink} from '../../../utils';

const useStyles = createUseStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    link: {
        color: ({disabled=false})=>{
            return disabled ? "grey" : BLACK_COLOR;
        }
    },
    enabled_hover: {
        "&:hover": {
            cursor: "pointer"
        }
    },
    disabled_hover: {
        "&:hover": {
            cursor: "not-allowed"
        }
    },
});

function LinkButton(){
    const {editorView} = useContext(EditorViewContext);
    const disabled = !canLinkBeCreatedInRange(editorView.state.selection.from, editorView.state.selection.to)(editorView.state);
    const classes = useStyles({disabled});
    const linkClassName = cn(classes.link, {[classes.enabled_hover]: !disabled, [classes.disabled_hover]: disabled});

    return <div className={classes.root}>
        <Link className={linkClassName} disabled={disabled} onClick={()=>{
            if(!disabled){
                const url = window.prompt('Enter the URL of the link:');
                if (!url) return;

                const text = getActiveText(editorView.state.selection);
                const {from, to} = editorView.state.selection;
                const command = insertLink(from, to, url, text);
                command(editorView.state, editorView.dispatch);
            }
        }}/>
    </div>
}

LinkButton.defaultProps = {
    onClick: ()=>{}
};

LinkButton.propTypes = {
    onClick: PropTypes.func
};

export default LinkButton;
