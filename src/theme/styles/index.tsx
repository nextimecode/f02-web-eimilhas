import cssObjects from './cssObjects'
import heading from './heading'
import tagElements from './tagElements'

const styles = {
  global: {
    ...tagElements,
    ...cssObjects,
    ...heading
  }
}

export default styles
