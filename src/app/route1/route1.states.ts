import {Route1Component} from './route1.component';

export let ROUTE1_STATES = [
    {
        name: 'app.route1',
        url: '/route1',
        views: {
            $default: { component: Route1Component }
        }
    },
];