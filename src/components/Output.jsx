import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { expandContent } from '../features/expand';
//need to pass the text through markdown and return the 
// result so it functions better
function Output() {
    const dispatch = useDispatch()
    const markdown = useSelector((state) => state.markdown.value);
    const expand = useSelector((state) => state.expand);
    return (
        <div className={expand.content.className} id="preview-wrapper">
            <button onClick={() => dispatch(expandContent())}>{expand.content.buttonText}</button>
            <div id="preview" >
            <Markdown remarkPlugins={[remarkGfm]}>
           
                {markdown}
            
            </Markdown>       
            </div>
        </div>
    )
};

export default Output