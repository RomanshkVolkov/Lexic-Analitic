/* eslint-disable react-hooks/exhaustive-deps */
import fs from "fs";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TextEditor } from "../components/TextEditor";
import styles from "../styles/Home.module.css";
import { FileUploaded } from "../components/FileUploaded";
import Editor, { Monaco } from "@monaco-editor/react";

import play from "../public/svgs/play.svg";
import stop from "../public/svgs/stop.svg";
import terminal from "../public/svgs/terminal.svg";
import plus from "../public/svgs/plus.svg";

import { analize } from "../services/language";

interface IFile {
    name: string;
    text: string;
}

export default function Home() {
    const [folder, setFolder] = useState("Analizador-Lexico");
    const [linea, setLinea] = useState(0);
    const [columna, setColumna] = useState(0);

    const [code, setCode] = useState<string>();

    const [colapseOpens, setColapseOpens] = useState(">");
    const [colapseFolders, setColapseFolders] = useState(">");

    const [selectedFile, setSelectedFile] = useState<any | null>(0);
    const [showTerminal, setShowTerminal] = useState(false);

    const [saveFiles, setSaveFiles] = useState<any>([]);

    const [files, setFiles] = useState<IFile[]>([]);

    const [inputChangeName, setInputChangeName] = useState<boolean[]>();

    const handleColapseList = (check: any, set: any) => {
        if (check == ">") {
            set("v");
        } else {
            set(">");
        }
    };

    const handleShowTerminal = () => {
        showTerminal ? setShowTerminal(false) : setShowTerminal(true);
    };

    const handleFileInput = (e: any) => {
        var files = e.target.files;
        console.log(files);
        var filesArr = Array.prototype.slice.call(files);
        setSaveFiles([...filesArr]);
    };

    const changeCode = (index: number) => {
        if (index === selectedFile)
            setInputChangeName(
                inputChangeName?.map((item, i) => {
                    if (i === index) return true;
                    else return false;
                })
            );
        else setSelectedFile(index);
    };

    const newFile = () => {
        setFiles([...files, { name: "newFile.txt", text: "" }]);
        setSelectedFile(files.length);
    };

    const handleChangeName = (e: any, index: number) => {
        e.preventDefault();
        const newFiles = files.map((item, i) => {
            if (i === index) {
                item.name = e.target[0].value;
                return item;
            } else return item;
        });
        setFiles(newFiles);
    };

    const handleAnalizeCode = () => {
        if (files[selectedFile]) {
            setShowTerminal(true);
            setCode("Analizando...");
            const results = analize(files[selectedFile].text);
            setCode("Código procesado:  " + results.textProcessed);
        }
    };

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
                    setFiles([
                        ...files,
                        { name: saveFiles[0].name, text: text },
                    ]);
                }
            }
        })();
    }, [saveFiles]);

    useEffect(() => {
        const status: boolean[] = [];
        files.forEach((file) => status.push(false));
        setInputChangeName(status);
    }, [files, setFiles]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Lexic Analitic</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div className={styles.titleheader}>
                    <span>File</span>
                    <div className={styles.fileDiv}>
                        <input
                            type="file"
                            onChange={handleFileInput}
                            id="file"
                            className={styles.inputfile}
                        />
                        <label htmlFor="file">
                            <Image src={plus} alt="" width="30" />
                        </label>
                    </div>
                </div>
                <div>
                    <button>Buscar Archivo</button>
                </div>
                <div className={styles.controllers}>
                    <Image
                        src={play}
                        alt=""
                        width="30"
                        onClick={(e) => handleAnalizeCode()}
                    />
                    <Image src={stop} alt="" width="30" />
                    <Image
                        src={terminal}
                        alt=""
                        onClick={(e) => handleShowTerminal()}
                        width="30"
                    />
                </div>
            </header>

            <main>
                <div className={styles.center}>
                    <div className={styles.explorer}>
                        <span
                            onClick={(e) => newFile()}
                            className={styles.newFile}
                        >
                            Crear nuevo Archivo
                        </span>
                        <h3 className={styles.h3}>Explorer</h3>
                        <button
                            onClick={(e) =>
                                handleColapseList(colapseOpens, setColapseOpens)
                            }
                        >
                            {colapseOpens} EDITORES ABIERTOS
                        </button>
                        <div
                            className={
                                colapseOpens === ">" ? styles.hide : styles.show
                            }
                        >
                            {files?.map((file: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className={styles.file}
                                        onClick={(e) => changeCode(index)}
                                    >
                                        {inputChangeName &&
                                        inputChangeName[index] ? (
                                            <form
                                                onSubmit={(e) =>
                                                    handleChangeName(e, index)
                                                }
                                            >
                                                <input
                                                    type="text"
                                                    defaultValue={file.name}
                                                    name={`file${index}`}
                                                />
                                            </form>
                                        ) : (
                                            <input
                                                type={"button"}
                                                value={file.name}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {/* <button
                            onClick={(e) =>
                                handleColapseList(
                                    colapseFolders,
                                    setColapseFolders
                                )
                            }
                        >
                            {`${colapseFolders}     ${folder}`}
                        </button>
                        <div></div> */}
                    </div>
                    {files.map((file: any, index: number) => {
                        return (
                            <TextEditor
                                key={index}
                                display={selectedFile !== index ? false : true}
                                editor={file}
                                saveFiles={saveFiles}
                                setSaveFiles={setSaveFiles}
                                files={files}
                                index={index}
                                onChange={setFiles}
                            />
                        );
                    })}
                </div>
            </main>

            {files[0] && showTerminal && (
                <div className={styles.terminal}>
                    <div>
                        <span>Terminal</span>
                        <div className={styles.code}>
                            {code ? code : "Compilando..."}
                        </div>
                    </div>
                </div>
            )}
            {/* <footer className={styles.footer}>
                <span>{`Lín. ${linea}, col. ${columna}`}</span>
            </footer> */}
        </div>
    );
}
