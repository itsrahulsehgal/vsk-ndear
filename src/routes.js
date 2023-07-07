import Dashboard from "./scenes/dashboard";
import NISHTHA from "./scenes/NISHTHA";
import DIKSHAETB from "./scenes/DIKSHA-ETB";
import PMPOSHAN from './scenes/PM-POSHAN'
import MicroImprovements from "./scenes/Micro-improvements"
import NAS from "./scenes/NAS";
import UDISE from "./scenes/UDISE";
import PGI from "./scenes/PGI";
import NipunBharat from "./scenes/NIPUN-BHARAT";
import NcertQuiz from "./scenes/NCERT-Quiz";
import NCF from "./scenes/NCF";

const routes = [
    {
        path: "/",
        component: <Dashboard />,
    },
    {
        path: "/NISHTHA",
        component: <NISHTHA />,
    },
    {
        path: "/DIKSHAETB",
        component: <DIKSHAETB />,
    },
    {
        path: "/MicroImprovements",
        component: <MicroImprovements />,
    },
    {
        path: "/PMPOSHAN",
        component: <PMPOSHAN />,
    },
    {
        path: "/NAS",
        component: <NAS />,
    },
    {
        path: "/UDISE",
        component: <UDISE />,
    },
    {
        path: "/PGI",
        component: <PGI />,
    },
    {
        path: "/NipunBharat",
        component: <NipunBharat />,
    },
    {
        path: "/NcertQuiz",
        component: <NcertQuiz />,
    },
    {
        path: "/NCF",
        component: <NCF />,
    },
];
export default routes