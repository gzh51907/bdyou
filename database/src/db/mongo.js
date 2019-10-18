const MongoClient = require('mongodb').MongoClient;
const {
    DBurl,
    DBname
} = require('../config.json');

//连接MongoDB
async function connect() {
    let result;
    try {
        let client = await MongoClient.connect(DBurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = client.db(DBname);
        result = {
            client,
            db
        };
    } catch (err) {
        result = err;
    }
    return result;
};

/**
 * 增
 * @param {String} colName  集合名称
 * @param {Array} data     要添加的数据
 */
async function create(colName, data) {
    let {
        client,
        db
    } = await connect();
    //获取集合
    let col = db.collection(colName);
    let result = await col.insertMany(data);
    client.close();
    return result;
};

/**
 * 查
 * @param {String} colName  集合名称
 * @param {Object} query    条件
 */
async function find(colName, query = {}) {
    let {
        client,
        db
    } = await connect();
    let col = db.collection(colName);
    console.log(query);
    let result = await col.find(query).toArray();
    client.close();
    return result;
}

/**
 * 删
 * @param {String} colName  集合名称
 * @param {Object} data     要删除的数据
 */
async function remove(colName, data) {
    let {
        client,
        db
    } = await connect();
    let col = db.collection(colName);
    let result = await col.deleteMany(data);
    client.close();
    return result;
}

/**
 * 改
 * @param {String} colName  集合名称
 * @param {Object} query    要修改的数据
 * @param {Object} newData    修改之后的数据
 */
async function update(colName, query, newData) {
    let {
        client,
        db
    } = await connect();
    let col = db.collection(colName);
    let result = await col.updateMany(query, newData);
    client.close();
    return result;
}

module.exports = {
    create,
    find,
    remove,
    update
}