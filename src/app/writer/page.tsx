// 'use client'
// // import React from "react";
// // import MDEditor from '@uiw/react-md-editor';

// // export default function Writer() {
// //   const [value, setValue] = React.useState("**Hello world!!!**");
// //   return (
// //     <div className="container items-center justify-center" data-color-mode="light">
// //       <MDEditor
// //         value={value}
// //         onChange={setValue}
// //       />
// //     </div>
// //   );
// // }

// import {MDXEditor, headingsPlugin} from '@mdxeditor/editor';
// import '@mdxeditor/editor/style.css';

// export default function Writer() {
//   return (
//     <div className= 'container'>
//         <MDXEditor markdown={'# Hello World'} plugins={[headingsPlugin()]} />;
//     </div>
//   )
// }

'use client';
import { MDXEditorMethods } from '@mdxeditor/editor';
import dynamic from 'next/dynamic'
import React from 'react';
import { Suspense } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const EditorComp = dynamic(() => import('../_components/Editor/EditorComponent'), { ssr: false })

const markdown = `# Hello World`

type FormValues = {
    markdown: string
}

export default function Home() {
    const { register, handleSubmit } = useForm<FormValues>()
    const mdxEditorRef = React.useRef<MDXEditorMethods>(null)
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(mdxEditorRef.current?.getMarkdown())
  return (
    <form className='mx-10' onSubmit={handleSubmit(onSubmit)} >
        <div className='border border-dark border-solid rounded-xl p-1'>
            <Suspense >
                <EditorComp markdown={markdown} editorRef={mdxEditorRef}/>
            </Suspense>
        </div>
        {/* <input type='markdown' {...register("markdown", {required: true})} className='hidden'/> */}
        <button type="submit" className='bg-dark text-light font-medium rounded px-3 py-1 mt-4 text-right text-xl'>Submit</button>
    </form>

  )
}

// 'use client';
// import { StacksEditor } from "@stackoverflow/stacks-editor";
// // don't forget to include the styles as well
// import "@stackoverflow/stacks-editor/dist/styles.css";
// // include the Stacks js and css as they're not included in the bundle
// import "@stackoverflow/stacks";
// import "@stackoverflow/stacks/dist/css/stacks.css";
// import { LegacyRef, Ref, useEffect, useRef } from "react";


// export default function Home() {
//     // const onSubmit: FormEventHandler<HTMLFormElement> = (data) => console.log(data)\
//     const ref = useRef(null)
//     useEffect(() => {
//         new StacksEditor(ref.current!, "xxxx");
//     })
    
//   return (
//     <div ref={ref}>
//     </div>
//   )
// }


