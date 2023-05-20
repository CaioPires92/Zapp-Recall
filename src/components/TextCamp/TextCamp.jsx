import { useState } from 'react'
import CardVazio from '../CardVazio'
import CardResposta from '../CardResposta'
import CardPergunta from '../CardPergunta'
import setaPlay from '../../assets/seta_play.png'

export default function TextCamp({ camps, setCamps, setCompletedCount }) {
  const [buttonValue, setButtonValue] = useState('')
  const [selectedCampId, setSelectedCampId] = useState(null)
  const [showCampVazio, setShowCampVazio] = useState(false)

  function handleClick(buttonValue, color, newImage) {
    setCompletedCount(prevCount => prevCount + 1)

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
        return {
          ...camp,
          showPergunta: true,
          showResposta: false,
          selected: true
        }
      } else if (camp.selected) {
        return {
          ...camp,
          showPergunta: false,
          showResposta: false,
          selected: true
        }
      } else {
        return camp
      }
    })

    setCamps(updatedCamps)
    setSelectedCampId(id)
  }

  const handleCardRespostaClick = id => {
    const updatedCamps = camps.map(camp => {
      if (camp.id === id) {
        return {
          ...camp,
          showPergunta: false,
          showResposta: true
        }
      }
      return camp
    })

    setCamps(updatedCamps)
  }

  return (
    <>
      {camps.map(camp => (
        <div data-test="flashcard" key={camp.id}>
          {camp.showResposta && !camp.showPergunta ? (
            <CardResposta answer={camp.answer} handleClick={handleClick} />
          ) : camp.showPergunta ? (
            <CardPergunta
              question={camp.question}
              onClick={() => handleCardRespostaClick(camp.id)}
            />
          ) : (
            <CardVazio
              texto={camp.texto}
              color={camp.selected ? camp.color : 'inherit'}
              showLineThrough={camp.selected && showCampVazio}
              imageSrc={camp.selected ? camp.image : setaPlay}
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
