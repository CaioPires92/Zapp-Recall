import logo from '../assets/logo.png'
import styled from 'styled-components'
import TextCamp from './TextCamp/TextCamp'
import Footer from './Footer'
import { useState } from 'react'
import setaVirar from '../assets/seta_virar.png'

export default function Card() {
  const [camps, setCamps] = useState([
    {
      id: 1,
      texto: 'Pergunta 1',
      question: 'O que é JSX?',
      answer: 'Uma extensão da linguagem JavaScript',
      showPergunta: false,
      showResposta: false,
      image: setaVirar,
      selected: false
    },
    {
      id: 2,
      texto: 'Pergunta 2',
      question: 'O React é __',
      answer: 'Uma biblioteca JavaScript para construção de interfaces',
      showPergunta: false,
      showResposta: false,
      image: setaVirar,
      selected: false
    },
    {
      id: 3,
      texto: 'Pergunta 3',
      question: 'Componentes devem iniciar com __',
      answer: 'Letra maiúscula',
      showPergunta: false,
      showResposta: false,
      image: setaVirar,
      selected: false
    },
    {
      id: 4,
      texto: 'Pergunta 4',
      question: 'Podemos colocar __ dentro do JSX',
      answer: 'expressões',
      showPergunta: false,
      showResposta: false,
      image: setaVirar,
      selected: false
    },
    {
      id: 5,
      texto: 'Pergunta 5',
      question: 'O ReactDOM nos ajuda __',
      answer: 'Interagindo com a DOM para colocar componentes React na mesma',
      showPergunta: false,
      showResposta: false,
      image: setaVirar,
      selected: false
    },
    {
      id: 6,
      texto: 'Pergunta 6',
      question: 'Usamos o npm para __',
      answer: 'Gerenciar os pacotes necessários e suas dependências',
      showPergunta: false,
      showResposta: false,
      image: setaVirar,
      selected: false
    },
    {
      id: 7,
      texto: 'Pergunta 7',
      question: 'Usamos props para __',
      answer: 'Passar diferentes informações para componentes',
      showPergunta: false,
      showResposta: false,
      image: setaVirar,
      selected: false
    },
    {
      id: 8,
      texto: 'Pergunta 8',
      question: 'Usamos estado (state) para __',
      answer:
        'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
      showPergunta: false,
      showResposta: false,
      image: setaVirar,
      selected: false
    }
  ])

  const [completedCount, setCompletedCount] = useState(0)

  return (
    <>
      <SCCard>
        <header>
          <img src={logo} alt="Logo" />
          <h1>ZapRecall</h1>
        </header>
        <div className="container" data-test="flashcard">
          <TextCamp
            camps={camps}
            setCamps={setCamps}
            setCompletedCount={setCompletedCount}
          />
        </div>
      </SCCard>
      <Footer
        data-test="footer"
        completedCount={completedCount}
        totalQuestions={camps.length}
      />
    </>
  )
}

const SCCard = styled.div`
  margin-inline: auto;

  width: 375px;
  /* height: 667px; */
  height: auto;
  background: #fb6b6b;
  padding-bottom: 48px;

  border: 1px solid #dbdbdb;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 48px;
  }

  img {
    width: 52px;
    height: 60px;
  }

  h1 {
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;

    color: #ffffff;

    transform: rotate(0.58deg);
  }
`
