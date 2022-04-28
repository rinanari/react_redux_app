import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './Card'
import './styles/app.less'
import Main from './main/Main'


const App = () => {
    const dispatch = useDispatch()


    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                   
                    <Route path="/" element={<Main />}/>
                    <Route path="/card/:id" element={<Card />}/> 
                   
                        
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;