'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var view = require('@codemirror/view');
var state = require('@codemirror/state');
var history = require('@codemirror/history');
var fold = require('@codemirror/fold');
var language = require('@codemirror/language');
var gutter = require('@codemirror/gutter');
var commands = require('@codemirror/commands');
var matchbrackets = require('@codemirror/matchbrackets');
var closebrackets = require('@codemirror/closebrackets');
var search = require('@codemirror/search');
var autocomplete = require('@codemirror/autocomplete');
var comment = require('@codemirror/comment');
var rectangularSelection = require('@codemirror/rectangular-selection');
var highlight = require('@codemirror/highlight');
var lint = require('@codemirror/lint');

const FontSizeTheme = view.EditorView.theme({
    $: {
        fontSize: "1.15em"
    }
});
const xSetup = [
    gutter.highlightActiveLineGutter(),
    view.highlightSpecialChars(),
    history.history(),
    fold.foldGutter(),
    view.drawSelection(),
    view.dropCursor(),
    state.EditorState.allowMultipleSelections.of(true),
    language.indentOnInput(),
    highlight.defaultHighlightStyle.fallback,
    matchbrackets.bracketMatching(),
    closebrackets.closeBrackets(),
    autocomplete.autocompletion(),
    rectangularSelection.rectangularSelection(),
    view.highlightActiveLine(),
    search.highlightSelectionMatches(),
    FontSizeTheme,
    view.keymap.of([
        ...closebrackets.closeBracketsKeymap,
        ...commands.defaultKeymap,
        ...search.searchKeymap,
        ...history.historyKeymap,
        ...fold.foldKeymap,
        ...comment.commentKeymap,
        ...autocomplete.completionKeymap,
        ...lint.lintKeymap,
        commands.indentWithTab
    ])
];

Object.defineProperty(exports, 'EditorView', {
    enumerable: true,
    get: function () { return view.EditorView; }
});
Object.defineProperty(exports, 'EditorState', {
    enumerable: true,
    get: function () { return state.EditorState; }
});
exports.xSetup = xSetup;
