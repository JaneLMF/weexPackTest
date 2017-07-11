<template>
  <div>
    <title :text="msg"></title>
  </div>
</template>
<script>
	let title = 'Hello'
	module.exports = {
	  data() {
		return {
			msg: title
		}
	  },
	  components: {
	  	title: require('./components/title.vue')
	  }
	}
</script>