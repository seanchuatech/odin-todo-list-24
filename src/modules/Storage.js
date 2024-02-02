export default class Storage {
    static saveTodoList(data) {
      localStorage.setItem('todoList', JSON.stringify(data));
    }
}