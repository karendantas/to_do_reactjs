import { Header, Container,TaskInputContainer,Input,Button, TaskContainer,TaskInfos, TasksList, EmptyContent } from './AppStyles';
import { PlusCircle } from '@phosphor-icons/react';

import { Task } from './components/Task/Task';

function App() {
  return (
    <>
      <Header>
        <img src="src/assets/images/Logo.png" alt ="Logo escrito to-do com as cores roxas e azuis e um foguete ao lado"/>
      </Header>

      <Container>
          <TaskInputContainer>
                <Input type="text" placeholder='Adicione uma nova tarefa' />
                <Button>Criar <PlusCircle size={20}/> </Button>
          </TaskInputContainer>

          <TaskContainer>
              <div>
                  <TaskInfos>
                    <strong >Tarefas criadas</strong>
                    <span>0</span>
                  </TaskInfos>

    
                  <TaskInfos>
                    <strong>Concuídas</strong>
                    <span>0</span>
                  </TaskInfos>
              </div>

              <TasksList>
                    <EmptyContent>
                        <img src="src/assets/images/Clipboard.png" alt="Uma imagem de uma prancheta" />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </EmptyContent>

                      <Task/>

              </TasksList>

          </TaskContainer>
      </Container>
    
    </>
    
     
    
   
  )
}

export default App
