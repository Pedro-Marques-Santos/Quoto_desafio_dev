import { useContext, useEffect, useState } from "react";
import { PhrasesContext } from "../../context/PhrasesContext";
import { Container, Icon, Name, Random } from "./styles";

interface HeaderProps {
    stateName: boolean;
    handleFalseStateName: () => void;
}

export function Header( { stateName, handleFalseStateName }: HeaderProps ) {

    const phrasesData = useContext( PhrasesContext )

    const [ autor, setAutor ] = useState('')

    useEffect(() => {
        if( 
            phrasesData?.newData?.quoteAuthor != null && phrasesData?.newData?.quoteAuthor != undefined
            ) {
            setAutor(phrasesData.newData.quoteAuthor)
        }
    }, [phrasesData])

    function newRandomForPhrases() {
        handleFalseStateName()
        if( phrasesData ) {
            phrasesData.newRandom()
        }
    }

    return (
        <Container>
            <Random onClick={newRandomForPhrases}>
                <div>random</div>
                <Icon className="material-symbols-outlined">
                    autorenew
                </Icon>
            </Random>
            <Name stateName={stateName}>{autor}</Name>
        </Container>
    );
}