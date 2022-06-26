<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      type="text"
      :value="value"
      @input="updateValue"
      v-on="$listeners"
      v-bind="$attrs"
    >
      <option
        v-for="option in options"
        :key="option"
        :selected="option == value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: [String, Number],
    label: String,
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style></style>
