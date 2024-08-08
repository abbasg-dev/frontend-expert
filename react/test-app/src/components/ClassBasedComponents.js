import { Component, useState, createRef, createContext } from "react";

const Theme = createContext({
  mode: "dark",
});

export default function ClassBasedComponents() {
  const [shouldRender, setShouldRender] = useState(true);

  return (
    <Theme.Provider value={{ mode: "dark" }}>
      {shouldRender && <Counter />}
      <button onClick={() => setShouldRender(!shouldRender)}>
        Toggle Counter
      </button>
    </Theme.Provider>
  );
}

class Counter extends Component {
  static contextType = Theme;
  constructor(props) {
    super(props);
    this.state = {
      count: props.startingCount ?? 0,
    };
    this.buttonRef = createRef();
  }

  componentDidMount() {
    // console.log('mounted');
    // console.log(this.buttonRef);
    console.log(this.context);
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log(prevProps, prevState);
  //   }

  //   componentWillUnmount() {
  //     console.log("unmounting");
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(nextProps, nextState);
  //     return nextState < 3;
  //   }

  render() {
    return (
      <>
        <button
          ref={this.buttonRef}
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <p>Count: {this.state.count}</p>
        <Theme.Consumer>
          {(context) => <p>Theme: {context.mode}</p>}
        </Theme.Consumer>
      </>
    );
  }
}
