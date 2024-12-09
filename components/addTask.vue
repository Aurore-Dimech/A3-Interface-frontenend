<script setup>
    const todo = useTodo();

    const props = defineProps({
        todo: {type: Object, required: true}
    })

    const form = reactive({
        name:""
    })

    const error = ref(null);

    const save = () => {
        // error.value = null; //reset de l'erreur ; maintenant à l'input

        if(!form.name){
            error.value =  "Task name is required";
            return;
        };

        props.todo.addTask(form.name);
        form.name = ""
    }
</script>

<template>
    <form class="flex border border-black rounded mx-10 pl-3 has-[:focus]:outline has-[:focus]:outline-blue-500 items-center" :class="error ? 'border-red-500' : ''" @submit.prevent="save">
        <input type="text" class="grow py-1 focus:outline-none" placeholder="Nouvelle tâche" v-model="form.name" @input="error = null">
        <p v-if="error" class="text-red-500 pr-3">{{ error }}</p>
        <Button type="submit">
            <template #test>
                Add
            </template> <!-- tout ce qui est mis ici sera positionné dans le slot du composant ; appelé l'enfant du composant ; si pas de slot nommé = pas besoin de mettre dans un template -->
        </Button>
    </form>
</template>