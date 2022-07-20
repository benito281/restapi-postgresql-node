import { Router } from "express";
import { getBooks, insertBooks, updateBooks, deleteBook, getBookById } from "../models/books.models.js";
const router = Router();

//GET ALL BOOKS
router.get("/", async (req, res) => {
    const books = await getBooks();
    res.status(200).json(books);
});

//INSERT BOOK
router.post("/book/insert", async (req, res) => {
    const { id, title, editorial, area, cover_url, digital_url, available_physical } = req.body;
    const book = [ id,
        title, 
        editorial, 
        area, 
        cover_url, 
        digital_url, 
        available_physical ];
        try {
            const newBook = await insertBooks(book);
            res.status(200).json({message : 'Book inserted successfully', 
            rowsCount : newBook});
        } catch (error) {
            res.status(500).json({ message: error });
        }
});

//UPDATE BOOK
router.put("/book/update/:id", async (req, res) => {
    const { id } = req.params;
    const { title, editorial, area, cover_url, digital_url, available_physical } = req.body;
    const book = [ id,
        title, 
        editorial, 
        area, 
        cover_url, 
        digital_url, 
        available_physical ];
        try {
            const updatedBook = await updateBooks(book);
            res.status(200).json({ message : 'Book updated successfully', 
            rowsCount : updatedBook });
        } catch (error) {
            res.status(500).json({ message: error });
        }
});

//DELETE BOOK
router.delete("/book/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await deleteBook([id]);
        res.status(200).json({ message : 'Book deleted successfully', 
        rowsCount : deletedBook });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//GET BOOK BY ID
router.get("/book/get/:id", async (req, res) => {
    const { id } = req.params;
    const book = await getBookById([id]);   //[id] es un array porque el query es de una sola variable
    res.status(200).json(book);
});

export default router;