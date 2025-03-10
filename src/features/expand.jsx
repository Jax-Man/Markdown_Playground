import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    editor: {
        isExpanded: false,
        className: '',
         buttonText: "Expand"
    },
    content: {
        isExpanded: false,
        className: '',
        buttonText: "Expand"
    },
}

const expanded = {
    isExpanded: true,
    className: 'expanded',
    buttonText: "Expandn't"
}

const hidden = {
    className: 'hide',
    isExpanded: false
}

const expand = createSlice({
  name: 'expand',
  initialState,
  reducers: {
    expandEditor: (state) => {
        if (!state.editor.isExpanded) {
            state.editor = Object.assign({}, state.editor, expanded);
            state.content = Object.assign({}, state.content, hidden);
        } else {
            state.editor = initialState.editor;
            state.content = initialState.content;
        };
    },
    expandContent: (state) => {
        if (!state.content.isExpanded) {
           state.content = Object.assign({}, state.content, expanded);
           state.editor = Object.assign({}, state.editor, hidden);
        } else {
           state.editor = initialState.editor;
           state.content = initialState.content;
        };
    }
  }
});

export const {expandContent, expandEditor} = expand.actions

export default expand.reducer