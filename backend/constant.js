const API_CALLS = {
    CREATE: "create",
    CREATE_MANY: "createMany",
    DELETE: "delete",
    FIND_MANY: 'findMany',
    FIND_FIRST: 'findFirst',
    FIND_UNIQUE: 'findUnique',
    UPDATE: 'update',
    UPDATE_MANY: 'updateMany'
}

const TABLE = {
    FOOD_ITEM: "fooditem", 
    ORDER: 'order',
    ORDER_ITEM: 'orderitem',
    CATEGORY: 'category',
    USER: 'user',
}

module.exports = {
    API_CALLS,
    TABLE
}
