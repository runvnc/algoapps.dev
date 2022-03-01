"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.EditorState = exports.EditorView = exports.xSetup = void 0;
var view_1 = require("@codemirror/view");
var state_1 = require("@codemirror/state");
var history_1 = require("@codemirror/history");
var fold_1 = require("@codemirror/fold");
var language_1 = require("@codemirror/language");
var gutter_1 = require("@codemirror/gutter");
var commands_1 = require("@codemirror/commands");
var matchbrackets_1 = require("@codemirror/matchbrackets");
var closebrackets_1 = require("@codemirror/closebrackets");
var search_1 = require("@codemirror/search");
var autocomplete_1 = require("@codemirror/autocomplete");
var comment_1 = require("@codemirror/comment");
var rectangular_selection_1 = require("@codemirror/rectangular-selection");
var highlight_1 = require("@codemirror/highlight");
var lint_1 = require("@codemirror/lint");
/// This is an extension value that just pulls together a whole lot of
/// extensions that you might want in a basic editor. It is meant as a
/// convenient helper to quickly set up CodeMirror without installing
/// and importing a lot of packages.
///
/// Specifically, it includes...
///
///  - [the default command bindings](#commands.defaultKeymap)
///  - [line numbers](#gutter.lineNumbers)
///  - [special character highlighting](#view.highlightSpecialChars)
///  - [the undo history](#history.history)
///  - [a fold gutter](#fold.foldGutter)
///  - [custom selection drawing](#view.drawSelection)
///  - [drop cursor](#view.dropCursor)
///  - [multiple selections](#state.EditorState^allowMultipleSelections)
///  - [reindentation on input](#language.indentOnInput)
///  - [the default highlight style](#highlight.defaultHighlightStyle) (as fallback)
///  - [bracket matching](#matchbrackets.bracketMatching)
///  - [bracket closing](#closebrackets.closeBrackets)
///  - [autocompletion](#autocomplete.autocompletion)
///  - [rectangular selection](#rectangular-selection.rectangularSelection)
///  - [active line highlighting](#view.highlightActiveLine)
///  - [active line gutter highlighting](#gutter.highlightActiveLineGutter)
///  - [selection match highlighting](#search.highlightSelectionMatches)
///  - [search](#search.searchKeymap)
///  - [commenting](#comment.commentKeymap)
///  - [linting](#lint.lintKeymap)
///
/// (You'll probably want to add some language package to your setup
/// too.)
///
/// This package does not allow customization. The idea is that, once
/// you decide you want to configure your editor more precisely, you
/// take this package's source (which is just a bunch of imports and
/// an array literal), copy it into your own code, and adjust it as
/// desired.
exports.xSetup = [
    (0, gutter_1.highlightActiveLineGutter)(),
    (0, view_1.highlightSpecialChars)(),
    (0, history_1.history)(),
    (0, fold_1.foldGutter)(),
    (0, view_1.drawSelection)(),
    (0, view_1.dropCursor)(),
    state_1.EditorState.allowMultipleSelections.of(true),
    (0, language_1.indentOnInput)(),
    highlight_1.defaultHighlightStyle.fallback,
    (0, matchbrackets_1.bracketMatching)(),
    (0, closebrackets_1.closeBrackets)(),
    (0, autocomplete_1.autocompletion)(),
    (0, rectangular_selection_1.rectangularSelection)(),
    (0, view_1.highlightActiveLine)(),
    (0, search_1.highlightSelectionMatches)(),
    view_1.keymap.of(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], closebrackets_1.closeBracketsKeymap, true), commands_1.defaultKeymap, true), search_1.searchKeymap, true), history_1.historyKeymap, true), fold_1.foldKeymap, true), comment_1.commentKeymap, true), autocomplete_1.completionKeymap, true), lint_1.lintKeymap, true), [
        commands_1.indentWithTab
    ], false))
];
var view_2 = require("@codemirror/view");
__createBinding(exports, view_2, "EditorView");
var state_2 = require("@codemirror/state");
__createBinding(exports, state_2, "EditorState");
