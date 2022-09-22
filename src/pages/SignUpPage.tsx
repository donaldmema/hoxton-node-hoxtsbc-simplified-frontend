import * as API from "../api";

export function SignUpPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({ email: data.get("email"), password: data.get("password"), name: data.get("name"), });
    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");
    if (email && password && name) {
      API.signup({ email, password, name }).then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          //sign them up
        }
      });
    }
  }

  return (
    <div>
      <h1>Welcome to the sign up page.</h1>
      <h3>Please enter your credentials below:</h3>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>
          Full Name:
          <input type="text" name="name" placeholder="Joe Mama" />
        </label>

        <label>
          Email:
          <input type="text" name="email" placeholder="example@email.com" />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
