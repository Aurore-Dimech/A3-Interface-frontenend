<!-- mettre le moins de code possible = faire des composants de composants si besoin -->

<script setup>
    const todo = useTodo();
    // const todo = reactive([
    //     {name : "task 1", done: false},
    //     {name: "task 2", done: false}
    // ]); // données ; normalement, ce serait un appel à un composant qui ferait un call API ; déclaration des datas
</script>

<template>
    <div class="flex flex-col gap-5">
        <!-- <h2>World</h2> -->
        <!-- {{ todo }} pour afficher de la data pure -->
        <!-- <Todo :todo="todo.items" /> donner les datas à l'enfant -->
        <Todo :todo="todo" />

        <!-- <Button @click="() => todo.addItem('test')">
            <template #test>
                Add
            </template>
        </Button> -->
    </div> 
</template>