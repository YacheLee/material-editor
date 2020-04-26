import React, {useContext} from 'react';
import Undo from '@material-ui/icons/Undo';
import {undo} from 'prosemirror-history';
import EditorViewContext from '../../../contexts/EditorViewContext';

function UndoButton(){
    const {editorView} = useContext(EditorViewContext);
    const isDisabled = !undo(editorView.state);

    return <Undo color={isDisabled ? 'disabled' : 'action'} onClick={e=>{
        undo(editorView.state, editorView.dispatch);
    }}/>
}

export default UndoButton;
