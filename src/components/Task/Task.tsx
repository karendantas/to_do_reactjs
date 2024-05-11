
import {Container,CircleInput} from './Styles';
import { Trash } from '@phosphor-icons/react';

type Props = {
    content: string;
    onDelete: (task: string) => void;
}

export function Task ({content, onDelete}: Props){

    function handleRemoveTask(){
        onDelete(content);
    }


    return (
        <Container>
            <label htmlFor='checkbox'/>
            <input readOnly type="checkbox" name="" id="" />
            <CircleInput> </CircleInput>
            <p> {content} </p>
            <button onClick={handleRemoveTask} > <Trash size={20} /> </button>
           
        </Container>
    );
}