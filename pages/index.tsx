/* eslint-disable react-hooks/exhaustive-deps */
import fs from 'fs';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { TextEditor } from '../components/TextEditor'
import styles from '../styles/Home.module.css'
import { FileUploaded } from '../components/FileUploaded';
import Editor, { Monaco } from "@monaco-editor/react";

import play from '../public/svgs/play.svg'
import stop from '../public/svgs/stop.svg'
import terminal from '../public/svgs/terminal.svg'




interface IFile {
  name: string;
  text: string;
}

export default function Home() {

  const [folder, setFolder] = useState("Analizador-Lexico");
  const [linea, setLinea] = useState(0);
  const [columna, setColumna] = useState(0);

  const [colapseOpens, setColapseOpens] = useState('>');
  const [colapseFolders, setColapseFolders] = useState('>');

  const [selectedFile, setSelectedFile] = useState<any | null>(0);

  const [saveFiles, setSaveFiles] = useState<any>([])

  const [files, setFiles] = useState<IFile[]>([]);
  const handleColapseList = (check: any) => {
    if (check == '>') {
      setColapseOpens('v');
    } else {
      setColapseOpens('>');
    }
  };

  const handleColapseFolders = () => {
    if (colapseFolders == '>') {
      setColapseFolders('v');
    } else {
      setColapseFolders('>');
    }
  };

  const handleFileInput = (e: any) => {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    setSaveFiles([...filesArr]);

  };

  const changeCode = (index: number) => {
    setSelectedFile(index);
  };

  const newFile = () => {
    setFiles([...files, { name: "newFile", text: "" }]);
    setSelectedFile(files.length);
  }


  useEffect(() => {
    (async () => {
      if (saveFiles[0]) {
        const check = new Set();
        files.forEach((file) => {
          check.add(file.name);
        });
        if (check.has(saveFiles[0].name)) {
        } else {
          const text = await saveFiles[0].text();
          setSelectedFile(files.length);
          setFiles([...files, { name: saveFiles[0].name, text: text }]);

        }
      }
    })();
  }, [saveFiles]);


  return (
    <div className={styles.container}>
      <Head>
        <title>Lexic Analitic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.titleheader}>
          <span>Guz code.</span>
        </div>
        <div><button>Buscar Archivo</button></div>
        <div className={styles.controllers}>
          <Image src={play} alt="" />
          <Image src={stop} alt="" />
          <Image src={terminal} alt="" />
        </div>
      </header>

      <main >
        <div className={styles.center}>
          <div className={styles.explorer}>

            <input type="file" onChange={handleFileInput} />
            <span onClick={e => newFile()} className={styles.newFile}>Crear nuevo Archivo</span>
            <h3 className={styles.h3}>Explorer</h3>
            <button
              onClick={e => handleColapseList(colapseOpens)}
            >{colapseOpens}     EDITORES ABIERTOS
            </button>
            <div className={colapseOpens === '>' ? styles.hide : styles.show}>
              {files?.map((file: any, index: number) => {
                return (<div key={index} className={styles.file} onClick={e => changeCode(index)}><input type={'button'} value={file.name} /></div>)
              })}
            </div>
            <button
              onClick={e => handleColapseList(colapseFolders)}>{`${colapseFolders}     ${folder}`}</button>
            <div></div>
          </div>
          {files.map((file: any, index: number) => {

            return (
              <TextEditor key={index} display={(selectedFile !== index) ? false : true} editor={file} saveFiles={saveFiles} setSaveFiles={setSaveFiles} files={files} index={index} />
            )
          })}
        </div>
      </main >

      <footer className={styles.footer}>
        <span>{`Lín. ${linea}, col. ${columna}`}</span>
      </footer>
    </div >
  )
}


