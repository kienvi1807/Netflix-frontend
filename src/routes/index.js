
import Home from '~/pages/Home';
import { DefaultLayout } from '~/components/Layouts';

const publicRoutes = [
    {path: '/', component: Home, layout: DefaultLayout}
]

const privateRoutes = [
    
]

export {publicRoutes, privateRoutes}