import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'

import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFoundPage'
import HomePage from './pages/HomePage'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:slug" element={<ProjectPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
