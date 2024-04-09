const React = require('react');
const DefaultLayout = require('../layout/Default');

class NewClass extends React.Component {
    render() {
        return (
            <DefaultLayout title={'Add a New Class'}>
                <form action='/classes' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Age Group: <input type="text" name="ageGroup" /><br />
                    Program: <input type="text" name="program" /><br />
                    Location: <input type="text" name="location" /><br />
                    <input type="submit" value="Create Class" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;
