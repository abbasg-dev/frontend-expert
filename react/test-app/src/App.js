import "./App.css";

export default function App() {
  return (
    <Comment username="Abbas" time={new Date().toString()}>
      <h1>Hello World</h1>
      <p>This is a comment</p>
    </Comment>
  );
}

function Comment({ username, time, children }) {
  return (
    <section>
      <p>
        {username} commented at {time}
      </p>
      {children}
    </section>
  );
}
