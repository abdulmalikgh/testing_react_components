export default function Message({ message }) {
    if(message) {
        return <div data-testid="message">Hello, { message }!</div>
    } else {
        return <div data-testid="message">Hello, there!</div>
    }
    
}