import * as React from 'react';

import Foo from './foo';

class App extends React.Component {
    render() {
        return (
            <Foo bar={15}></Foo>
        );
    }
}

export default App;
