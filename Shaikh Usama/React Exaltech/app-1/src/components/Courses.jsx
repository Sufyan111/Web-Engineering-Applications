export const Courses = ({ html, css, javascript, react }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        padding: "10px",
        margin: "150px 0",
      }}
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
          style={{ width: "300px", height: "200px" }}
        />

        <h2>{html}</h2>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3NzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
          style={{ width: "300px", height: "200px" }}
        />
        <h2>{css}</h2>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
          style={{ width: "300px", height: "200px" }}
        />
        <h2>{javascript}</h2>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
          alt=""
          style={{ width: "300px", height: "200px" }}
        />
        <h2>{react}</h2>
      </div>
    </div>
  );
};
