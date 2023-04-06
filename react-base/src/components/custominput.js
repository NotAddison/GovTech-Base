import styled from 'styled-components'

export const CustomInput = styled.input`
    background-color: transparent;
    color: white;
    border: 2px solid #7E7E7E;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0px;
    

    /* When active */
    &:focus {
        transition: all 0.3s ease-in-out;
        outline: none;
        border-left: 2px solid;
        border-color: #f44336;
    }
`