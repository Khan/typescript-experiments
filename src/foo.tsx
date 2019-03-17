import * as h from "react-hyperscript";
import * as React from 'react';

import Bar from "./bar";

type Props = {
    bar: number,
};

class Foo extends React.Component<Props> {
    render() {
        return h(Bar, this.props);
    }

    render2() {
        return h(Bar, {bar: this.props.bar});
    }

    render3() {
        return <Bar {...this.props}></Bar>;
    }

    render4() {
        return <Bar bar={this.props.bar}></Bar>;
    }
}

export default Foo;
