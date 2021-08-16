import * as Next from 'next'
import TestComponent from './TestComponent'

const Home: Next.NextPage = () => {
  return <TestComponent text="This is text that I use for props. :)" />
}

export default Home
