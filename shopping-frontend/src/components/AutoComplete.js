import React from 'react';
import '../App.css';

const AutoComplete = props => {
    
        return(
            <div id="notebooks">
                <h2>Search for more products</h2>
                <input id="query" type="text" onChange={props.onTextChange} value={props.text} />
                {props.renderSuggestions()}
                <span>Suggestions: {props.suggestions.length}</span>
            </div>
        );
    

}

export default AutoComplete;