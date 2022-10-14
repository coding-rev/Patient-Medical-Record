<template>
     <button type="submit">{{label}}</button>
</template>
<script>
export default {
  name: 'FormBtnComponent',
  props: {
    label: String
  }
  
}
</script>