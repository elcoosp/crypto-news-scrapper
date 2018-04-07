import { path } from 'ramda'

export const T = stringPath => path(['theme', ...stringPath.split('.')])

const palette = {
  main: '#2c3e50'
}
export default {
  palette
}
