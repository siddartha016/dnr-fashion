const mysql = require("mysql2");

// ✅ Use connection pool (important)
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "DNR@fashion16",
  database: "dnr_store",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Optional: test connection
db.getConnection((err, connection) => {
  if (err) {
    console.log("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
    connection.release();
  }
});

module.exports = db;