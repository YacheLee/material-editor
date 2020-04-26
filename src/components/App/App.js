import React from 'react';
import RichTextEditor from '../RichTextEditor';
import './App.css';

function App() {
    const [value, setValue] = React.useState([{"type":"paragraph","content":[{"type":"text","text":"asda"},{"type":"text","marks":[{"type":"link","attrs":{"href":"asdada","title":null}}],"text":"dad"},{"type":"text","text":"dadA"}]}]);

    return (
        <div className="App">
            <RichTextEditor defaultValue={value} onChange={value=>{
                setValue(value);
            }} />
        </div>
    );
}

App.defaultProps = {
};

App.propTypes = {
};

export default App;
