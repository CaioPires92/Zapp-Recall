import logo from '../assets/logo.png'
import styled from 'styled-components'
import TextCamp from './TextCamp/TextCamp'

export default function Card() {
  return (
    <>
      <SCCard>
        <header>
          <img src={logo} alt="Logo" />
          <h1>ZapRecall</h1>
        </header>
        <div className="container">
          <TextCamp />
        </div>
      </SCCard>
      <SCFooter>
        <footer>
          <p>0/4 CONCLUÍDOS</p>
        </footer>
      </SCFooter>
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

const SCFooter = styled.footer`
  footer {
    margin: 0 auto;
    width: 375px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    p {
      font-family: 'Recursive';
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      color: #333333;
    }
  }
`
