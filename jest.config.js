// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages
import 'jest-enzyme'

import renderer from 'react-test-renderer'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

global.renderToJSON = component => renderer.create(component).toJSON()

global.renderMount = component => mount(component)

global.renderShallow = component => shallow(component)
