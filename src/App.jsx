import React from 'react';
import Headings from './Headings';
import Paras from './Paras'
import Images from './Images'
//Fat arrow function
const App = () =>
{
    return(
                <>
                        <Headings/>
                        <Images/>
                        <Paras/>
                </>
        );
};
export default App;