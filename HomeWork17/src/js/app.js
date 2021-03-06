import {
    SingupComponent
} from "./components/singup.component";
import {
    LoginComponent
} from './components/login.component';
import {
    HomeComponent
} from './components/home.component';
import {
    NotFoundComponent
} from './components/notfound.component';

const routes = {
    '/': new HomeComponent(),
    '/login': new LoginComponent(),
    '/singup': new SingupComponent(),
    '**': new NotFoundComponent()
};

const router = () => {
    const url = location.hash.slice(1).toLowerCase()
    const container = document.querySelector('app-container')

    const component = routes[url] || routes['**']

    container.innerHTML = component.render()
    component.afterRender && component.afterRender()

}

window.addEventListener('load', router)
window.addEventListener('hashchange', router)