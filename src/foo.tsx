import * as h from "react-hyperscript";
import * as React from 'react';

import Bar from "./bar";

type Props = {
    bar: number,
};

class Foo extends React.Component<Props> {
    render() {
        return <Bar {...this.props}></Bar>;
    }

    render2() {
        return <Bar bar={this.props.bar}></Bar>;
    }

    render3() {
        return h(Bar, this.props);
    }

    render4() {
        return h(Bar, {bar: this.props.bar});
    }
}

export default Foo;
