<template>
  <div class="container-fluid m-0 renovation">
		<div class="container">
			<div class="row">
				<div class="col-md-2">
					<img
						class="d-block img-fluid"
						width="100%"
						height="114"
						src="https://picsum.photos/114/114"
						alt="image slot"
					>
				</div>
				<div class="col-md-7">
					<h1>Vamos renovar o seguro auto?</h1>
					<p>Não se preocupe, com a renovação do seguro auto. Vamos apresentar as melhores ofertas no mercado. Com a Emerson Capaz Seguros, você terá um preço justo!</p>
				</div>
				<div class="col-md-3 button-renovation">
					<button type="button" class="btn btn-info btn-lg btn-block">RENOVE AGORA!</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Renovation'
}
</script>

<style lang="scss" scoped>
.renovation {
		padding: 60px 0px;
    background-color: #f4f4f4;
}
h1 {
	text-align: center;
}
.button-renovation {
	display: flex;
	align-items: center;
	justify-content: center;
}
.button-renovation button{
	background-color: var(--dark);
	font-weight: bold;
}
</style>
