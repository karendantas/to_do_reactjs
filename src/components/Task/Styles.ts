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

   input{

        display:none;
    }

    button {
        background-color: transparent;
        border: none;
        color: var(--gray-300);
    }
`;


export const CircleInput = styled.span`
    cursor: pointer;
    border-radius: 100%;
    height: 1.125rem;
    width: 1.125rem;

    transition: 0.2s all;

    border: 2px solid var(--blue);
    
`

export const Checked = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 100% ;

    background-color: var(--purple);

    display: flex;
    align-items: center;
    justify-content: center;
 
    opacity: ${ props => (props.check === true ? 1 : 0)};
`