import { render, screen } from '@testing-library/react'
import Greetings from '../Greetings'

it('renders render Hello ther! when there is no prop', () => {
    render(<Greetings />)
    const container = screen.getByTestId('message')
    expect(container.textContent).toBe('Hello, there!')
})

it('renders hello with prop when passed prop to the component', () => {
    render(<Greetings message='Nafisa'/>)
    const container = screen.getByTestId('message')
    expect(container.textContent).toBe("Hello, Nafisa!")
})