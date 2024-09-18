import {Suspense} from 'react';
import { Text } from 'react-native';

const Loadable = (Component:React.FunctionComponent) => {
     return (props:any) => (
        <Suspense >
            <Component {...props} />
        </Suspense>
     )
}

export default Loadable;
