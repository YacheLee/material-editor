import React, {useContext} from 'react';
import Redo from '@material-ui/icons/Redo';
import {redo} from 'prosemirror-history';
import EditorViewContext from '../../../contexts/EditorViewContext';

function RedoButton(){
    const {editorView} = useContext(EditorViewContext);
    const isDisabled = !redo(editorView.state);

    return <Redo color={isDisabled ? 'disabled' : 'action'} onClick={e=>{
        redo(editorView.state, editorView.dispatch);
    }}/>
}

export default RedoButton;
