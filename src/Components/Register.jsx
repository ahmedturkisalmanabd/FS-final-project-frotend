import React from "react";
import { NavLink } from "react-router-dom";
import * as userService from "../services/userService";
import * as authService from "../services/authServices";
import Loader from "react-loader-spinner";

class Register extends React.Component {
  state = {
    account: {
      username: "",
      email: "",
      password: "",
      number: "",
      city: "",
    },
    para: false,
  };
  submit = async () => {
    this.setState({ para: true });
    const { username, email, password, number, city } = this.state.account;
    const user = {
      username: username,
      email: email,
      password: password,
      number: number,
      city: city,
    };

    try {
      console.log(city, "city");
      const resUser = await userService.register(user);

      const { data: jwt } = await authService.login(
        this.state.account.email,
        this.state.account.password
      );

      console.log(jwt);
      localStorage.setItem("jwt", jwt);
      window.location.reload();
      return;
    } catch (err) {
      console.log(err.response);
      alert(err.response.data);
    }
    this.setState({ para: false });
  };

  handleChange = async ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    await this.setState({ account });
  };
  render() {
    const { email, username, password, city, number } = this.state.account;
    return (
      <>
        {" "}
        <div className="skewed"> </div>
        <section className="form-section login">
          <form method="POST" id="REGform" className="regform">
            <legend>
              <div className="container ">
                <div className="sign-up">
                  <h1>انشاء حساب</h1>
                </div>
                <div className="form-row">
                  <div className="input__div">
                    <h3>اسم المستخدم</h3>
                    <input
                      type="text"
                      placeholder=" اكتب اسمك"
                      value={username}
                      id="username"
                      name="username"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="input__div">
                    <h3>البريد الالكتروني</h3>
                    <input
                      type="email"
                      placeholder="اكتب ايميلك"
                      value={email}
                      id="email"
                      name="email"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div className="form-row">
                  <div className="input__div">
                    <h3>رقم المستخدم</h3>
                    <input
                      type="text"
                      placeholder="الرقم"
                      value={number}
                      id="username"
                      name="number"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="input__div">
                    <h3>المدينه</h3>
                    <input
                      type="text"
                      placeholder="اكتب مدينتك"
                      value={city}
                      id="city"
                      name="city"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div className="input__div">
                  <h3>كلمة المرور</h3>
                  <input
                    type="password"
                    placeholder="اكتب كلمة مرورك"
                    value={password}
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                  ></input>
                  <NavLink exact to="/login" className="unregistered">
                    <p>تملك حساب ؟</p>
                  </NavLink>
                </div>
                <div onClick={this.submit} className="submit-btn">
                  <h4>انشاء</h4>
                  {this.state.para ? (
                    <Loader
                      type="ThreeDots"
                      color="#FF69B4"
                      height={50}
                      width={50}
                      timeout={3000}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </legend>
          </form>
          <div className="login-info">
            <img src="./images/ppl-talking.png"></img>
            <h1>لغة الاشارة هي انبل هدية اعطاها الله للصم</h1>
          </div>
        </section>
      </>
    );
  }
}
export default Register;

//////////////////////////////
// code i might use later ////
//////////////////////////////

// onClick={() => this.props.Submiting()}

// let inputUsername = document.querySelector("#username").value
// let inputEmail = document.querySelector("email").value
// let inputPassword = document.querySelector("password").value
// let data = {username:inputUsername , email:inputEmail, password:inputPassword }
// const options = {
//     method:'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
// }
// fetch("/api", options)
//
//const user = {
//   username: username,
//   email: email,
//   password: password,
// };
// console.log("sumbit user", user);

// try {
//   const resUser = await userService.register(user);
//   console.log("backend res", resUser);
// } catch (error) {
//   console.log(error);
// }
