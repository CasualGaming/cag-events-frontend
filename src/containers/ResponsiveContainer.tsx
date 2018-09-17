import Desktop from '@/containers/Desktop';
import Mobile from '@/containers/Mobile';
import * as React from 'react';

const ResponsiveContainer: ({children}: {children: JSX.Element}) => JSX.Element = ({children}) => (
  <div>
    <Desktop>{children}</Desktop>
    <Mobile>{children}</Mobile>
  </div>
)

export default ResponsiveContainer;