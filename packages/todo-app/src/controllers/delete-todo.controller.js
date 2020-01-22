import Todo from '../models/todo.model';

export default (req, res) => {
    const content = req.params.id;
    if (content) {
        Todo.remove(content);
        res.redirect('/');        
    } else {
        Todo.isEmptyContent(true);
        res.redirect('/');
    }
}