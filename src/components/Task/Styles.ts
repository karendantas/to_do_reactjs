import styled from 'styled-components';

interface ButtonCheckProps {
    check: boolean;
}

export const Container = styled.div<ButtonCheckProps>`
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
        color: ${ props => props.check === true ? 'var(--gray-300)': 'var(--gray-100)'};
        text-decoration: ${ props => props.check === true ? 'line-through': 'none'};
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

export const CircleInput = styled.span<ButtonCheckProps>`
    cursor: pointer;
    border-radius: 100%;
    height: 1.125rem;
    width: 1.125rem;

    transition: 0.2s all;

    border: 2px solid ${ props => props.check === true ? 'var(--pruple)' : 'var(--blue)'};
    
`

export const Checked = styled.div<ButtonCheckProps>`
    width: 100%;
    height: 100%;
    border-radius: 100% ;

    background-color: var(--purple);

    display: flex;
    align-items: center;
    justify-content: center;
 
    opacity: ${ props => (props.check === true ? 1 : 0)};
`