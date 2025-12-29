import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout.js'

import ProjectPage from './pages/ProjectPage.js'
import NotFound from './pages/NotFoundPage.js'
import HomePage from './pages/HomePage.js'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
