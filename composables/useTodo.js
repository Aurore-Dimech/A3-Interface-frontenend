export default function (){
    const tasks = reactive([]);

    const addTask = (name) => {
        tasks.unshift({id: generateId(), name, done: false}) // on peut appeler generateId car dans utils
    };

    const removeTask = (id) => {
        const indexToRemove = tasks.findIndex((task) => task.id === id);
        tasks.splice(indexToRemove, 1);
    };

    return {
        tasks,
        addTask,
        removeTask
    }
}