import setaPlay from '../assets/seta_play.png'
import setaVirar from '../assets/seta_virar.png'
import styled from 'styled-components'

const camps = [
  {
    id: 1,
    texto: 'Pergunta 1',
    question: 'O que é JSX?',
    answer: 'Uma extensão da linguagem JavaScript'
  },
  {
    id: 2,
    texto: 'Pergunta 2',
    question: 'O React é __',
    answer: 'Uma biblioteca JavaScript para construção de interfaces'
  },
  {
    id: 3,
    texto: 'Pergunta 3',
    question: 'Componentes devem iniciar com __',
    answer: 'Letra maiúscula'
  },
  {
    id: 4,
    texto: 'Pergunta 4',
    question: 'Podemos colocar __ dentro do JSX',
    answer: 'expressões'
  },
  {
    id: 5,
    texto: 'Pergunta 5',
    question: 'O ReactDOM nos ajuda __',
    answer: 'Interagindo com a DOM para colocar componentes React na mesma'
  },
  {
    id: 6,
    texto: 'Pergunta 6',
    question: 'Usamos o npm para __',
    answer: 'Gerenciar os pacotes necessários e suas dependências'
  },
  {
    id: 7,
    texto: 'Pergunta 7',
    question: 'Usamos props para __',
    answer: 'Passar diferentes informações para componentes'
  },
  {
    id: 8,
    texto: 'Pergunta 8',
    question: 'Usamos estado (state) para __',
    answer:
      'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
  }
]

export function CardVazio() {
  return (
    <>
      {camps.map(camp => (
        <SCTextCampVazio key={camp.texto}>
          <p>{camp.texto}</p>
          <img src={setaPlay} alt="icone" />
        </SCTextCampVazio>
      ))}
    </>
  )
}

export function CardPergunta() {
  return (
    <>
      {camps.map(camp => (
        <SCTextCampPergunta key={camp.texto}>
          <p>{camp.question}</p>
          <img src={setaVirar} alt="icone" />
        </SCTextCampPergunta>
      ))}
    </>
  )
}

export default function TextCamp() {
  return (
    <>
      {/* <CardVazio /> */}
      <CardPergunta />
    </>
  )
}

const SCTextCampVazio = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 300px;
  height: 65px;

  padding: 0 20px;
  margin-top: 25px;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  img {
    width: 20px;
    height: 23px;
    color: #333333;
  }

  p {
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;

    color: #333333;
  }
`

const SCTextCampPergunta = styled.div`
  position: relative;
  width: 299px;
  height: 131px;

  margin: 0 auto;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */

  padding: 0 20px;
  margin-top: 25px;

  background-color: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  p {
    position: absolute;
    top: 10px;
    left: 10px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;

    color: #333333;
  }

  img {
    position: absolute;
    width: 30px;
    height: 20px;

    bottom: 10px;
    right: 10px;
  }
`
