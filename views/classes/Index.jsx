const React = require('react');
const DefaultLayout = require('../layout/Default');

class IndexClasses extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <DefaultLayout title={"Classes Index Page"}>
                <nav>
                    <a href="/classes/new">Create a New Class</a>
                </nav>
                <ul>
                    {classes.map((classItem, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/classes/${classItem._id}`}>
                                    {classItem.name}
                                </a> {' '}
                                is for {classItem.ageGroup} <br></br>
                                and focuses on {classItem.program === 'yoga'
                                    ? 'yoga'
                                    : classItem.program === 'basketball'
                                    ? 'basketball'
                                    : 'meditation'} program
                                <br />
                                <a href={`/classes/${classItem._id}/edit`}>Edit This Class</a>
                                <form action={`/classes/${classItem._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = Index;
