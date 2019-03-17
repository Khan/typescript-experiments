import * as h from "react-hyperscript";
import * as React from 'react';

type Props = {
    bar?: string,
};

class Bar extends React.Component<Props> {
    render() {
        return h("div", this.props);
    }

    render2() {
        return h("div", {bar: "bar"});
    }

    render3() {
        return <div {...this.props}></div>;
    }

    return4() {
        return <div bar="bar"></div>;
    }
}

export default Bar;
