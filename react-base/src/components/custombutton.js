import styled from 'styled-components'

export const CustomButton = styled.button`
    background-color: transparent;
    color: white;
    border: ${props => props.value === "get" ? '2px solid #4CAF50' : '2px solid #f44336'};
    border-radius: 5px;
    padding: 10px;
    margin-right: 5px;
`