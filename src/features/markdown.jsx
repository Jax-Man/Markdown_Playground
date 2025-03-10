// This needs to be the value of the input element 
// and output changes

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = `# Markdown Previewer\n---
## Importance of Spaces

>Spaces play an important role in this syntax:

_example:_ 

1. this and 1. this and 1.~not this one~ 1. this will render in a list 

**this is because of the space in between the number "1." and the content 
*** 
##links and~fuck hold on~
## Links and code blocks 
***
[a link looks like this](https://freeCodeCamp.com), and can be anything and go anywhere so be careful!
  
\`inline code looks like this, and code markdown will always take its contents literally. Meaning it will not render and markdown syntax\`,    

    a code block looks like this

>> this is a blockquote and auto indents your text

    an image needs a ! followed by these[alt text goes here](link to img goes here "text on hover")

![alt text goes here](https://raw.githubusercontent.com/Jax-Man/freeCodeCamp_img/refs/heads/main/Grid_Img_Tribute.png "props if you know what this is from")

***
*__Text decorations__*
***

\`You can use * or _ for italic(*matching 1*) or bold(**matching pairs surrounding**)\`

__*this is bolded and italicized*__

***This is as well***

***
## Lastly, Line breaks
***

line breaks are either

\`---\`

or

\`***\`

or

\`___\`

looks like this 
***
and this

---

and also this

___

be careful because this \`---\` is not a line break if its right under text

this turns it into an h2 header
---
unrelated but using this \`===\` makes an h1 header
===
the space between matters

---

like that`;


export const markdownSlice = createSlice({
    name: 'markdown',
    initialState: {value: initialStateValue},
    reducers: {
        updateMarkdownOutput: (state, action) => {
            state.value = action.payload
        },
        // Might need to add a remove function

        //also want to add a 'clear all' button to reset
        //  the page
    },
});

export const { updateMarkdownOutput } = markdownSlice.actions;

export default markdownSlice.reducer;