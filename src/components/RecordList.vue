<template>
  <ul>
    
    <li v-for="record in recordlist" :key="record.id">
      <input type="checkbox" readonly />
      <h6>{{record.title}}</h6>
    </li>
    
  </ul>
</template>
<script>
export default {
  name: "RecordList",
  props: {
    recordlist: { type: Array, required: false, default: () => [{
                "id": "1",
                "title": "No record",
                "type": {
                    "title": "X-Ray"
                }
            },] 
  },
}
};
</script>