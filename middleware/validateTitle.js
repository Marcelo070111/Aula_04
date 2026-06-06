const validateTitle = (req, res, next) => {
    const { title, autor, year, genre } = req.body;

    if (!title || typeof title !== "string" || title. length < 3) {
        return res.status(400).json({ error: "o titulo é obrigatorio e deve ter pelo menos 3 caracteres.",})
    };
    next();
}

module.exports = validateTitle

