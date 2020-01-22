import Todo from '../models/todo.model';

export default (req, res) => {
    const oldContent = req.params.oldContent;
    const content = req.body.itemContent;
    console.log({oldContent: oldContent});
    
    console.log({newContent: content});
    
    if (content && oldContent) {
        Todo.update(oldContent, content);
        res.redirect('/');        
    } else {
        res.redirect('/');
    }
}