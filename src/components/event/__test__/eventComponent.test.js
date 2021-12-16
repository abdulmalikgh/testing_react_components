import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import EventComponent from '../eventComponent'

let container;
beforeEach( () => {
    container = document.createElement('div')
    document.body.appendChild(container)
}) 

afterEach(() => {
    container.remove()
    container = null
})
describe("Event Component", () => {
    it('renders without crushing', () => {
        render(<EventComponent />, container)
        expect(screen.getByTestId('event')).toContainElement(screen.getByRole('button'))
    })

    // checking button state
    it('Rendered button is in off state', () => {
        render(<EventComponent />, container)
        expect(screen.getByRole('button').textContent).toBe('OFF')
    })

    //test if button has class off when button is not clicked 
    it('Rendered button OFF state contain class off', () => {
        render(<EventComponent />, container)
        expect(screen.getByRole('button')).toHaveClass('off')
    })

    //testing button events 
    it('Rendered button text should be on when clicked for the first time', () => {
        render(<EventComponent />, container)
        fireEvent.click(screen.getByRole('button'))
        expect(screen.getByRole('button').textContent).toBe('ON')
        expect(screen.getByRole('button')).toHaveClass('on')
    })
})
