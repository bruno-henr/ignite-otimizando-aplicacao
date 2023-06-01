import { render } from 'react-dom'
import { MoviesProvider } from './MoviesContext'

import { App } from './App'

render(<MoviesProvider><App /></MoviesProvider>, document.getElementById('root'))