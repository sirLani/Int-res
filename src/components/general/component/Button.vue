<template>
  <button
    class="btn"
    :style="{ background: backgroundColor, color: color, border: border }"
  >
    {{ text }}
  </button>
</template>


<script>
export default {
  props: {
    text: { type: String, required: true },
    color: { type: String },
    backgroundColor: { type: String },
    border: { type: String },
  },
};
</script>

<style>
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 30px;
  margin: 5px;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
}
</style>