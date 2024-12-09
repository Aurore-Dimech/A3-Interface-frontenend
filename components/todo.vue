<script setup>
    const props = defineProps({
        todo : {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="flex flex-col gap-6">
        <AddTask :todo="todo" />
        <!-- <Task name="coucou" /> -->
        <Task v-for="task in props.todo.tasks" :task="task" :key="task.id" :todo="todo"/>
    </div>

</template>