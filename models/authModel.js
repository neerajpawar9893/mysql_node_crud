class Auth {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.mobile = data.mobile

    }

    signUp() {
        return `INSERT INTO auth (name, email, password, mobile) VALUE ('${this.name}','${this.email}','${this.password}','${this.mobile}')`
    }

    static login(email){
        return `SELECT * FROM auth WHERE email = '${email}'`
    }
}

module.exports = Auth;