<template>
	<div>
		<text>{{text}}</text>
	</div>
</template>

<script>
	module.exports = {
		props: {
			text: { default: 'jane' }
		}
	}
</script>