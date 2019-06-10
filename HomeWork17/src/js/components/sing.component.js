import { AuthService } from "./../services/auth.service";

export class SignupComponent {
    constructor() {
        this._authService = new AuthService();
    }
    render() {
        return `
        <form name="signupForm" style="padding: 30px">
            <div class="form-group row">
              <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail" placeholder="Email">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputNickname" class="col-sm-2 col-form-label">Nickname</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNickname" placeholder="Nickname">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputFirstName" placeholder="First Name">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputLastName" placeholder="Last Name">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
              <div class="col-sm-10">
                <input type="tel" class="form-control" id="inputPhone" placeholder="Phone">
              </div>
            </div>
            <div class="form-group">
              <label for="gender-orientation">Gender Orientation</label>
                <select class="form-control" id="gender-orientation">
                  <option>Male</option>
                  <option>Female</option>
                </select>
            </div>
            <div class="form-group row">
              <label for="inputCity" class="col-sm-2 col-form-label">City</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputCity" placeholder="City">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputCountry" class="col-sm-2 col-form-label">Country</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputCountry" placeholder="Country">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputDateBirthDay" class="col-sm-2 col-form-label">Day</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputDateBirthDay" placeholder="Day">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputDateBirthMonth" class="col-sm-2 col-form-label">Month</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputDateBirthMonth" placeholder="Month">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputDateBirthYear" class="col-sm-2 col-form-label">Year</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputDateBirthYear" placeholder="Year">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Sign in</button>
              </div>
            </div>
          </form>
        `;
    }

    afterRender() {
        document.forms["signupForm"].addEventListener("submit", e => {
            e.preventDefault();

            const email = e.target.elements["inputEmail"].value;
            const password = e.target.elements["inputPassword"].value;
            const nickname = e.target.elements["inputNickname"].value;
            const first_name = e.target.elements["inputFirstName"].value;
            const last_name = e.target.elements["inputLastName"].value;
            const phone = e.target.elements["inputPhone"].value;
            const gender_orientation = e.target.elements["gender-orientation"].value;
            const city = e.target.elements["inputCity"].value;
            const country = e.target.elements["inputCountry"].value;
            const date_of_birth_day = e.target.elements["inputDateBirthDay"].value;
            const date_of_birth_month = e.target.elements["inputDateBirthMonth"].value;
            const date_of_birth_year = e.target.elements["inputDateBirthYear"].value;

            if (!email ||
                !password ||
                !nickname ||
                !first_name ||
                !last_name ||
                !phone ||
                !gender_orientation ||
                !city ||
                !country ||
                !date_of_birth_day ||
                !date_of_birth_month ||
                !date_of_birth_year
            )
                return;

            this._authService
                .signup({
                    email,
                    password,
                    nickname,
                    first_name,
                    last_name,
                    phone,
                    gender_orientation,
                    city,
                    country,
                    date_of_birth_day,
                    date_of_birth_month,
                    date_of_birth_year
                })
                .then(res => {
                    console.log("Login ok -> ", res);
                })
                .catch(err => console.log(err));
        });
    }
}