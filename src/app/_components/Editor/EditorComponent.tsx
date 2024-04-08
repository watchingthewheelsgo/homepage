"use client";

import { useCodeBlockEditorContext, CodeBlockEditorDescriptor, codeMirrorPlugin, ShowSandpackInfo, ChangeCodeMirrorLanguage, InsertSandpack, InsertCodeBlock, ConditionalContents, SandpackConfig, codeBlockPlugin, sandpackPlugin, markdownShortcutPlugin, diffSourcePlugin, tablePlugin, listsPlugin, thematicBreakPlugin, linkDialogPlugin, CreateLink, DiffSourceToggleWrapper, MDXEditor, MDXEditorMethods, headingsPlugin, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin, linkPlugin, imagePlugin, InsertImage, InsertTable, quotePlugin, AdmonitionDirectiveDescriptor, directivesPlugin, frontmatterPlugin, InsertFrontmatter, KitchenSinkToolbar } from "@mdxeditor/editor";
import { FC } from "react";
import '@mdxeditor/editor/style.css'

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim()

const simpleSandpackConfig: SandpackConfig = {
    defaultPreset: 'react',
    presets: [
      {
        label: 'React',
        name: 'react',
        meta: 'live react',
        sandpackTemplate: 'react',
        sandpackTheme: 'light',
        snippetFileName: '/App.js',
        snippetLanguage: 'jsx',
        initialSnippetContent: defaultSnippetContent
      },
    ]
  }

    const PlainTextCodeEditorDescriptor: CodeBlockEditorDescriptor = {
    // always use the editor, no matter the language or the meta of the code block
    match: (language, meta) => true,
    // You can have multiple editors with different priorities, so that there's a "catch-all" editor (with the lowest priority)
    priority: 0,
    // The Editor is a React component
    Editor: (props) => {
      const cb = useCodeBlockEditorContext()
     // stops the proppagation so that the parent lexical editor does not handle certain events.
      return (
        <div onKeyDown={(e) => e.nativeEvent.stopImmediatePropagation()}>
          <textarea rows={3} cols={20} defaultValue={props.code} onChange={(e) => cb.setCode(e.target.value)} />
        </div>
      )
    }
  }

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return (
    <MDXEditor
      onChange={(e) => console.log(e)}
      ref={editorRef}
      markdown={markdown}
      contentEditableClassName="prose"
      plugins={[
        headingsPlugin(),
        imagePlugin({
            imageUploadHandler: () => {
              return Promise.resolve('https://picsum.photos/200/300')
            },
            imageAutocompleteSuggestions: ['https://picsum.photos/200/300', 'https://picsum.photos/200']
          }),
        tablePlugin(),
        quotePlugin(),
        listsPlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        diffSourcePlugin({
            diffMarkdown: markdown,
            viewMode: 'rich-text',
            readOnlyDiff: true
          }),
        markdownShortcutPlugin(),
        codeBlockPlugin({defaultCodeBlockLanguage: 'js', codeBlockEditorDescriptors: [PlainTextCodeEditorDescriptor]}),
        sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
        codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' } }),
        directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
        frontmatterPlugin(),
        toolbarPlugin({
            toolbarContents: () => (
                <KitchenSinkToolbar />
            )
          })
      ]}
    />
  );
};

export default Editor;