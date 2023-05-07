RESUMEN
- Pantalla de bienvenida (APP) explicando para que sirve la web y un botón que te lleva a la página (HOME) para hacer el presupuesto.
- En la pantalla del presupuesto (HOME), un botón para volver para atrás. (Routing para la lógica de ir de una página a otra) - HECHO
- 3 checkbox; uno abre PANELL con páginas y lenguas - HECHO
	- Botones de + y - e input donde poder escribir el número directamente - HECHO
- Abajo el precio total
- Un botón para guardar en un array lo seleccionado (crear interface y array en otro componente(?)):
	- web: true/false
		- páginas: 0
		- idiomas: 0
	- seo: true/false
	- ad: true/false
	- precio: 0
- Función que sume el precio (es uan función? hay algo con formularios para hacer eso?); false = 0 y true = a lo asignado según selección -> Esto hay que hacerlo con un SERVICIO
- """Utilitza també reactive forms per als inputs, amb FormGroup i FormControl per a garantir que l'usuari/ària introdueix els valors."""
- 




App que haga un presupuesto

EX1
Componente principal: Home
3 opciones a elegir (cada una es una función)(checkboxes):
	Página web 500€
	Campaña SEO 300€
	Campaña publicidad 200€
Precio total al seleccionar las opciones

EX2
Componente Panell es hijo del Home; Visible cuando se marque el check de Página Web
(Nombre de pàgines * el nombre d'idiomes * 30)€
- Utilitza també reactive forms per als inputs, amb FormGroup i FormControl per a garantir que l'usuari/ària introdueix els valors.

EX3
Botones para MÁS y MENOS en número de páginas e idiomas

EX4
Página de bienvenida y explicación
- És necessari que implementis la navegació entre vistes utilitzant el routing d’Angular.


NIVEL 2

EX5
Pop Up's de ayuda

EX6
Inputs para nombre del presupuesto y del cliente
Listado de presupuestos a la derecha
- Aquest array de pressupostos s'ha de guardar en el servei creat anteriorment per a calcular el cost total.
- El llistat dels pressupostos no s'ha de renderitzar directament en el component Home amb un ngFor, cal crear un nou component (pressupostList per exemple), que anomeni al servei per a obtenir l'array de pressupostos i s'encarregui de renderitzar-los.

EX7
3 botones para ordenar los presupuestos:
- Botó ordenar alfabèticament els pressupostos.
- Botó ordenar per data els pressupostos.
- Botó reinicialitzar ordre.

EX8
Buscador de presupuestos por nombre


NIVEL 3

EX9
URL que mantenga el presupuesto como está