class User {
    constructor(data) {
        this.userId = data.userId;
        this.userName = data.userName;
        this.userEmail = data.userEmail;
        this.password = data.password
    }

    addUser() {
        return `INSERT INTO users (userId, userName, userEmail, password) VALUE ('${this.userId}','${this.userName}', '${this.userEmail}', '${this.password}')`
    }

    static getUserById(id) {
        console.log(id,"<========id")
        return `SELECT * FROM users WHERE userId= '${id}'`
    }

    static getAllUsers() {
        return `SELECT * FROM users WHERE is_deleted = 0`
    }

    updateUser(id) {
        return `Update users SET userName = '${this.userName}', userEmail= '${this.userEmail}', password = '${this.password}' WHERE userId = '${id}' `
    }

    static deleteUser(id) {
        console.log(id,"<========iiiddd")
        return `Update users SET is_deleted = '${1}' WHERE userId = '${id}'`
    }
}

module.exports = User;