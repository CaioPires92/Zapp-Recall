import styled from 'styled-components'

export const SCTextCampVazio = styled.div`
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

export const SCTextCampPergunta = styled.div`
  position: relative;
  width: 299px;
  height: 131px;

  margin: 0 auto;

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

export const SCCampResposta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  min-height: 131px;
  margin-top: 25px;

  padding: 10px 5px;

  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  p {
    text-align: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 0 20px;
    text-align: left;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  width: 85.17px;
  height: 37.17px;
  border-radius: 5px;
  color: #fff;
`

export const RedButton = styled(Button)`
  background: #ff3030;
`

export const OrangeButton = styled(Button)`
  background: #ff922e;
`

export const GreenButton = styled(Button)`
  background: #2fbe34;
`
