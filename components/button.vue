<template>
    <button class="text-white bg-black py-3 px-4 w-fit mx-auto">
        <slot name="test" /> <!-- permet de mettre du contenu html dans le composant ; on peut donner des noms à des slots pour en avoir plusieur dans un même composant (mais pas obligatoire si qu'un seul slot) -->
    </button>
</template>