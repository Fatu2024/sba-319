const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New User'}>
                <form action='/users' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Age: < input type="number" name="age"/> <br />
                    Program <input type="checkbox" name="program"/> <br />
                    <input type="submit" name="" value="Create User"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;