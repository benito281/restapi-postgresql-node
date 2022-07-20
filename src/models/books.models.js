import { pool } from "./dbConnection.js";

export const getBooks = async () => {
    const query = "SELECT * FROM books;"
    const result = await pool.query(query);
    return result.rows;
}

export const insertBooks = async (bookData) => {
    const query = "INSERT INTO books (id, title, editorial, area, cover_url, digital_url, available_physical) VALUES ($1, $2, $3, $4, $5, $6, $7);";
    const result = await pool.query(query, bookData);
    return {
        rows: result.rowCount
    }   
}

export const updateBooks = async (bookData) => {
    const query = "UPDATE books SET title = $2, editorial = $3, area = $4, cover_url = $5, digital_url = $6, available_physical = $7 WHERE id = $1;";
    const result = await pool.query(query, bookData);
    return {
        rows: result.rowCount
    }
}

export const deleteBook = async (idBook) => {
    const query = "DELETE FROM books WHERE id = $1;";
    const result = await pool.query(query, idBook);
    return {
        rows: result.rowCount
    }
}

export const getBookById = async (id) => {
    const query = "SELECT * FROM books WHERE id = $1;";
    const result = await pool.query(query, id);
    return result.rows;
}