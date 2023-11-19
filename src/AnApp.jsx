import React from 'react'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components'

// components:
import { Header, Footer } from './components'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Content = styled.div`
  position: relative;
  z-index: 100;
  flex: 3;
  margin-left: 1rem;

  input {
    color: #ffff;
    padding: 10px;
    border: 1px solid #0000 !important;
    margin-right: 15px;
    background-color: #272791;
        &:first-child{
            background-color: #207474;
        }
    }

  textarea {
    padding: 10px;
    color: #ffff;
    border: 1px solid #0000 !important;
    background-color: #3b1485;
  }
`


const AnApp = ({defName = '', defLastName = '', defTextArea = '' }) => {
    const [nameValue, setNameValue] = React.useState(defName);
    const [lastName, setLastName] = React.useState(defLastName);
    const [textAreaValue, setTextAreaValue] = React.useState(defTextArea);
    
    const componentRef = React.useRef()
    const handlePrintClick = useReactToPrint({
      content: () => componentRef.current,
    })

    return (
        <div className='ui-wrapper'>
            <Header onClick={handlePrintClick}/>
            <div className='ui-content-wrapper'>
                <Wrapper>
                    <div className='ui-container test-input' ref={componentRef}>
                        <Row>
                            <Content>
                                <input type="text" onChange={e => setNameValue(e.target.value)} value={nameValue} name='name' />
                                <input type="text" onChange={e => setLastName(e.target.value)} value={lastName} name='lastName' />
                                <textarea name="textarea" id="area" cols="30" rows="10" onChange={e => setTextAreaValue(e.target.value)} value={textAreaValue} >
                                </textarea>
                            </Content>
                            <button onClick={() => console.log(nameValue, lastName, textAreaValue)}>Click</button>
                        </Row>
                    </div>
                </Wrapper>
            </div>
            <Footer />
        </div>
    )
}

export default AnApp
