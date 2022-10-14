<template>
  <select required>
    <option value="">*Specify</option>
    <option v-for="option in options" :key="option.id" value="">{{option.title}}</option>
  </select>
</template> 
<script>
export default {
  name: "SelectWidgetComponent",
  props: {
    options: { type: Array, required: false},
  }
};
</script>