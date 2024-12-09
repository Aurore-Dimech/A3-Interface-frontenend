<script setup>
// ne pas oublier le setup 
    const props = defineProps({
        task : {
            type: Object,
            required: true
            // default: "-"
        },
        todo: {
            type: Object,
            required: true
        }
    })

    // possible d'écrire aussi : defineProps(['name']) ; mais moins clair
</script>

<template>
    <div class="border border-black rounded flex items-center gap-3 mx-10 p-2">
        <input type="checkbox" v-model="props.task.done"> <!-- v-model pour lier un état à une variable -->
        <p class="grow" :class="props.task.done ? 'line-through' : ''">{{ props.task.name }}</p>
        <Button class="rounded bg-red-500 text-black" @click="todo.removeTask(props.task.id)">
            <template #test>
                delete
            </template>
        </Button>
    </div>
</template>