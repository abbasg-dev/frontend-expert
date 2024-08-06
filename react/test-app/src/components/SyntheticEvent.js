export default function SyntheticEvent() {
  return (
    <div>
      <MyButton onClick={handleClick}>Click Me</MyButton>
    </div>
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
