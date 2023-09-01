import { Suspense } from 'react'
import { Route, Routes } from "react-router"
import routesApp from './routes'

const AppRouter = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                {
                    routesApp.map(({ path, element: Element }) => {
                        return <Route key={path} path={path} element={<Element />} />
                    })
                }
            </Routes>
        </Suspense>
    )
}

export default AppRouter