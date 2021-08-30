import React from 'react'
import { RenderRoutes } from './router/renderRoutes'
console.log(RenderRoutes)
const App= () => {
    return <div>{RenderRoutes(undefined, false)}</div>
    // return <div>rrrr</div>
}
export default App