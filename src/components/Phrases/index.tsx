import { Dashboard } from "../Dashboard";
import { Container } from "./styles";

interface PhrasesProps {
    handleTrueStateName: () => void;
    stateName: boolean
}

export function Phrases( { handleTrueStateName, stateName }: PhrasesProps ) {
    return (
        <Container>
            <Dashboard handleTrueStateName={handleTrueStateName} stateName={stateName}/>
        </Container>
    );
}