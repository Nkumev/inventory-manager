"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors"));
dotenv_1.default.config();
const password = process.env.MONGO_PASSWORD || "";
const URI = process.env.MONGO_URI || "";
const DB = URI.replace("<password>", password);
async function connectDB() {
    try {
        const conn = await mongoose_1.default.connect(DB);
        console.log(`Database successfully connected: ${colors_1.default.blue.bold(conn.connection.host)}`);
    }
    catch (err) {
        console.log(`${colors_1.default.red(`Database connection failed`)}`);
        console.log(err);
    }
}
exports.default = connectDB;
