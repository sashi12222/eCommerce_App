import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, LOGIN_ROUTE ,REGISTER_ROUTE,PRODUCT_LIST_ROUTE} from "./routes";

const navMenu=[
    {
        route: HOME_ROUTE,
        label: 'Home'
    },
    {
        route: ABOUT_ROUTE,
        label: 'About'
    },
    {
        route: CONTACT_ROUTE,
        label: 'Contact'
    },
    {
          route:PRODUCT_LIST_ROUTE,
          label:'Products'
    },
    {
        route:LOGIN_ROUTE,
        label:'Login'
    },
    {
        route:REGISTER_ROUTE,
        label:'Register'
    }
];

export default navMenu;