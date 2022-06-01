require('dotenv').config();

console.log('Port: ', process.env.PORT)
console.log('User_Id: ',process.env.USER_ID)
console.log('User_Key: ',process.env.USER_KEY)

const node_env = process.env.NODE_ENV || 'coding'
console.log('Node_Env: ',node_env)