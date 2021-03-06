import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem;

    border: 1px solid #D7D7D7;
    background: #E7E9EE;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: .25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
`

interface RadioBoxProps {
  readonly isActive: boolean,
  readonly activeColor: 'green' | 'red'
}

const colors = {
  green: '#D0DFD7',
  red: '#E6D4D7'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
    border: 1px solid #D7D7D7;
    border-radius: .25rem;

    background: ${(props) => props.isActive ? colors[props.activeColor] : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color .2s;

    &:hover {
      border-color: #BBB;
    }

    img {
      height: 20px;
      width: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-color);
    }
`
