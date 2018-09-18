import * as React from 'react';
import { Route } from 'react-router-dom';

interface IStatusProps {
  code: number,
  children: JSX.Element
}

const Status: React.SFC<IStatusProps> = (props) => {

  const testRender: (rcprops: any) => React.ReactNode = (rcprops) => {
    return (
      <div>
        <h1>{props.code}</h1>
        {props.children}
      </div>
    )
  }

  return (
    <Route render={testRender} />
  )
}

export default Status;
