export default class Storage {
    static saveTodoList(data) {
        let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        todoList.push(data);
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }
}