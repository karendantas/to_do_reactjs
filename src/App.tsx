import { Header, Container,TaskInputContainer,Input,Button } from './AppStyles';
import { PlusCircle } from '@phosphor-icons/react';

function App() {
  return (
    <>
      <Header>
        <img src="src/assets/images/Logo.png"/>
      </Header>

      <Container>
          <TaskInputContainer>
                <Input type="text" placeholder='Adicione uma nova tarefa' />
                <Button>Criar <PlusCircle size={20}/> </Button>
          </TaskInputContainer>
      </Container>
    
    </>
    
     
    
   
  )
}

export default App
