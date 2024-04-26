export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div></div>
        <nav>
          <ul>
            <li>
              <a href={`/propers`}>Props</a>
            </li>
            <li>
              <a href={`/states`}>States</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
