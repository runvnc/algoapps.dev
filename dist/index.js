import { EditorView, highlightSpecialChars, drawSelection, dropCursor, highlightActiveLine, keymap } from '@codemirror/view';
export { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
export { EditorState } from '@codemirror/state';
import { history, historyKeymap } from '@codemirror/history';
import { foldGutter, foldKeymap } from '@codemirror/fold';
import { indentOnInput } from '@codemirror/language';
import { highlightActiveLineGutter } from '@codemirror/gutter';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { bracketMatching } from '@codemirror/matchbrackets';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { commentKeymap } from '@codemirror/comment';
import { rectangularSelection } from '@codemirror/rectangular-selection';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { lintKeymap } from '@codemirror/lint';

const FontSizeTheme = /*@__PURE__*/EditorView.theme({
    $: {
        fontSize: "1.25em"
    }
});
const xSetup = [
    /*@__PURE__*/highlightActiveLineGutter(),
    /*@__PURE__*/highlightSpecialChars(),
    /*@__PURE__*/history(),
    /*@__PURE__*/foldGutter(),
    /*@__PURE__*/drawSelection(),
    /*@__PURE__*/dropCursor(),
    /*@__PURE__*/EditorState.allowMultipleSelections.of(true),
    /*@__PURE__*/indentOnInput(),
    defaultHighlightStyle.fallback,
    /*@__PURE__*/bracketMatching(),
    /*@__PURE__*/closeBrackets(),
    /*@__PURE__*/autocompletion(),
    /*@__PURE__*/rectangularSelection(),
    /*@__PURE__*/highlightActiveLine(),
    /*@__PURE__*/highlightSelectionMatches(),
    FontSizeTheme,
    /*@__PURE__*/keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...commentKeymap,
        ...completionKeymap,
        ...lintKeymap,
        indentWithTab
    ])
];

export { xSetup };
