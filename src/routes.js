import Dashboard from "./screens/dashboard";
import NISHTHA from "./screens/NISHTHA";
import DIKSHAETB from "./screens/DIKSHA-ETB";
import PMPOSHAN from './screens/PM-POSHAN'
import MicroImprovements from "./screens/Micro-improvements"
import NAS from "./screens/NAS";
import UDISE from "./screens/UDISE";
import PGI from "./screens/PGI";
import NipunBharat from "./screens/NIPUN-BHARAT";
import NcertQuiz from "./screens/NCERT-Quiz";
import NCF from "./screens/NCF";

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