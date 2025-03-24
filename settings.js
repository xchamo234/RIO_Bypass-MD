const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=e2IHwIaA#LqZVkP__qqD112wK6cJ1XpS3CPkwRasA8x2P25ExF0E' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
DATABASE_URL: process.env.DATABASE_URL === undefined ? 'postgresql://admin:npg_0leWpxvmgoh9@ep-bold-lab-a4wrf69s-pooler.us-east-1.aws.neon.tech/chamiya?sslmode=require' : process.env.DATABASE_URL,    
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
};
