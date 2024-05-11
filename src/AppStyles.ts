import styled from 'styled-components';

export const Container = styled.main`
    max-width: 46rem;
    width: 100%;

    margin: 0 auto;

`
export const Header = styled.header`
    height: 12.5rem ;
    background-color: var(--gray-700);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const TaskInputContainer = styled.div`
    width: 100%;
   
    height: 3.375rem;

    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    transform: translateY(-50%);

`

export const Input = styled.input`
    flex:1;
    background-color: var(--gray-500);
    
    padding: 1rem;

    border-radius: 8px;
    border: none;
    outline: none;
    
    color: var(--gray-100);
`
export const Button = styled.button`
    font-size: 14px;
    background-color: var(--blue-dark);

    border:none;
    outline: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px;
    gap: 0.5rem;

    color: var(--gray-100);
    font-weight: bold;

    &:hover{
        cursor: pointer;
    }
    &:disabled{
        cursor: not-allowed;
    }
`;

export const TaskContainer = styled.div`
    margin-top: 5.6875rem;
    
    display: flex;
    flex-direction: column;

    >div {
        display: flex;
        justify-content: space-between;
    }
`
export const TaskInfos =  styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    strong{
        color: var(--blue);
    }
    
    span{
        font-size: 12px;
        font-family: bold;
        background-color: var(--gray-400);
        padding: 2px 8px;
        border-radius: 999px;
        align-items: center;
    }
`

export const TasksList = styled.div`
        margin-top: 1.5rem;
        padding-top: 1.5rem;

        border-top: 2px solid var(--gray-400);
        display: flex;
        flex-direction: column;

    
`;
export const EmptyContent =  styled.div`
    width: 100%;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    span { color: var(--gray-300)}
    strong{
        color: var(--gray-300);
        margin-top: 1rem;
    }
`;