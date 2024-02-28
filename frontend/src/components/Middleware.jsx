import {Routes} from '../export'

export default function Middleware (props) {
    return props.next ? <Routes>{props.children}</Routes> : "";
}