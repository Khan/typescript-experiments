# typescript-experiments

This repo is to experiment with typescript to evaluate whether or not to migrate
from flow.

## Experiments

# Array and Object methods

[object-array.ts](src/object-array.ts) contains some examples where typescripte does
a better job of infer correct types and catching type errors without requiring lots
of additional type declarations when using common methods such as: `filter`, `map`,
and `Object.entries`.

# React

[Foo](src/foo.tsx) and [Bar](src/bar.tsx) components shows different situations in 
which typescript will detect invalid props.  I was worried typescript not catching
invalid props when spreading props, but it appears it does except for tags.  We should
be able to lint against spreads in tags.

# hyperscript-react

This library interests me because it provides an easy to use non-JSX way of construct
React elements.  There are a few issues with JSX that make it less than ideal:
- closing tags
- boolean attributes
- lots of boiler plate when there's lots of properties

Here's an example of how `hyperscript-react` might solve these issues:

```typescript
import Bar from "./bar";

class Foo extends React.Component {
    render() {
        const {children} = this.props;
        const bar = ...;
        const baz = ...;
        const qux = ...;
        return h(Bar, {bar, baz, qux}, children);
    }
}
```

Here's the same thing using JSX:

```typescript
import Bar from "./bar";

class Foo extends React.Component {
    render() {
        const {children} = this.props;
        const bar = ...;
        const baz = ...;
        const qux = ...;
        return <Bar
            bar={bar}
            baz={baz}
            qux={qux}
        >
            {children}
        </Bar>;
    }
}
```

We could use a spread to simplify things a little:

```typescript
import Bar from "./bar";

class Foo extends React.Component {
    render() {
        const {children} = this.props;
        const bar = ...;
        const baz = ...;
        const qux = ...;
        return <Bar {...{bar, baz, qux}}>
            {children}
        </Bar>;
    }
}
```

Note: in order to get proper type checking of h("div", ...) update 
node_modules/@types/react-hyperscript/index.d.ts to look like:

```typescript
import { ComponentClass, StatelessComponent, ReactElement } from 'react';

declare namespace h {}

type Element = ReactElement | string | number | null;

declare function h(
    componentOrTag: ComponentClass | StatelessComponent | string,
    children?: ReadonlyArray<Element> | Element
): ReactElement;

declare function h(
    componentOrTag: "div",
    properties:  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    children?: ReadonlyArray<Element> | Element
): ReactElement<"div">;

// declare function h<P extends {[attr: string]: any}>(
//     componentOrTag: ComponentClass<P> | StatelessComponent<P> | string,
//     properties: P,
//     children?: ReadonlyArray<Element> | Element
// ): ReactElement<P>;

export = h;
```

Declarations for all of the other tags can be generated automatically from
node_modules/@types/react/index.d.ts.
