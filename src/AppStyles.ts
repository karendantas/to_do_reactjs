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
    flex: 1;
   
    transform: translateY(-50%);

`

export const Input = styled.input`
    width: 39.875rem;
    background-color: var(--gray-500);
    
    padding: 1rem;

    border-radius: 8px;
    border: none;
    outline: none;
    
    color: var(--gray-100);
`
export const Button = styled.button`
    width: 5.625rem;
    background-color: var(--blue);

    border:none;
    outline: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: var(--gray-100);
    font-weight: bold;
`;