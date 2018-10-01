/* eslint-disable */ 
    import {assignImportedComponents} from 'react-imported-component';
    const applicationImports = {
      0: () => import(/* webpackChunkName:'UserProfile' */'./react/containers/pages/UserProfile'),
1: () => import('./react/containers/pages/AdminPages'),
2: () => import('./react/containers/pages/BlogList'),
3: () => import('./react/containers/pages/AgentList'),
4: () => import('./react/containers/pages/Jobs'),
5: () => import('./react/containers/pages/Listing'),
    };
    assignImportedComponents(applicationImports);
    export default applicationImports;