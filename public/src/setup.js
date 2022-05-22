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
//import { Extension } from "@codemirror/state";
var view_2 = require("@codemirror/view");
var FontSizeTheme = view_2.EditorView.theme({
    $: {
        fontSize: "1.25em"
    },
    "&.cm-focused .cm-cursor": {
        borderLeftColor: "#B3B306"
    }
});
var FontSizeThemeExtension = [FontSizeTheme];
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
    FontSizeTheme,
    view_1.keymap.of(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], closebrackets_1.closeBracketsKeymap, true), commands_1.defaultKeymap, true), search_1.searchKeymap, true), history_1.historyKeymap, true), fold_1.foldKeymap, true), comment_1.commentKeymap, true), autocomplete_1.completionKeymap, true), lint_1.lintKeymap, true), [
        commands_1.indentWithTab
    ], false))
];
var view_3 = require("@codemirror/view");
__createBinding(exports, view_3, "EditorView");
var state_2 = require("@codemirror/state");
__createBinding(exports, state_2, "EditorState");
