import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import User from '../user'

const fakeUsers = [
    {
        id:1,
        name: 'Jamil',
        age: 13,
        address: 'Abensu Tigo Pole'
    },
    {
        id:2,
        name: 'Lela',
        age: 17,
        address: 'Derman'
    },
    {
        id:3,
        name: 'Fatima',
        age: 8,
        address: 'Texas'
    }
]
let id = 1;
let passedUser = fakeUsers.find( user => id == user.id)

const server = setupServer(
    rest.get('/user/:id', (req, res, ctx) => {
        const { id } = req.params
        const user = fakeUsers.find( user => user.id = id )
        return res(ctx.json(user))
    })
)
let container;
beforeAll( () => {
    server.listen()
    container = document.createElement("div");
    document.body.appendChild(container);
})
afterEach(() => server.resetHandlers())
afterAll( () => {
    server.close()
    container.remove()
    container = null
})

// writting test
describe('User', () => {
    it('renders Loading', async () => {
        render(<User id={id} />, container)
        expect(screen.getByRole('loading').textContent).toBe('Loading...')
        await waitFor(() => screen.findByRole('name'))
    })

    it('Renders user name', async () => {
        render(<User id={id}></User>, container)
        await waitFor(() => screen.findByRole('name'))
        expect(screen.getByRole('name').textContent).toBe(passedUser.name)
    })

    it('Renders user age', async () => {
        render(<User id={id} />, container)
        await waitFor(() => screen.findByRole('age'))
        expect((await screen.findByRole('age')).textContent).toBe(passedUser.age.toString())
    })

    it('Renders user Address', async () => {
        render(<User id={id} />, container)
        await waitFor(() => screen.findByRole('address'))
        expect((await screen.findByRole('address'))).toHaveTextContent(passedUser.address)
    })


})



