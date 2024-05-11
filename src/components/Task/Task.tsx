
import {Container,CircleInput,Checked} from './Styles';
import { Trash, Check } from '@phosphor-icons/react';

import { TaskProps } from '../../App';

type Props = {
    data: TaskProps;
    onDelete: (task: string) => void;
    onCheck: (task:string) => void;
}

export function Task ({data, onDelete, onCheck}: Props){


    function handleRemoveTask(){
        onDelete(data.id);
    }
    function handleFinishTask(){
        onCheck(data.id);
    }


    return (
        <Container>
            <input readOnly type="radio" name="" id="" />
            <CircleInput onClick={handleFinishTask}>
                <Checked check = {data.isChecked} > <Check size={10}/> </Checked>
            </CircleInput>
            <p> {data.content} </p>
            <button onClick={handleRemoveTask} > <Trash size={20} /> </button>
           
        </Container>
    );
}