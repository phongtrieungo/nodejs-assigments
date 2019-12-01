import Todo from '../models/todo.model';

export default (req, res) => {
    console.log(req.body);
    const content = req.body.content;
    const todo = new Todo(content);
    todo.save();
    res.redirect('/');
}