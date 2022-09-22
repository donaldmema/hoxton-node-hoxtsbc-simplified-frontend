import { Link } from "react-router-dom";
import * as API from "../api";

export function LoginPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({email: data.get("email"), password: data.get("password"), });

    const email = data.get("email");
    const password = data.get("password");
    if (email && password) {
      API.login({ email, password }).then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          //sign them in
        }
      });
    }
  }
  return (
    <>
      <div>
        <h1>Welcome to the login page.</h1>
        <h3>Please enter your credentials below:</h3>
        <form onSubmit={(event) => handleSubmit(event)}>
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
      <div>
        <h3>Don't have an account?</h3>
        <Link to="/sign-up">Sign up here!</Link>
      </div>
    </>
  );
}
