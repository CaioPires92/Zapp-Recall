import { useState } from 'react'
import setaPlay from '../../assets/seta_play.png'
import setaVirar from '../../assets/seta_virar.png'

import {
  SCTextCampVazio,
  SCTextCampPergunta,
  SCCampResposta,
  ButtonContainer,
  RedButton,
  OrangeButton,
  GreenButton
} from './Styles'

export function CardVazio({ texto, onClick }) {
  return (
    <SCTextCampVazio>
      <p>{texto}</p>
      <img src={setaPlay} alt="icone" onClick={onClick} />
    </SCTextCampVazio>
  )
}

export function CardPergunta({ question }) {
  return (
    <SCTextCampPergunta>
      <p>{question}</p>
      <img src={setaVirar} alt="icone" />
    </SCTextCampPergunta>
  )
}

export function CardResposta({ answer }) {
  return (
    <>
      <SCCampResposta>
        <p>{answer}</p>
        <ButtonContainer>
          <RedButton>Não lembrei</RedButton>
          <OrangeButton>Quase não lembrei</OrangeButton>
          <GreenButton>Zap!</GreenButton>
        </ButtonContainer>
      </SCCampResposta>
    </>
  )
}

export default function TextCamp() {
  const [camps, setCamps] = useState([
    {
      id: 1,
      texto: 'Pergunta 1',
      question: 'O que é JSX?',
      answer: 'Uma extensão da linguagem JavaScript',
      showPergunta: false
    },
    {
      id: 2,
      texto: 'Pergunta 2',
      question: 'O React é __',
      answer: 'Uma biblioteca JavaScript para construção de interfaces',
      showPergunta: false
    },
    {
      id: 3,
      texto: 'Pergunta 3',
      question: 'Componentes devem iniciar com __',
      answer: 'Letra maiúscula',
      showPergunta: false
    },
    {
      id: 4,
      texto: 'Pergunta 4',
      question: 'Podemos colocar __ dentro do JSX',
      answer: 'expressões',
      showPergunta: false
    },
    {
      id: 5,
      texto: 'Pergunta 5',
      question: 'O ReactDOM nos ajuda __',
      answer: 'Interagindo com a DOM para colocar componentes React na mesma',
      showPergunta: false
    },
    {
      id: 6,
      texto: 'Pergunta 6',
      question: 'Usamos o npm para __',
      answer: 'Gerenciar os pacotes necessários e suas dependências',
      showPergunta: false
    },
    {
      id: 7,
      texto: 'Pergunta 7',
      question: 'Usamos props para __',
      answer: 'Passar diferentes informações para componentes',
      showPergunta: false
    },
    {
      id: 8,
      texto: 'Pergunta 8',
      question: 'Usamos estado (state) para __',
      answer:
        'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
      showPergunta: false
    }
  ])

  const handleCardClick = id => {
    const updatedCamps = camps.map(camp =>
      camp.id === id ? { ...camp, showPergunta: true } : camp
    )
    setCamps(updatedCamps)
  }

  return (
    <>
      {camps.map(camp => (
        <div key={camp.id}>
          {camp.showPergunta ? (
            // <CardPergunta question={camp.question} />
            <CardResposta answer={camp.answer} />
          ) : (
            <CardVazio
              texto={camp.texto}
              onClick={() => handleCardClick(camp.id)}
            />
          )}
        </div>
      ))}
    </>
  )
}
