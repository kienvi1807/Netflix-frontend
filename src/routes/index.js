
import Home from '~/pages/Home';
import { DefaultLayout, HeaderOnlyNav } from '~/components/Layouts';
import Login from '~/pages/Login';

const publicRoutes = [
    {path: '/', component: Login}
]

const privateRoutes = [
    {path: '/', component: Home, layout: DefaultLayout}
]

export {publicRoutes, privateRoutes}