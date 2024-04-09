const react = require('react');
const DefaultLayout = require('../layout/Default');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                <form action={`/classes/${this.props.classes._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.classes.name} /><br />
                    AgeGroup: <input type="number" name="age" defaultValue={this.props.classes.ageGroup} /><br />
                    Enroll:
                    {this.props.classes.program ? <input type="checkbox" name="program" defaultChecked /> : <input type="checkbox" name="program" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;