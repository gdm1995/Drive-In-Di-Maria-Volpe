<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Language" content="it">
<meta name=”description” content=”Drive-in.com–Negozio_di_scarpe_online”>
<meta name="author" content="Giulio Di Maria, Matteo Volpe">
<meta name="keywords" content="shoes, Drive-in, italian-style">
<meta name="viewport"
	content="width=device-width, user-scalable=yes, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<link rel="stylesheet" href="CSS/Profile.css">
<title>Pagina di conferma</title>
<script type="text/javascript" src="caricaProfilo1.js"></script>
</head>

<body background="Imm/bianco.jpg">
<a href="Carrello.jsp"><img id="ritorno" title="Carrello"
		src="Imm/FRECCIA.png"></a>
		<h1 align="center">Conferma dei propri dati</h1>
	<center><div id="showing">	
		<script type="text/javascript">window.onload=(caricaProfilo1())</script>
	</div></center><form action="Ordine effettuato.jsp" method="get">
		<center style="clear: both;"><button id="bottone">Conferma ed effettua il pagamento con la carta mostrata</button></center></form>
	<footer>
		<%@ include file="Footer.jsp"%>
	</footer>
</body>
</html>