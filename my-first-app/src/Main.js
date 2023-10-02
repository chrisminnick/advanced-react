function Main({ fullName, setFullName }) {
  return (
    <p>
      {fullName}, this is the main area of the application.
      <input
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />
    </p>
  );
}
export default Main;
