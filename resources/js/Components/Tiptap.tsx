// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// define your extension array
const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

const Tiptap = () => {
    const editor = useEditor({
        extensions,
        content,
    })

    return (
        <>
            <EditorContent editor={editor} />
            <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
            <div className='bg-white'>
                <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
            </div>
        </>
    )
}

export default Tiptap
