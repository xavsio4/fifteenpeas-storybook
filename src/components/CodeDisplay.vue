<template>
  <b-container fluid>
    <figure>
      <div class="code-display">
        <p><code>{{ code }}</code>
        <b-button @click="clipboard(code)" small class="with-pointer badge badge-light"
          >copy</b-button
        ></p>
      </div>
      <figcaption>{{ caption }}</figcaption>
    </figure>
  </b-container>
</template>
<script>
export default {
  props: {
    code: {
      type: String,
      default:''
    },
    caption: {
      type: String,
      default:''},
  },
  methods: {
    clipboard(code) {
      navigator.clipboard.writeText(code)
    },
  },
}
</script>
<style scoped>
.code-display {
  background: #333;
  color: white;
  padding: 9px;
  word-wrap: break-word;
  border: 1px solid #bbb;
}
.with-pointer {
  cursor: pointer;
}
.badge {
  float: right;
  margin: 3px;
  display: block;
}

.badge:hover {
  background: #666;
  color: #bbb;
}

figcaption {
  font-weight: bold;
  font-size: 10px;
}
</style>