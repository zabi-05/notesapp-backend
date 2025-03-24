import Note from '../models/notesSchema.js';

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes", error });
    }
};
export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.json(newNote);
    } catch (error) {
        res.status(500).json({ message: "Error creating note", error });
    }
};

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: "Error updating note", error });
    }
};

export const deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting note", error });
    }
};
