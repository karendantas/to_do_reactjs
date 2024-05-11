
import {Container,CircleInput} from './Styles';
import { Trash } from '@phosphor-icons/react';


export function Task (){
    return (
        <Container>
            <label htmlFor='checkbox'/>
            <input readOnly type="checkbox" name="" id="" />
            <CircleInput> </CircleInput>
            <p> Texto vem aqui </p>
            <Trash size={20} />
        </Container>
    );
}