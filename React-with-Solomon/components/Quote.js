function Quote(props) {
  return (
    <div className="quote">
      <p>{props.text}</p>
      <p> - {props.author}</p>
    </div>
  );
}

export default Quote;
