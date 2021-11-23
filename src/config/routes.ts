
import IRoute from '../interfaces/routes';
import BlogPage from '../pages/blog';
import EditPage from '../pages/edit';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';

const authRoutes: IRoute[] = [
    {
        path: '/login',
        auth:  false,
        component: LoginPage
    },
    {
        path: '/register',
        auth:  false,
        component: LoginPage
    },
]

const blogRoutes: IRoute[] = [
    {
        path: '/edit',
        auth:  true,
        component: EditPage
    },
    {
        path: '/edit/:blogID',
        auth:  true,
        component: EditPage
    },

    {
        path: '/blog/:blogID',
        auth:  false,
        component:BlogPage
    },
]

const mainRoutes: IRoute[] = [
    {
        path: '/',
        auth:  true,
        component: HomePage
    },
]

const masterRoutes: IRoute[] = [
    ...authRoutes,
    ...blogRoutes,
    ...mainRoutes,
]

export default  masterRoutes
