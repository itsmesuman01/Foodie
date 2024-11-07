<template>
<div>
    The given id is: {{ id }}
</div>
</template>

<script setup>
const {
    id
} = useRoute().params;
</script>
