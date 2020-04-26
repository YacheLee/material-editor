import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {createUseStyles} from 'react-jss';
import Divider from '@material-ui/core/Divider';
import EditorViewContext from "./contexts/EditorViewContext"
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import normaliseValue from './normaliseValue';

const useStyles = createUseStyles({
    paper: {
        padding: 12
    }
});

function RichTextEditor({defaultValue, onChange}) {
    const classes = useStyles();
    const [editorView, setEditorView] = useState(null);

    return (
        <EditorViewContext.Provider value={{editorView, setEditorView}}>
            <Paper elevation={3} className={classes.paper}>
                {editorView && <Toolbar/>}
                <Divider light={true} />
                <div style={{margin: 12, overflow: 'auto'}}>
                    <Editor value={normaliseValue(defaultValue)} onChange={onChange}/>
                </div>
            </Paper>
        </EditorViewContext.Provider>
    );
}

RichTextEditor.defaultProps = {
    defaultValue: [],
    onChange: ()=>{}
};

RichTextEditor.propTypes = {
    defaultValue: PropTypes.array,
    onChange: PropTypes.func
};

export default RichTextEditor;
