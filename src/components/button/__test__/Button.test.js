import { render,screen, cleanup} from '@testing-library/react';
import Button from '../Button'
import reactDom from 'react-dom'
import { isTSAnyKeyword } from '@babel/types'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it('renders without crashing', () => {
    let container = document.createElement('div')
    reactDom.render(<Button label={'you clicked me'} />, container)
});

it('renders with class button', () => {
    render(<Button label='you clicked me'   />)
    const button = screen.getByTestId('button')
    expect(button).toHaveClass('button')
});

it('renders contains prop', () => {
    const label = 'hello'
    render(<Button label={label}   />)
    const button = screen.getByTestId('button')
    expect(button).toHaveTextContent(label)
     
});
it('renders constains the exact prop', () => {
    const label = 'hello'
    render(<Button label={label}   />)
    const button = screen.getByTestId('button')
    expect(button.textContent).toEqual(label)
     
});
// creating snapshot
it("Matches snapshot 1",() => {
    const label = 'hello';
    const tree =  renderer.create(<Button label={label}/>)
    expect(tree).toMatchSnapshot()
})



