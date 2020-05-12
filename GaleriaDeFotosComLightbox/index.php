<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Galeria de Fotos com Lightbox</title>
	<style type="text/css">
		.bgbox{
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.7);
			display: none;
		}
		.divbox{
			position: fixed;
			left: 50%;
			top: 50%;
			width: 500px;
			height: 400px;
			background-color: white;
			margin-left: -270px;
			margin-top: -220px;
			padding: 20px;
			display: none;
		}
	</style>
</head>
<body>

	<a href="javascript:;" class="galeria"><img src="assets/img/angel.jpg" border="0" width="150"></a>
	<a href="javascript:;" class="galeria"><img src="assets/img/angel1.jpg" border="0" width="150"></a>

	<div class="bgbox"></div>
	<div class="divbox">
		<img src="" border="0" width="100%">
		<br>
		<button id="fecharGaleria">Fechar</button>
	</div>

<!--jQuery-->
	<script type="text/javascript" src="assets/jquery-3.4.1.min.js"></script>
<!--Meu jQuery-->
	<script type="text/javascript" src="assets/jquery.js"></script>	
</body>
</html>