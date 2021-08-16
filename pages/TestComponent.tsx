import * as Next from 'next'
import styled from 'styled-components'

interface Props {
  text: string
}

const TestComponent = ({ text }: Props) => {
  return <Container>{text}</Container>
}

export default TestComponent

const Container = styled.div`
  color: red;
`
