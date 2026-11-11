/* =========================================================
   OMEGA TRIVIAL — BANCO DE PREGUNTAS
   Los Juegos de Omega · 21 de noviembre de 2026

   Este fichero es el único sitio donde viven las preguntas: lo lee tanto la
   página de revisión (trivial-preguntas.html) como la futura app del trivial,
   así que un cambio aquí llega a los dos.

   Estructura de cada ficha, igual que pide el manual (capítulo 15.1):
     id   identificador, para el acta
     cat  categoría
     uso  "ordinaria" (las 30 del juego)
          "extra"     (las 5 de la ronda de desempate, una por categoría)
          "reserva"   (muerte súbita y sustitución de preguntas anuladas)
     dif  facil / media / dificil
     p    enunciado
     o    las cuatro opciones, en el orden en que se muestran
     c    índice de la correcta dentro de o (0 = la primera)

   Reparto: 5 categorías x 12 preguntas = 60.
   Por categoría: 6 ordinarias + 1 de ronda extra + 5 de reserva.
   ========================================================= */

window.TRIVIAL_CATEGORIAS = ["DEPORTES", "CINE Y SERIES", "HISTORIA", "VIDEOJUEGOS", "CULTURA GENERAL"];

window.TRIVIAL_PREGUNTAS = [

/* ===================== DEPORTES ===================== */
{ id:"DEP-01", cat:"DEPORTES", uso:"ordinaria", dif:"facil",
  p:"¿Cuántos jugadores de un equipo están en la pista a la vez en baloncesto?",
  o:["Cinco","Seis","Siete","Once"], c:0 },

{ id:"DEP-02", cat:"DEPORTES", uso:"ordinaria", dif:"facil",
  p:"¿En qué ciudad española se celebraron los Juegos Olímpicos de 1992?",
  o:["Madrid","Barcelona","Sevilla","Valencia"], c:1 },

{ id:"DEP-03", cat:"DEPORTES", uso:"ordinaria", dif:"media",
  p:"¿Qué piloto español ganó los Mundiales de Fórmula 1 de 2005 y 2006?",
  o:["Carlos Sainz","Pedro de la Rosa","Fernando Alonso","Jaime Alguersuari"], c:2 },

{ id:"DEP-04", cat:"DEPORTES", uso:"ordinaria", dif:"media",
  p:"¿Qué ciclista español ganó cinco Tours de Francia consecutivos?",
  o:["Alberto Contador","Pedro Delgado","Óscar Pereiro","Miguel Induráin"], c:3 },

{ id:"DEP-05", cat:"DEPORTES", uso:"ordinaria", dif:"facil",
  p:"¿En qué país se celebró el Mundial de fútbol de 2010?",
  o:["Brasil","Alemania","Sudáfrica","Rusia"], c:2 },

{ id:"DEP-06", cat:"DEPORTES", uso:"ordinaria", dif:"media",
  p:"En tenis, ¿cómo se llama el saque que el rival no llega ni a tocar?",
  o:["Ace","Drive","Passing","Smash"], c:0 },

{ id:"DEP-07", cat:"DEPORTES", uso:"extra", dif:"media",
  p:"¿Cuántos minutos de juego dura un partido de la NBA sin prórrogas?",
  o:["40","48","60","90"], c:1 },

{ id:"DEP-08", cat:"DEPORTES", uso:"reserva", dif:"facil",
  p:"¿Cuántos aros tiene la bandera olímpica?",
  o:["Cuatro","Cinco","Seis","Siete"], c:1 },

{ id:"DEP-09", cat:"DEPORTES", uso:"reserva", dif:"facil",
  p:"¿En qué deporte destacó Michael Jordan?",
  o:["Béisbol","Fútbol americano","Baloncesto","Atletismo"], c:2 },

{ id:"DEP-10", cat:"DEPORTES", uso:"reserva", dif:"media",
  p:"¿Cada cuántos años se celebran los Juegos Olímpicos de verano?",
  o:["Dos","Tres","Cuatro","Cinco"], c:2 },

{ id:"DEP-11", cat:"DEPORTES", uso:"reserva", dif:"dificil",
  p:"¿Cuántos jugadores forman un equipo de waterpolo dentro del agua?",
  o:["Cinco","Seis","Siete","Nueve"], c:2 },

{ id:"DEP-12", cat:"DEPORTES", uso:"reserva", dif:"media",
  p:"¿Qué distancia tiene una maratón olímpica?",
  o:["21,097 km","32,195 km","42,195 km","50 km"], c:2 },


/* ===================== CINE Y SERIES ===================== */
{ id:"CIN-01", cat:"CINE Y SERIES", uso:"ordinaria", dif:"facil",
  p:"¿Quién dirigió 'Jurassic Park'?",
  o:["James Cameron","Steven Spielberg","George Lucas","Ridley Scott"], c:1 },

{ id:"CIN-02", cat:"CINE Y SERIES", uso:"ordinaria", dif:"facil",
  p:"¿Cómo se llama el protagonista de 'Breaking Bad'?",
  o:["Jesse Pinkman","Saul Goodman","Walter White","Hank Schrader"], c:2 },

{ id:"CIN-03", cat:"CINE Y SERIES", uso:"ordinaria", dif:"media",
  p:"¿En qué pueblo ficticio transcurre 'Stranger Things'?",
  o:["Hawkins","Derry","Riverdale","Twin Peaks"], c:0 },

{ id:"CIN-04", cat:"CINE Y SERIES", uso:"ordinaria", dif:"media",
  p:"¿Qué película surcoreana ganó el Óscar a mejor película en 2020?",
  o:["Old Boy","Parásitos","Train to Busan","Decisión de marcharse"], c:1 },

{ id:"CIN-05", cat:"CINE Y SERIES", uso:"ordinaria", dif:"facil",
  p:"¿Cómo se hace llamar el personaje que organiza el atraco en 'La casa de papel'?",
  o:["Berlín","Tokio","Helsinki","El Profesor"], c:3 },

{ id:"CIN-06", cat:"CINE Y SERIES", uso:"ordinaria", dif:"media",
  p:"¿Qué película de 1999 popularizó el efecto de cámara llamado 'bullet time'?",
  o:["Matrix","Blade","El sexto sentido","Gladiator"], c:0 },

{ id:"CIN-07", cat:"CINE Y SERIES", uso:"extra", dif:"media",
  p:"¿Quién es el creador de 'Los Simpson'?",
  o:["Seth MacFarlane","Matt Groening","Trey Parker","Mike Judge"], c:1 },

{ id:"CIN-08", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"¿Qué actor interpreta a Jack en 'Titanic'?",
  o:["Brad Pitt","Matt Damon","Leonardo DiCaprio","Tom Cruise"], c:2 },

{ id:"CIN-09", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"¿Qué animal es Simba en 'El Rey León'?",
  o:["Un tigre","Un león","Un leopardo","Un lince"], c:1 },

{ id:"CIN-10", cat:"CINE Y SERIES", uso:"reserva", dif:"media",
  p:"¿De qué saga es la frase 'Que la Fuerza te acompañe'?",
  o:["Star Trek","Dune","Star Wars","Battlestar Galactica"], c:2 },

{ id:"CIN-11", cat:"CINE Y SERIES", uso:"reserva", dif:"dificil",
  p:"¿Qué director español ganó el Óscar a mejor película de habla no inglesa por 'Todo sobre mi madre'?",
  o:["Alejandro Amenábar","Pedro Almodóvar","Juan Antonio Bayona","Fernando Trueba"], c:1 },

{ id:"CIN-12", cat:"CINE Y SERIES", uso:"reserva", dif:"media",
  p:"En 'El Señor de los Anillos', ¿cómo se llama el anillo que busca Sauron?",
  o:["El Anillo Único","El Anillo de Fuego","El Anillo de Mordor","El Anillo Negro"], c:0 },


/* ===================== HISTORIA ===================== */
{ id:"HIS-01", cat:"HISTORIA", uso:"ordinaria", dif:"facil",
  p:"¿En qué año cayó el Muro de Berlín?",
  o:["1985","1989","1991","1993"], c:1 },

{ id:"HIS-02", cat:"HISTORIA", uso:"ordinaria", dif:"facil",
  p:"¿Quién fue la primera persona en pisar la Luna?",
  o:["Yuri Gagarin","Buzz Aldrin","Neil Armstrong","Michael Collins"], c:2 },

{ id:"HIS-03", cat:"HISTORIA", uso:"ordinaria", dif:"facil",
  p:"¿En qué año llegó Cristóbal Colón a América?",
  o:["1476","1492","1512","1521"], c:1 },

{ id:"HIS-04", cat:"HISTORIA", uso:"ordinaria", dif:"media",
  p:"¿Qué civilización construyó Machu Picchu?",
  o:["Los mayas","Los aztecas","Los incas","Los olmecas"], c:2 },

{ id:"HIS-05", cat:"HISTORIA", uso:"ordinaria", dif:"media",
  p:"¿En qué año se aprobó la Constitución Española vigente?",
  o:["1975","1977","1978","1982"], c:2 },

{ id:"HIS-06", cat:"HISTORIA", uso:"ordinaria", dif:"media",
  p:"¿Qué rey francés era conocido como 'el Rey Sol'?",
  o:["Luis XIV","Luis XVI","Carlos X","Francisco I"], c:0 },

{ id:"HIS-07", cat:"HISTORIA", uso:"extra", dif:"media",
  p:"¿En qué año terminó la Segunda Guerra Mundial?",
  o:["1939","1943","1945","1948"], c:2 },

{ id:"HIS-08", cat:"HISTORIA", uso:"reserva", dif:"media",
  p:"¿Quién fue el primer emperador de Roma?",
  o:["Julio César","Augusto","Nerón","Trajano"], c:1 },

{ id:"HIS-09", cat:"HISTORIA", uso:"reserva", dif:"media",
  p:"¿En qué año comenzó la Primera Guerra Mundial?",
  o:["1912","1914","1916","1918"], c:1 },

{ id:"HIS-10", cat:"HISTORIA", uso:"reserva", dif:"media",
  p:"¿Qué artista pintó la bóveda de la Capilla Sixtina?",
  o:["Leonardo da Vinci","Rafael","Miguel Ángel","Donatello"], c:2 },

{ id:"HIS-11", cat:"HISTORIA", uso:"reserva", dif:"dificil",
  p:"¿Qué faraón egipcio apareció en 1922 con su tumba casi intacta?",
  o:["Ramsés II","Keops","Tutankamón","Akenatón"], c:2 },

{ id:"HIS-12", cat:"HISTORIA", uso:"reserva", dif:"facil",
  p:"¿Qué muro separaba el Imperio romano de los pueblos del norte de Britania?",
  o:["El Muro de Adriano","La Muralla de Aureliano","El Limes Germánico","La Muralla de Antonino"], c:0 },


/* ===================== VIDEOJUEGOS ===================== */
{ id:"VID-01", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"facil",
  p:"¿Cómo se llama el erizo azul mascota de SEGA?",
  o:["Tails","Sonic","Knuckles","Shadow"], c:1 },

{ id:"VID-02", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"facil",
  p:"¿Qué compañía fabrica la consola PlayStation?",
  o:["Microsoft","Nintendo","Sony","SEGA"], c:2 },

{ id:"VID-03", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"facil",
  p:"¿En qué juego se construye un mundo entero a base de bloques?",
  o:["Terraria","Roblox","Minecraft","Fortnite"], c:2 },

{ id:"VID-04", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"media",
  p:"¿Cómo se llama el protagonista de la saga 'The Legend of Zelda'?",
  o:["Zelda","Link","Ganon","Navi"], c:1 },

{ id:"VID-05", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"media",
  p:"¿Qué consola híbrida de sobremesa y portátil lanzó Nintendo en 2017?",
  o:["Wii U","Switch","3DS","GameCube"], c:1 },

{ id:"VID-06", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"media",
  p:"¿Qué juego de móvil sacó a la calle en 2016 a millones de personas a cazar criaturas?",
  o:["Ingress","Pokémon GO","Clash Royale","Candy Crush"], c:1 },

{ id:"VID-07", cat:"VIDEOJUEGOS", uso:"extra", dif:"media",
  p:"¿A qué princesa rescata Mario habitualmente?",
  o:["Daisy","Rosalina","Peach","Zelda"], c:2 },

{ id:"VID-08", cat:"VIDEOJUEGOS", uso:"reserva", dif:"facil",
  p:"¿De qué país es la empresa Nintendo?",
  o:["Corea del Sur","China","Japón","Estados Unidos"], c:2 },

{ id:"VID-09", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿De qué color es Blinky, el fantasma que persigue a Pac-Man?",
  o:["Rojo","Rosa","Azul","Naranja"], c:0 },

{ id:"VID-10", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿Qué oficio tiene Mario en los juegos de Nintendo?",
  o:["Carpintero","Fontanero","Electricista","Albañil"], c:1 },

{ id:"VID-11", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"¿Qué juego de 2017 llevó el 'battle royale' al gran público antes que Fortnite?",
  o:["Apex Legends","PUBG","H1Z1","Warzone"], c:1 },

{ id:"VID-12", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿En qué juego de piezas que caen hay que completar líneas?",
  o:["Tetris","Columns","Puyo Puyo","Dr. Mario"], c:0 },


/* ===================== CULTURA GENERAL =====================
   Mezcla a propósito: geografía, lengua, arte, naturaleza y algo de ciencia
   básica, para que la categoría no se le haga cuesta arriba a nadie. */
{ id:"CUL-01", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"facil",
  p:"¿Cuál es la capital de Australia?",
  o:["Sídney","Canberra","Melbourne","Brisbane"], c:1 },

{ id:"CUL-02", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"facil",
  p:"¿Cuál es el planeta más grande del sistema solar?",
  o:["Saturno","Júpiter","Neptuno","Urano"], c:1 },

{ id:"CUL-03", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"media",
  p:"¿Cuál es el símbolo químico del oro?",
  o:["Ag","Au","Or","Go"], c:1 },

{ id:"CUL-04", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"media",
  p:"¿Cuál es el río más largo de la península ibérica?",
  o:["El Ebro","El Duero","El Tajo","El Guadalquivir"], c:2 },

{ id:"CUL-05", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"media",
  p:"¿Cuál es el órgano más grande del cuerpo humano?",
  o:["El hígado","Los pulmones","La piel","El intestino"], c:2 },

{ id:"CUL-06", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"media",
  p:"¿Quién escribió 'Don Quijote de la Mancha'?",
  o:["Lope de Vega","Miguel de Cervantes","Francisco de Quevedo","Garcilaso de la Vega"], c:1 },

{ id:"CUL-07", cat:"CULTURA GENERAL", uso:"extra", dif:"media",
  p:"¿Qué metal es líquido a temperatura ambiente?",
  o:["Plomo","Mercurio","Estaño","Galio"], c:1 },

{ id:"CUL-08", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿A qué temperatura hierve el agua a nivel del mar?",
  o:["90 °C","100 °C","120 °C","80 °C"], c:1 },

{ id:"CUL-09", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Cuántas comunidades autónomas tiene España?",
  o:["15","17","19","21"], c:1 },

{ id:"CUL-10", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Quién pintó 'El Guernica'?",
  o:["Salvador Dalí","Joan Miró","Pablo Picasso","Francisco de Goya"], c:2 },

{ id:"CUL-11", cat:"CULTURA GENERAL", uso:"reserva", dif:"dificil",
  p:"¿Qué científica ganó el Premio Nobel en dos disciplinas distintas?",
  o:["Rosalind Franklin","Marie Curie","Lise Meitner","Dorothy Hodgkin"], c:1 },

{ id:"CUL-12", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿Cuál es el animal terrestre más grande del mundo?",
  o:["El rinoceronte","La jirafa","El elefante africano","El hipopótamo"], c:2 },

];
