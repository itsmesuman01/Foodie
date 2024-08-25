<template>
<div>
    The given id is: {{ id }}
</div>
</template>

<script>
const {
    id
} = useRoute().params;

definePageMeta({
    layout: 'design'
});
</script>
