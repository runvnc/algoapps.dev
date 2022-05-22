import {EditorState, EditorView, xSetup} from "./dist/index.js"
import {javascript} from "@codemirror/lang-javascript"
import {python} from '@codemirror/lang-python'


let editor = new EditorView({
  state: EditorState.create({
    extensions: [xSetup, python()]
  }),
  parent: document.body
})

window.view = editor

