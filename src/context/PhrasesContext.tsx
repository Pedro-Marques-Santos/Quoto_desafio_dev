import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface PhrasesContext {
    newData: PhrasesElements | null;
    phrasesAutor: (autor: string) => Promise<TPhrasesAutor>;
    newRandom: () => void;
}

type PhrasesElements = {
    quoteAuthor: string;
    quoteGenre: string;
    quoteText: string;
}

type NewData = {
    data: []
}

type TPhrasesAutor = {
    data: []
}

interface PhrasesProviderProps {
    children: ReactNode;
}

export const PhrasesContext = createContext<PhrasesContext | null>(null);

export function PhrasesProvider( { children }: PhrasesProviderProps ) {

    const [ newData, setNewData ] = useState<PhrasesElements | null>(null)
    const [ random, setRandom ] = useState(1000);

    useEffect(() => {
        setRandom( Math.floor(Math.random() * (50 - 1 + 1)) + 1 )
    }, []);

    function newRandom() {
        setRandom( Math.floor(Math.random() * (50 - 1 + 1)) + 1 )
    }

    useEffect(() => {
        if( random != undefined ) {
            fetch('https://quote-garden.herokuapp.com/api/v3/quotes/?limit=50&genre=business')
            .then((response) => response.json())
            .then((phraseData: NewData ) => setNewData(phraseData.data[random]));
        }
    }, [random]);

    if(!newData) {
        return <></>;
    }

    async function phrasesAutor(autor: string) {
        let response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/?author=' + autor);
        let data = await response.json();
        return data;
    }

    return(
        <PhrasesContext.Provider value={ { newData, phrasesAutor, newRandom } }>
            { children }
        </PhrasesContext.Provider>
    );
}