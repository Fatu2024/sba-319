const React = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render() {
        const user = this.props.user;

        return (
            <DefaultLayout title="Show an Individual User">
                <p>The {user.name} is {user.age} and enrolled in {user.program}</p>
                <p>Program: {user.program === 'yoga'
                    ? 'yoga'
                    : user.program === 'basketball'
                    ? 'basketball'
                    : 'meditation'}</p>
                <br />
                <a href={`/users/${user._id}/edit`}>Edit This User</a>
                <form action={`/users/${user._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/users">Back to Index</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
