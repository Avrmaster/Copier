import React from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
    return (
        <div className="App">
            <header className="App-header">
                <div className="stage">
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                </div>
                <iframe
                    style={ {
                        width: '500px',
                        height: '300px',
                        zIndex: 1000,
                    } }
                    src={ 'https://www.youtube.com/embed/_4PwqkPMFYs' }
                />
            </header>
        </div>
    )
}

export default App
