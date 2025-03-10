import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { updateMarkdownOutput } from '../features/markdown'
import { expandEditor } from '../features/expand';
function MarkdownInput() {
    const dispatch = useDispatch()
    const markdown = useSelector((state) => state.markdown);
    const expand = useSelector((state) => state.expand);
//    React.useEffect(() => {
//    window.addEventListener('keydown', (event) => {
//
//    });
//}, []);
    useEffect(() => {
    dispatch(updateMarkdownOutput(markdown.value));
    }, [dispatch]);


    return (
        <div className={expand.editor.className} id="edit-wrap">
            <div id="edit-header"><h3>Welcome to the Markdown Preview Playground!</h3><button onClick={() => dispatch(expandEditor())}>{expand.editor.buttonText}</button></div>
            <label>
                <textarea id="editor" name="markdown" rows={4} cols={40} 
                onChange={(event) => {
                    dispatch(updateMarkdownOutput(event.target.value));
                    }}
                defaultValue={markdown.value}
                />
            </label>
        </div>
    )
};

export default MarkdownInput