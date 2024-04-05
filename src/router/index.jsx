import { Route } from 'react-router-dom';

const Router = ({
    component,
    path,
    exact = false,
    needAuthentication = false,
    ...rest
}) => {
    return <Route component={component} path={path} exact={exact} {...rest} />;
}

export default Router;