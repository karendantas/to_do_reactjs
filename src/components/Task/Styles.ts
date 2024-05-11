import styled from 'styled-components';

export const Container = styled.div`
    height: 4.5rem;
    padding: 1rem ;
    background-color: var(--gray-500);

    border-radius: 8px;
    border: 1px solid var(--gray-400);

    margin-bottom: 0.75rem;

    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    p{  
        color: var(--gray-100);
        font-size: 0.875rem;
        text-align: start;
        flex:1;
    }
    label{
        display: flex;
        padding: 3px;
        align-items: center;
        gap: 0.75rem;
    }

    label, input{
        display: none;
    }

    button {
        background-color: transparent;
        border: none;
        color: var(--gray-300);
    }
`;


export const CircleInput = styled.span`
  border-radius: 100%;
  height: 1.125rem;
  width: 1.125rem;
  border: 2px solid var(--blue-dark);
`