import { useState } from 'react'
import CardVazio from '../CardVazio'
import CardResposta from '../CardResposta'
import CardPergunta from '../CardPergunta'
import setaVirar from '../../assets/seta_virar.png'
import setaPlay from '../../assets/seta_play.png'

export default function TextCamp() {
  const [camps, setCamps] = useState([
    {
      id: 1,
      texto: 'Pergunta 1',
      question: 'O que é JSX?',
      answer: 'Uma extensão da linguagem JavaScript',
      showPergunta: false,
      showResposta: false,
      image: setaVirar
    },
    {
      id: 2,
      texto: 'Pergunta 2',
      question: 'O React é __',
      answer: 'Uma biblioteca JavaScript para construção de interfaces',
      showPergunta: false,
      showResposta: false,
      image: setaVirar
    },
    {
      id: 3,
      texto: 'Pergunta 3',
      question: 'Componentes devem iniciar com __',
      answer: 'Letra maiúscula',
      showPergunta: false,
      showResposta: false,
      image: setaVirar
    },
    {
      id: 4,
      texto: 'Pergunta 4',
      question: 'Podemos colocar __ dentro do JSX',
      answer: 'expressões',
      showPergunta: false,
      showResposta: false,
      image: setaVirar
    },
    {
      id: 5,
      texto: 'Pergunta 5',
      question: 'O ReactDOM nos ajuda __',
      answer: 'Interagindo com a DOM para colocar componentes React na mesma',
      showPergunta: false,
      showResposta: false,
      image: setaVirar
    },
    {
      id: 6,
      texto: 'Pergunta 6',
      question: 'Usamos o npm para __',
      answer: 'Gerenciar os pacotes necessários e suas dependências',
      showPergunta: false,
      showResposta: false,
      image: setaVirar
    },
    {
      id: 7,
      texto: 'Pergunta 7',
      question: 'Usamos props para __',
      answer: 'Passar diferentes informações para componentes',
      showPergunta: false,
      showResposta: false,
      image: setaVirar
    },
    {
      id: 8,
      texto: 'Pergunta 8',
      question: 'Usamos estado (state) para __',
      answer:
        'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
      showPergunta: false,
      showResposta: false,
      image: setaVirar
    }
  ])

  const [buttonValue, setButtonValue] = useState('')
  const [selectedCampId, setSelectedCampId] = useState(null)
  const [showCampVazio, setShowCampVazio] = useState(false)

  function handleClick(buttonValue, color, newImage) {
    setButtonValue(buttonValue)
    setShowCampVazio(true)
    const updatedCamps = camps.map(camp => {
      if (camp.id === selectedCampId) {
        return {
          ...camp,
          color,
          showPergunta: false,
          showResposta: false,
          image: newImage
        }
      }
      return camp
    })
    setCamps(updatedCamps)
  }

  const handleCardPerguntaClick = id => {
    if (id === selectedCampId) {
      return
    }

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
          {camp.showResposta === true && camp.showPergunta === false ? (
            <CardResposta answer={camp.answer} handleClick={handleClick} />
          ) : camp.showResposta === false && camp.showPergunta === true ? (
            <CardPergunta
              question={camp.question}
              onClick={() => handleCardRespostaClick(camp.id)}
            />
          ) : (
            <CardVazio
              texto={camp.texto}
              color={camp.id === selectedCampId ? camp.color : 'inherit'}
              showLineThrough={camp.id === selectedCampId && showCampVazio}
              imageSrc={camp.id === selectedCampId ? camp.image : setaPlay}
              buttonValue={buttonValue}
              onClick={() => {
                handleCardPerguntaClick(camp.id)
                setSelectedCampId(camp.id)
              }}
            />
          )}
        </div>
      ))}
    </>
  )
}
