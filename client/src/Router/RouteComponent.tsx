import { FunctionComponent, ComponentType } from 'react';

interface Params {
  [key: string]: string;
}

interface RouteProps {
  component: ComponentType<{ params: Params }>;
  params: Params;
}

const Route: FunctionComponent<RouteProps> = ({ component: Component, params }) => {
  return <Component params={params} />;
};

export default Route;