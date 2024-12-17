import { lazy } from 'react';

// Helper function for consistent lazy loading
export const lazyLoad = (path: string, namedExport: string) => {
  return lazy(() => 
    import(path).then(module => ({ default: module[namedExport] }))
  );
};