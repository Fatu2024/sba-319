const React = require('react');
const DefaultLayout = require('../layout/Default');

class ShowClass extends React.Component {
    render() {
        const classInfo = this.props.classInfo;

        return (
            <DefaultLayout title="Show an Individual Class">
                <p>The class {classInfo.name} is for {classInfo.ageGroup}.</p>
                <p>Location: {classInfo.location}</p>
                <br />
                <a href={`/classes/${classInfo._id}/edit`}>Edit This Class</a>
                <form action={`/classes/${classInfo._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/classes">Back to Index</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
