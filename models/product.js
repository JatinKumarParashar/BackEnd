
const db=require('../util/database');


module.exports = class Product {
    constructor(id, t, i) {
        this.id = id;
        this.title = t;
        this.image = i;
    }

    save() {
      return db.execute('INSERT INTO product (title,image) VALUES(?,?)',[this.title,this.image]);
    }

    static fetchAll() {
      return db.execute('SELECT * FROM product')
    }

    static findById(id) {
        return db.execute('SELECT * FROM product WHERE product.id=?',[id]);
    }

    static deleteProduct(id) {
       return db.execute('DELETE FROM product WHERE id=?',[id]);
    }
};