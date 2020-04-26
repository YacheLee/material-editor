import React from 'react';
import RichTextEditor from '../RichTextEditor';
import './App.css';

function App() {
    return (
        <div className="App">
            <RichTextEditor defaultValue={[{"type":"paragraph","content":[{"type":"text","text":"asda"},{"type":"text","marks":[{"type":"link","attrs":{"href":"asdada","title":null}}],"text":"dad"},{"type":"text","text":"dadA"}]}]} onChange={console.log} />
        </div>
    );
}

App.defaultProps = {
};

App.propTypes = {
};

export default App;
