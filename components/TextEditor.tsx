/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import Editor, { Monaco } from "@monaco-editor/react";

import styles from '../styles/Home.module.css'



export const TextEditor = (props: any, monaco: Monaco) => {
    const editorRef = useRef(null);

    const { editor, saveFiles, setSaveFiles, files, index, display } = props;
    const [code, setCode] = useState("// some comment");



    function handleEditorDidMount(editor: any, monaco: Monaco) {
        // here is the editor instance
        // you can store it in `useRef` for further usage
        console.log("hhh", editor, monaco);
        editorRef.current = editor;
    }



    useEffect(() => {
        if (saveFiles[0]) {
            setTimeout(() => {

                console.log(files)
                setCode(files[index]?.text);
            }, 2000);
        }
    }, [files, index]);


    {
        if (display) return <Editor
            width={"100%"}
            height={"100%"}
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            value={code}
            onMount={handleEditorDidMount} />
        else return <div className={styles.hide}></div>
    }

}
