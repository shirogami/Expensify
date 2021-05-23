// Higher Order Component (HOC): A component (HOC) that renders
// another component
// reuse code
// Render hijacking 
// Prop manupulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: props.info</p>
        </div>
    )

}

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {props.isAdmin && <p>This is private info, please don't share</p>}
                <WrappedComponent {...props} />
            </div>
        );
    }
};

// react authentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {props.isAuthenticated ? (
                    <WrappedComponent {...props} />
                ) : (
                    <p>Please login to view the info</p>
                )}
            </div>
        );
    };
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are details" />, document.getElementById('app'));
