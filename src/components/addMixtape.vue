<template>
	<div class="add-form">
		<div class="col-md-4 col-sm-4 col-xs-4">
		</div>
		<div class="col-md-6 col-sm-6 col-xs-6">
			<button @click="add" id="ajouter" name="ajouter" class="btn btn-success">Ajouter</button>
			<button @click="displayList" id="annuler" name="annuler" class="btn btn-danger">Annuler</button>	
		</div>
	</div>
</template>

<script>
import * as Mixtapes from './mixtapes.js';
export default {
	data(){
		return {
		}
	},
	methods: {
		displayList() {
			this.$router.push({name: 'mixtapes'}); 
		},
		add(){
			Mixtapes.add();
		}
	},
}
</script>

<style>
</style>