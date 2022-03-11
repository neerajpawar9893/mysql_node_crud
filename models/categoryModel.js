class Category {
    constructor(data) {
        this.categoryName = data.categoryName
    }

    addCategory() {
       return `INSERT INTO category(categoryName) VALUE('${this.categoryName}')`
    }
}

module.exports =Category;