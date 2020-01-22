import Todo from '../models/todo.model';

export default (req, res) => {
    const content = req.body.content;
    if (content) {
        const todo = new Todo(content);
        todo.save();
        res.redirect('/');        
    } else {
        res.redirect('/');
    }
}