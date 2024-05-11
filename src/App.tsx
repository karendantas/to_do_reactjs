import { Header, Container,TaskInputContainer,Input,Button, TaskContainer,TaskInfos, TasksList, EmptyContent } from './AppStyles';
import { PlusCircle } from '@phosphor-icons/react';

import { Task } from './components/Task/Task';
import { ChangeEvent, FormEvent, useState } from 'react';
import nextId from 'react-id-generator';


export interface TaskProps {
  id: string;
  isChecked: boolean;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [tasksCount, setTasksCount] = useState(tasks.length);
  const [finishedTasks, setFinishedTasks] = useState(0);
  const [newTaskText, setNewTaskText] =  useState('');


  const isListTaskEmpty = tasks.length === 0;
  const isNewTaskTextInputEmpty = newTaskText.length === 0;

  //pegando texto do input e atualizando seu estado
  function handleGetNewTaskText(event: ChangeEvent<HTMLInputElement>){
    setNewTaskText(event.target.value);
  }
  //criando uma nova task com o valor do estado do input
  function handleAddNewTask( event:FormEvent ){
      event.preventDefault();

      const newTask = {
                      id: nextId(),
                      isChecked: false,
                      content: newTaskText,
                      };

      setTasks([...tasks, newTask]);
      setTasksCount( (state) => {return state + 1});
      setNewTaskText('');
  }

  function onDeleteTask (TaskId: string){
    const tasksWhithoutDeletedOne = tasks.filter( (task) => {
        return task.id !== TaskId;
    })
    setTasks(tasksWhithoutDeletedOne);
    setTasksCount( (state) => {return state - 1});
  }
  function onCheckTask(taskToCheckId:string){
    const updateTask = tasks.filter( (task) =>{
      if ( task.id === taskToCheckId ){
          task.isChecked = true;
      }
      return task
    })
    setTasks(updateTask);
   
  }

  return (
    <>
      <Header>
        <img src="src/assets/images/Logo.png" alt ="Logo escrito to-do com as cores roxas e azuis e um foguete ao lado"/>
      </Header>

      <Container>
          <form onSubmit={handleAddNewTask}> 
            <TaskInputContainer>
                <Input type="text" 
                      placeholder='Adicione uma nova tarefa' 
                      onChange={handleGetNewTaskText}  
                      value = {newTaskText}   
                />
                <Button disabled = {isNewTaskTextInputEmpty}>Criar <PlusCircle size={20}/> </Button>
            </TaskInputContainer>
          </form>

          <TaskContainer>
              <div>
                  <TaskInfos>
                    <strong >Tarefas criadas</strong>
                    <span>{tasksCount}</span>
                  </TaskInfos>

    
                  <TaskInfos>
                    <strong>Concuídas</strong>
                    <span>{finishedTasks} de {tasksCount}</span>
                  </TaskInfos>
              </div>

              <TasksList>
                    {
                      isListTaskEmpty 
                      ?
                          <EmptyContent>
                            <img src="src/assets/images/Clipboard.png" alt="Uma imagem de uma prancheta" />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                          </EmptyContent>
                      :
                      tasks.map ((task)=> {
                        return  <Task
                                    key={nextId()}
                                    data={task}
                                    onDelete={ () => onDeleteTask(task.id)}
                                    onCheck= {() => onCheckTask(task.id)}
                                />
                      })
                    }
                     

              </TasksList>

          </TaskContainer>
      </Container>
    
    </>
    
     
    
   
  )
}

export default App
