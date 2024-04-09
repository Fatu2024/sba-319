const React = require('react');
const DefaultLayout = require('../layout/Default');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                <form action={`/users/${this.props.user._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.user.name} /><br />
                    Age: <input type="number" name="age" defaultValue={this.props.user.age} /><br />
                    Enroll:
                    {this.props.user.program ? <input type="checkbox" name="program" defaultChecked /> : <input type="checkbox" name="enrolled" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;