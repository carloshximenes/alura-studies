import { PropsWithChildren } from "react";
import classes from './layout.module.scss';

const Layout: React.FC<PropsWithChildren> = (props) => {
    return <div className={classes.container}>{props.children}</div>;
};

export default Layout;
