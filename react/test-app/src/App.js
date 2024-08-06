import "./App.css";

export default function App() {
  return (
    <>
      <Comment username="Abbas" time={new Date().toString()}>
        <h1>Hello World</h1>
        <p>This is a comment</p>
      </Comment>
      <MyButton onClick={handleClick}>Click Me</MyButton>
    </>
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

function handleClick(event) {
  console.log(event.nativeEvent);
}

function MyButton(props) {
  return (
    <button
      {...props}
      style={{
        color: "red",
      }}
    />
  );
}
