/* eslint-disable */ 
    import {assignImportedComponents} from 'react-imported-component';
    const applicationImports = {
      0: () => import('../../redux/modules/agent/reducers'),
1: () => import(/* webpackChunkName:'MarketReport' */'../pages/Home/sections/MarketReport'),
    };
    assignImportedComponents(applicationImports);
    export default applicationImports;