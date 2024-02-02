import Task from './Task';
import Storage from './Storage';

export default class UI {
    static initAddTaskButtons() {
        const addTaskBtn = document.querySelector("#addTaskBtn");

        addTaskBtn.addEventListener('click', UI.showTaskPopup);
    }

    static showTaskPopup() {
        const mainContent = document.querySelector(".main");
        mainContent.innerHTML = `
        <dialog open>
            <h2>Create New Task</h2>
            <form method="dialog" id="createNewTask">
                <label for="title">Title</label>
                <input type="text" id="title">
                <label for="description">Description</label>
                <input type="text" id="description">
                <label for="dueDate">Due Date</label>
                <input type="text" id="dueDate">
                <label for="priority">Priority</label>
                <input type="text" id="priority">
                <button type="submit" class="createTaskBtn">Create</button>
            </form>
        </dialog>
        `;
        UI.handleCreateTaskPopupInput();
    }

    static handleCreateTaskPopupInput() {
        document.querySelector("#createNewTask").addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.querySelector("#title").value;
            const description = document.querySelector("#description").value;
            const dueDate = document.querySelector("#dueDate").value;
            const priority = document.querySelector("#priority").value;
            console.log(Storage.saveTodoList(new Task(title, description, dueDate, priority)));
        });
    }

}
