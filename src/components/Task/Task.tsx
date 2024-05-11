
import {Container,CircleInput} from './Styles';
import { Trash } from '@phosphor-icons/react';

type Props = {
    content: string;
}

export function Task ({content}: Props){
    return (
        <Container>
            <label htmlFor='checkbox'/>
            <input readOnly type="checkbox" name="" id="" />
            <CircleInput> </CircleInput>
            <p> {content} </p>
            <Trash size={20} />
        </Container>
    );
}