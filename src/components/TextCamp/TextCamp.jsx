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

export function CardPergunta({ question, onClick }) {
  return (
    <SCTextCampPergunta>
      <p>{question}</p>
      <img src={setaVirar} alt="icone" onClick={onClick} />
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
      showPergunta: false,
      showResposta: false
    },
    {
      id: 2,
      texto: 'Pergunta 2',
      question: 'O React é __',
      answer: 'Uma biblioteca JavaScript para construção de interfaces',
      showPergunta: false,
      showResposta: false
    },
    {
      id: 3,
      texto: 'Pergunta 3',
      question: 'Componentes devem iniciar com __',
      answer: 'Letra maiúscula',
      showPergunta: false,
      showResposta: false
    },
    {
      id: 4,
      texto: 'Pergunta 4',
      question: 'Podemos colocar __ dentro do JSX',
      answer: 'expressões',
      showPergunta: false,
      showResposta: false
    },
    {
      id: 5,
      texto: 'Pergunta 5',
      question: 'O ReactDOM nos ajuda __',
      answer: 'Interagindo com a DOM para colocar componentes React na mesma',
      showPergunta: false,
      showResposta: false
    },
    {
      id: 6,
      texto: 'Pergunta 6',
      question: 'Usamos o npm para __',
      answer: 'Gerenciar os pacotes necessários e suas dependências',
      showPergunta: false,
      showResposta: false
    },
    {
      id: 7,
      texto: 'Pergunta 7',
      question: 'Usamos props para __',
      answer: 'Passar diferentes informações para componentes',
      showPergunta: false,
      showResposta: false
    },
    {
      id: 8,
      texto: 'Pergunta 8',
      question: 'Usamos estado (state) para __',
      answer:
        'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
      showPergunta: false,
      showResposta: false
    }
  ])

  const handleCardPerguntaClick = id => {
    const updatedCamps = camps.map(camp => {
      if (camp.id === id) {
        return { ...camp, showPergunta: true, showResposta: false }
      }
      return camp
    })

    setCamps(updatedCamps)
  }

  const handleCardRespostaClick = id => {
    const updatedCamps = camps.map(camp => {
      if (camp.id === id) {
        return { ...camp, showPergunta: false, showResposta: true }
      }
      return camp
    })

    setCamps(updatedCamps)
  }

  return (
    <>
      {camps.map(camp => (
        <div key={camp.id}>
          {camp.showResposta && camp.showPergunta == false ? (
            <CardResposta answer={camp.answer} />
          ) : camp.showResposta == false && camp.showPergunta ? (
            <CardPergunta
              question={camp.question}
              onClick={() => handleCardRespostaClick(camp.id)}
            />
          ) : (
            <CardVazio
              texto={camp.texto}
              onClick={() => handleCardPerguntaClick(camp.id)}
            />
          )}
        </div>
      ))}
    </>
  )
}
