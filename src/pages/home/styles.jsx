import styled from 'styled-components'

export const AddButton = styled.button`
    background: #6cf000;
    color: #000;
    height: 35px;
    width: 70px;
    border: none;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    &:hover {
    opacity: 0.8;

    }
    `
export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-itens: center;
    height: 50px;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;
    background: #fff;
    p{
    text-transform: capitalize;
    font-weight: bold;
    }
    `
export const TrashButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    `
export const Container = styled.div`
    background: #fff;
    padding: 30px;
    border-radius: 10px;

    input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
    }`