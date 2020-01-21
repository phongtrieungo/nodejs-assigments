import Todo from '../models/todo.model';

export default (req, res) => {
    const content = req.params;
    console.log({deleted: content});
    res.redirect('/');
    // if (content) {
    //     Todo.remove(content);
    //     res.redirect('/');        
    // } else {
    //     Todo.isEmptyContent(true);
    //     res.redirect('/');
    // }
}