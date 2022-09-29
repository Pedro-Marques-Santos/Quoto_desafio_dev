import { useContext, useEffect, useState } from "react";
import { PhrasesContext } from "../../context/PhrasesContext";
import { Button, Content } from "./styles";

interface DashboardProps {
    handleTrueStateName: () => void;
    stateName: boolean;
}

interface Element {
    quoteAuthor: string;
    quoteGenre: string;
    quoteText: string;
    _id: string;
}

export function Dashboard({ handleTrueStateName, stateName }: DashboardProps) {

    const phrasesContext = useContext( PhrasesContext )

    const [ autor, setAutor ] = useState('')
    const [ texto, setTexto ] = useState('')
    const [ genre, setGenre ] = useState('')

    const [ phrasesAutorFinal, setPhrasesAutorFinal ] = useState([])

    useEffect(() => {
        if( 
            phrasesContext?.newData?.quoteAuthor != null && phrasesContext?.newData?.quoteAuthor != undefined  &&
            phrasesContext.newData.quoteText != null && phrasesContext.newData.quoteText != undefined &&
            phrasesContext.newData.quoteGenre != null && phrasesContext.newData.quoteGenre != undefined
            ) {
            setAutor(phrasesContext.newData.quoteAuthor)
            setTexto(phrasesContext.newData.quoteText)
            setGenre(phrasesContext.newData.quoteGenre)
        }
    }, [phrasesContext])

    async function handleSearch() {
        handleTrueStateName()
        if( phrasesContext?.phrasesAutor ) {
            let phrasesAutor = await phrasesContext.phrasesAutor(autor)
            setPhrasesAutorFinal(phrasesAutor.data)
        }
    }

    return (
        <> 
            {
                !stateName &&
                <Content>
                    <div>{texto}</div>
                </Content>
            }
            {
                stateName &&
                phrasesAutorFinal.map( (element: Element) => {
                    return(
                        <Content key={element._id}>
                            <div>{element.quoteText}</div>
                        </Content>
                    )
                })
            }
            <Button onClick={handleSearch} stateName={stateName}>
                <span>
                    <div className="name">{autor}</div>
                    <div className="job">{genre}</div> 
                </span>
                <h1 className="material-symbols-outlined">
                    arrow_right_alt
                </h1>
            </Button>
        </>
    );
}