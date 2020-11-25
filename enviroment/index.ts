import * as dotenv from "dotenv";
dotenv.config();

const configData={
    env: process.env.NODE_ENV || 'dev',
    host: process.env.Host || 'localhost',
    port: process.env.PORT || '3000',
    mango_url: process.env.MANGO_URL|| 'mangodb://localhost/my_database',
    secret_key: process.env.SECRET_KEY || 'secret-key'
}

export default configData