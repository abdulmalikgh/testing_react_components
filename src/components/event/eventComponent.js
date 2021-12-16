import './eventComponent.css'
import { useState } from 'react'

export default function EventComponent() {
    const [lightState, setLightSTate] = useState(false)

    return (
        <div data-testid='event'>
            <button role='button'  className={lightState ? 'on' : 'off'} onClick={ () => setLightSTate(!lightState)}>
                {lightState ? "ON" : "OFF"}
            </button>
        </div>
    )
}