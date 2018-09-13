import * as React from 'react';
import { StaticContext } from 'react-router';
import { Route, RouteComponentProps } from 'react-router-dom';

class Status extends React.Component<any> {

    public render() {
        return (
            <Route render={this.testRender} />
        )
    }

    private testRender: (props: RouteComponentProps<any, StaticContext, any>) => React.ReactNode = ({staticContext}) => {
        if (staticContext) {
            staticContext = this.props.code;
        }
        return (
            <div>
                <h1>{this.props.code}</h1>
                {this.props.children}
            </div>
        )
    }

}

export default Status;
