/* =========================================================
   OMEGA TRIVIAL — BANCO DE PREGUNTAS
   Los Juegos de Omega · 21 de noviembre de 2026

   GENERADO el 14 de noviembre de 2026 a partir de
   "Omega Trivial - Banco de Preguntas - Consolidado.docx".
   No se edita a mano: se edita el Word y se vuelve a generar, o se pierde
   el cambio la proxima vez.

   Este fichero es el unico sitio donde viven las preguntas: lo lee el panel
   del trivial (trivial.html) y la pantalla grande, asi que un cambio aqui
   llega a los dos.

   Estructura de cada ficha:
     id    identificador, para el acta
     cat   categoria
     uso   "ordinaria" (las 30 que se juegan)
           "extra"     (las 5 del desempate, una por categoria)
           "reserva"   (muerte subita y sustitucion de preguntas anuladas)
     dif   facil / media / dificil
     p     enunciado
     o     las cuatro opciones
     c     indice de la correcta dentro de o (0 = la primera)
     expl  la explicacion que se lee en voz alta al cerrar la pregunta

   Ojo con el orden de las opciones: el panel las baraja al entrar la
   pregunta en juego, asi que da igual en que letra este escrita la buena.

   Reparto:
     126 preguntas = 30 ordinarias + 5 de desempate + 91 de reserva
     DEPORTES          6 + 1 + 15
     CINE Y SERIES     6 + 1 + 18
     HISTORIA          6 + 1 +  4
     VIDEOJUEGOS       6 + 1 + 20
     CULTURA GENERAL   6 + 1 + 34
   ========================================================= */

window.TRIVIAL_CATEGORIAS = ["DEPORTES","CINE Y SERIES","HISTORIA","VIDEOJUEGOS","CULTURA GENERAL"];

window.TRIVIAL_PREGUNTAS = [

/* ============= DEPORTES ============= */

/* -- Las seis que se juegan -- */

{ id:"DEP-01", cat:"DEPORTES", uso:"ordinaria", dif:"facil",
  p:"En un partido de baloncesto tradicional, ¿cuántos jugadores de cada equipo están en la pista al inicio, sin contar a los suplentes?",
  o:["Cinco","Siete","Cuatro","Seis"], c:0,
  expl:"En el quinteto habitual hay un base, un escolta, un alero, un ala-pívot y un pívot." },

{ id:"DEP-02", cat:"DEPORTES", uso:"ordinaria", dif:"facil",
  p:"¿En qué ciudad española se celebraron los Juegos Olímpicos de verano de 1992?",
  o:["Sevilla","Barcelona","Madrid","Valencia"], c:1,
  expl:"El Estadio Olímpico de Montjuïc acogió las ceremonias de apertura y clausura." },

{ id:"DEP-03", cat:"DEPORTES", uso:"ordinaria", dif:"media",
  p:"¿Qué piloto ganó el Mundial de Fórmula 1 en 2005 y en 2006?",
  o:["Lewis Hamilton","Carlos Sainz","Fernando Alonso","Ayrton Senna"], c:2,
  expl:"Ganó los dos títulos con la escudería Renault." },

{ id:"DEP-04", cat:"DEPORTES", uso:"ordinaria", dif:"media",
  p:"¿Qué ciclista español ganó cinco Tours de Francia consecutivos entre 1991 y 1995?",
  o:["Óscar Pereiro","Pedro Delgado","Alberto Contador","Miguel Induráin"], c:3,
  expl:"Induráin también ganó el Giro de Italia en 1992 y 1993, los mismos años en los que se llevó el Tour." },

{ id:"DEP-05", cat:"DEPORTES", uso:"ordinaria", dif:"facil",
  p:"¿Qué país organizó el Mundial masculino de fútbol de 2010?",
  o:["Alemania","Brasil","Sudáfrica","Rusia"], c:2,
  expl:"La final, que ganó España, se disputó en Johannesburgo." },

{ id:"DEP-06", cat:"DEPORTES", uso:"ordinaria", dif:"media",
  p:"¿En qué localidad histórica de Grecia se enciende tradicionalmente la llama olímpica antes del relevo de la antorcha?",
  o:["Delfos","Olimpia","Esparta","Atenas"], c:1,
  expl:"La ceremonia se celebra en el recinto arqueológico de Olimpia, junto al templo de Hera." },

/* -- La del desempate -- */

{ id:"DEP-07", cat:"DEPORTES", uso:"extra", dif:"media",
  p:"¿Cuántos minutos reglamentarios de juego tiene un partido de la NBA sin prórroga?",
  o:["40 minutos","48 minutos","44 minutos","60 minutos"], c:1,
  expl:"La NBA reparte el tiempo reglamentario en cuatro cuartos de doce minutos." },

/* -- Reserva -- */

{ id:"DEP-08", cat:"DEPORTES", uso:"reserva", dif:"facil",
  p:"¿Cuántos aros aparecen en la bandera olímpica?",
  o:["Seis","Cinco","Siete","Cuatro"], c:1,
  expl:"Los cinco aros entrelazados simbolizan la unión de los cinco continentes en el movimiento olímpico." },

{ id:"DEP-09", cat:"DEPORTES", uso:"reserva", dif:"media",
  p:"¿Cada cuántos años se celebran normalmente los Juegos Olímpicos de verano?",
  o:["Cada dos años","Cada cinco años","Cada cuatro años","Cada tres años"], c:2,
  expl:"La primera edición de los Juegos Olímpicos modernos de verano fue en Atenas en 1896 y la siguiente, en París en 1900." },

{ id:"DEP-10", cat:"DEPORTES", uso:"reserva", dif:"dificil",
  p:"¿Cuántos jugadores de cada equipo empiezan un partido de waterpolo en el agua, incluido el portero?",
  o:["Ocho","Cinco","Siete","Seis"], c:2,
  expl:"El equipo empieza con seis jugadores de campo y un portero." },

{ id:"DEP-11", cat:"DEPORTES", uso:"reserva", dif:"media",
  p:"¿Cuál es la distancia oficial de un maratón, expresada en kilómetros y metros?",
  o:["43 kilómetros y 195 metros","40 kilómetros y 195 metros","42 kilómetros y 195 metros","42 kilómetros y 500 metros"], c:2,
  expl:"En el sistema anglosajón, la distancia equivale aproximadamente a 26 millas y 385 yardas." },

{ id:"DEP-12", cat:"DEPORTES", uso:"reserva", dif:"facil",
  p:"¿En qué gran vuelta ciclista masculina que tradicionalmente termina en París lleva el líder de la clasificación general un maillot amarillo?",
  o:["Tour de Francia","Tour de Suiza","Giro de Italia","Vuelta a España"], c:0,
  expl:"El Tour introdujo el maillot amarillo en 1919 para que el público pudiera identificar al líder." },

{ id:"DEP-13", cat:"DEPORTES", uso:"reserva", dif:"facil",
  p:"¿Qué tenista ganó 14 títulos individuales masculinos en Roland Garros entre 2005 y 2022?",
  o:["Roger Federer","Rafael Nadal","Novak Djokovic","Björn Borg"], c:1,
  expl:"Ganó su primer título en la tierra batida de París con 19 años." },

{ id:"DEP-14", cat:"DEPORTES", uso:"reserva", dif:"media",
  p:"¿Cuántos minutos de juego dura, sin contar el descuento, la prórroga de un partido eliminatorio de un Mundial masculino de fútbol?",
  o:["20 minutos","25 minutos","40 minutos","30 minutos"], c:3,
  expl:"La prórroga se divide en dos tiempos de quince minutos cada uno." },

{ id:"DEP-15", cat:"DEPORTES", uso:"reserva", dif:"facil",
  p:"¿En qué deporte ganó el jamaicano Usain Bolt el oro olímpico de los 100 metros lisos?",
  o:["Atletismo","Patinaje de velocidad","Natación","Ciclismo en pista"], c:0,
  expl:"Bolt ganó el oro olímpico de los 100 metros lisos en Pekín, Londres y Río de Janeiro." },

{ id:"DEP-16", cat:"DEPORTES", uso:"reserva", dif:"dificil",
  p:"¿Qué equipo de la NBA ganó 73 partidos y perdió 9 en la temporada regular 2015–2016?",
  o:["Golden State Warriors","Boston Celtics","Chicago Bulls","Los Angeles Lakers"], c:0,
  expl:"Los Warriors superaron las 72 victorias que habían logrado los Chicago Bulls en 1995–1996." },

{ id:"DEP-17", cat:"DEPORTES", uso:"reserva", dif:"media",
  p:"¿Qué gimnasta estadounidense ganó el oro individual absoluto de gimnasia artística femenina en Río 2016 y París 2024?",
  o:["Aly Raisman","Gabby Douglas","Sunisa Lee","Simone Biles"], c:3,
  expl:"En París, Biles se llevó también el oro por equipos y el de salto." },

{ id:"DEP-18", cat:"DEPORTES", uso:"reserva", dif:"media",
  p:"¿Cómo se anuncia en tenis el empate a 40 puntos en un juego con ventaja?",
  o:["Punto de rotura","Punto de partido","Ventaja","Iguales"], c:3,
  expl:"A partir de iguales, un jugador o pareja necesita ganar dos puntos consecutivos para llevarse el juego." },

{ id:"DEP-19", cat:"DEPORTES", uso:"reserva", dif:"media",
  p:"¿Cómo se llama en tenis un saque válido que da el punto directo porque el rival no llega a tocar la pelota?",
  o:["Ace","Remate","Volea","Dejada"], c:0,
  expl:"Para que sea válido, el primer bote debe caer en el cuadro de saque correspondiente." },

{ id:"DEP-20", cat:"DEPORTES", uso:"reserva", dif:"dificil",
  p:"¿Qué jugador eligieron los Cleveland Cavaliers con el número uno del draft de la NBA de 2003?",
  o:["Dwyane Wade","Chris Bosh","Carmelo Anthony","LeBron James"], c:3,
  expl:"James pasó directamente del instituto a la NBA para jugar con Cleveland." },

{ id:"DEP-21", cat:"DEPORTES", uso:"reserva", dif:"facil",
  p:"¿En qué deporte olímpico se compite en arrancada y en dos tiempos?",
  o:["Lucha grecorromana","Atletismo","Gimnasia artística","Halterofilia"], c:3,
  expl:"En la arrancada se eleva la barra sobre la cabeza en un movimiento, mientras que en dos tiempos pasa primero por los hombros." },

{ id:"DEP-22", cat:"DEPORTES", uso:"reserva", dif:"dificil",
  p:"¿Qué piloto ganó diez Grandes Premios consecutivos de Fórmula 1 en la temporada 2023?",
  o:["Sebastian Vettel","Max Verstappen","Michael Schumacher","Lewis Hamilton"], c:1,
  expl:"Verstappen completó la racha con su victoria en el Gran Premio de Italia, en Monza." },

/* ======== CINE Y SERIES ======== */

/* -- Las seis que se juegan -- */

{ id:"CIN-01", cat:"CINE Y SERIES", uso:"ordinaria", dif:"facil",
  p:"¿Quién dirigió la película Jurassic Park, estrenada en 1993?",
  o:["Ridley Scott","Steven Spielberg","James Cameron","George Lucas"], c:1,
  expl:"Spielberg llevó al cine la novela de Michael Crichton sobre un parque de dinosaurios clonados." },

{ id:"CIN-02", cat:"CINE Y SERIES", uso:"ordinaria", dif:"media",
  p:"¿Cuál es el lema de la Casa Stark en Juego de tronos?",
  o:["Se acerca el invierno","Fuego y sangre","Nuestra es la furia","Oye mi rugido"], c:0,
  expl:"El lema alude a los inviernos largos y duros que pueden llegar a Poniente. También se puede aceptar WINTER IS COMING o EL INVIERNO SE ACERCA (en Sudamérica)" },

{ id:"CIN-03", cat:"CINE Y SERIES", uso:"ordinaria", dif:"media",
  p:"¿En qué localidad ficticia de Indiana comienza la historia de Stranger Things?",
  o:["Hawkins","Twin Peaks","Riverdale","Derry"], c:0,
  expl:"La desaparición de Will Byers en Hawkins pone en marcha la historia de la primera temporada." },

{ id:"CIN-04", cat:"CINE Y SERIES", uso:"ordinaria", dif:"media",
  p:"¿Qué película surcoreana ganó el Óscar a la mejor película en la gala de 2020?",
  o:["Memories of Murder","Parásitos","Burning","Oldboy"], c:1,
  expl:"La película de Bong Joon-ho se convirtió en la primera cinta de habla no inglesa en ganar el Óscar a la mejor película." },

{ id:"CIN-05", cat:"CINE Y SERIES", uso:"ordinaria", dif:"dificil",
  p:"¿Qué número lleva Seong Gi-hun en su uniforme durante la primera temporada de El juego del calamar?",
  o:["456","001","067","218"], c:0,
  expl:"Gi-hun se reconoce por el 456 en el chándal verde que viste desde la primera prueba." },

{ id:"CIN-06", cat:"CINE Y SERIES", uso:"ordinaria", dif:"media",
  p:"¿En qué película de 1999 esquiva balas Neo en una escena filmada con el efecto conocido como bullet time?",
  o:["Matrix","Dark City","Equilibrium","Blade"], c:0,
  expl:"Keanu Reeves era el actor en el papel de Neo." },

/* -- La del desempate -- */

{ id:"CIN-07", cat:"CINE Y SERIES", uso:"extra", dif:"media",
  p:"¿Qué alias adopta Walter White cuando empieza a vender metanfetamina en Breaking Bad?",
  o:["Tuco","Scarface","Heisenberg","Capone"], c:2,
  expl:"El alias toma el apellido de Werner Heisenberg, físico conocido por el principio de incertidumbre." },

/* -- Reserva -- */

{ id:"CIN-08", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"¿Qué actor interpreta a Jack Dawson en Titanic, la película de 1997 dirigida por James Cameron?",
  o:["Tom Cruise","Brad Pitt","Leonardo DiCaprio","Matt Damon"], c:2,
  expl:"DiCaprio comparte protagonismo con Kate Winslet, que interpreta a Rose." },

{ id:"CIN-09", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"¿De qué especie es Simba en la película de Disney El Rey León?",
  o:["Tigre","León","Guepardo","Leopardo"], c:1,
  expl:"Simba es hijo de Mufasa, el rey de las Tierras del Reino." },

{ id:"CIN-10", cat:"CINE Y SERIES", uso:"reserva", dif:"media",
  p:"¿A qué saga cinematográfica pertenece la frase «Que la Fuerza te acompañe»?",
  o:["Battlestar Galactica","Star Trek","Star Wars","Stargate"], c:2,
  expl:"En la película original de 1977, la frase se usa para desear suerte antes del ataque a la Estrella de la Muerte." },

{ id:"CIN-11", cat:"CINE Y SERIES", uso:"reserva", dif:"dificil",
  p:"¿Quién dirigió Todo sobre mi madre, la película española que ganó el Óscar a la mejor película de habla no inglesa en 2000?",
  o:["Fernando Trueba","Pedro Almodóvar","Carlos Saura","Alejandro Amenábar"], c:1,
  expl:"En la película, Manuela viaja a Barcelona después de perder a su hijo." },

{ id:"CIN-12", cat:"CINE Y SERIES", uso:"reserva", dif:"media",
  p:"En El señor de los anillos, ¿cómo se llama el anillo que forjó Sauron para dominar a los demás anillos de poder?",
  o:["El Anillo Único","El Anillo del Aire","El Anillo de Fuego","El Anillo de Barahir"], c:0,
  expl:"Sauron forjó el anillo en el Monte del Destino, en Mordor." },

{ id:"CIN-13", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"¿Qué película ganó el primer Óscar a la mejor película de animación en la gala de 2002?",
  o:["Shrek","Buscando a Nemo","Monstruos, S. A.","Jimmy Neutron"], c:0,
  expl:"En aquella primera edición de la categoría, Shrek se impuso a Monstruos, S. A. y Jimmy Neutron." },

{ id:"CIN-14", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"¿Cómo se llama la luna habitada por los na’vi en Avatar, la película de James Cameron estrenada en 2009?",
  o:["Arrakis","Krypton","Endor","Pandora"], c:3,
  expl:"Pandora orbita un gigante gaseoso llamado Polifemo." },

{ id:"CIN-15", cat:"CINE Y SERIES", uso:"reserva", dif:"media",
  p:"¿A qué juego de rol de mesa juegan Mike, Will, Dustin y Lucas al inicio del primer episodio de Stranger Things?",
  o:["Dungeons & Dragons","Magic: The Gathering","Warhammer","HeroQuest"], c:0,
  expl:"Los amigos toman del juego el nombre Demogorgon para referirse a la criatura de la primera temporada." },

{ id:"CIN-16", cat:"CINE Y SERIES", uso:"reserva", dif:"media",
  p:"¿Quién compuso la música original de Interstellar, la película de Christopher Nolan de 2014?",
  o:["Hans Zimmer","Ennio Morricone","Howard Shore","John Williams"], c:0,
  expl:"Zimmer recurrió al órgano de tubos para dar a la banda sonora uno de sus sonidos más reconocibles." },

{ id:"CIN-17", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"¿Cómo se llama el profesor de química que interpreta Bryan Cranston en Breaking Bad?",
  o:["Saul Goodman","Jesse Pinkman","Walter White","Hank Schrader"], c:2,
  expl:"Walter se alía con Jesse Pinkman, uno de sus antiguos alumnos." },

{ id:"CIN-18", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"En Star Wars, ¿quién fue el dueño original del sable de luz azul que Obi-Wan le entrega a Luke en Una nueva esperanza?",
  o:["Mace Windu","Anakin Skywalker","Qui-Gon Jinn","Luke Skywalker"], c:1,
  expl:"Obi-Wan conserva el sable tras enfrentarse a Anakin en Mustafar." },

{ id:"CIN-19", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"¿Qué casa de Hogwarts tiene un tejón como animal emblemático?",
  o:["Hufflepuff","Gryffindor","Slytherin","Ravenclaw"], c:0,
  expl:"La casa, fundada por Helga Hufflepuff, usa el amarillo y el negro como colores." },

{ id:"CIN-20", cat:"CINE Y SERIES", uso:"reserva", dif:"media",
  p:"¿Qué ave ficticia aparece en el broche de Katniss Everdeen en la primera película de Los juegos del hambre?",
  o:["Cuervo de tres ojos","Fénix","Grifo","El sinsajo"], c:3,
  expl:"En la saga, el sinsajo acaba convirtiéndose en un símbolo de la rebelión contra el Capitolio." },

{ id:"CIN-21", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"¿Qué alias usa Sergio Marquina, el personaje que organiza el primer atraco de La casa de papel?",
  o:["Berlín","Palermo","Helsinki","El Profesor"], c:3,
  expl:"El Profesor dirige desde fuera el atraco a la Fábrica Nacional de Moneda y Timbre." },

{ id:"CIN-22", cat:"CINE Y SERIES", uso:"reserva", dif:"facil",
  p:"En Hora de aventuras, ¿qué animal es Jake, el compañero de Finn que puede estirar su cuerpo y cambiar de forma?",
  o:["Oso","Un perro","Gato","Zorro"], c:1,
  expl:"Jake y Finn se criaron juntos como hermanos, y Jake usa sus poderes para ayudarlos en sus aventuras." },

{ id:"CIN-23", cat:"CINE Y SERIES", uso:"reserva", dif:"media",
  p:"¿Quién creó la familia protagonista de la serie animada Los Simpson?",
  o:["Mike Judge","Matt Groening","Genndy Tartakovsky","Seth MacFarlane"], c:1,
  expl:"La familia apareció primero en unos cortos de El show de Tracey Ullman, en 1987." },

{ id:"CIN-24", cat:"CINE Y SERIES", uso:"reserva", dif:"media",
  p:"¿Cómo se titula el corto de 1928 en el que Mickey Mouse debutó ante el público pilotando un barco de vapor?",
  o:["The Gallopin’ Gaucho","The Band Concert","Plane Crazy","Steamboat Willie"], c:3,
  expl:"El corto se estrenó en Nueva York el 18 de noviembre de 1928." },

{ id:"CIN-25", cat:"CINE Y SERIES", uso:"reserva", dif:"dificil",
  p:"¿Cómo se llama el demonio de Tasmania de los Looney Tunes que gira como un torbellino?",
  o:["Gossamer","Marvin el Marciano","Yosemite Sam","Taz"], c:3,
  expl:"Taz debutó en el corto de 1954 Devil May Hare, en el que se enfrenta a Bugs Bunny." },

/* ============= HISTORIA ============= */

/* -- Las seis que se juegan -- */

{ id:"HIS-01", cat:"HISTORIA", uso:"ordinaria", dif:"facil",
  p:"¿En qué año cayó el Muro de Berlín, levantado en 1961 por la República Democrática Alemana?",
  o:["1991","1989","1985","1990"], c:1,
  expl:"Los pasos fronterizos de Berlín se abrieron la noche del 9 de noviembre de 1989." },

{ id:"HIS-02", cat:"HISTORIA", uso:"ordinaria", dif:"facil",
  p:"¿Cuál era el apellido de la primera persona en pisar la Luna durante la misión Apolo 11?",
  o:["Collins","Aldrin","Armstrong","Shepard"], c:2,
  expl:"Buzz Aldrin salió del módulo lunar después de Armstrong, mientras Michael Collins seguía en órbita." },

{ id:"HIS-03", cat:"HISTORIA", uso:"ordinaria", dif:"facil",
  p:"¿En qué año llegó Cristóbal Colón a América en su primer viaje?",
  o:["1502","1492","1498","1488"], c:1,
  expl:"La expedición avistó tierra en las Bahamas el 12 de octubre de ese año." },

{ id:"HIS-04", cat:"HISTORIA", uso:"ordinaria", dif:"media",
  p:"¿Qué civilización construyó Machu Picchu?",
  o:["Aztecas","Olmecas","Incas","Mayas"], c:2,
  expl:"La ciudadela se levantó en los Andes del actual Perú en el siglo XV." },

{ id:"HIS-05", cat:"HISTORIA", uso:"ordinaria", dif:"media",
  p:"¿En qué año se ratificó en referéndum la Constitución española vigente?",
  o:["1982","1977","1978","1975"], c:2,
  expl:"La votación se celebró el 6 de diciembre, fecha que hoy se conmemora como Día de la Constitución." },

{ id:"HIS-06", cat:"HISTORIA", uso:"ordinaria", dif:"media",
  p:"¿Qué monarca de la Corona de Aragón era conocido como El Conquistador?",
  o:["Jaime I","Alfonso X","Pedro II","Fernando III"], c:0,
  expl:"Jaime I fue rey de Valencia desde 1238 hasta su fallecimiento en 1276 ." },

/* -- La del desempate -- */

{ id:"HIS-07", cat:"HISTORIA", uso:"extra", dif:"media",
  p:"¿En qué año comenzó la Primera Guerra Mundial?",
  o:["1916","1914","1918","1912"], c:1,
  expl:"La guerra comenzó cuando Austria-Hungría declaró la guerra a Serbia en julio de 1914." },

/* -- Reserva -- */

{ id:"HIS-08", cat:"HISTORIA", uso:"reserva", dif:"media",
  p:"¿Quién fue el primer emperador romano, que asumió el poder en el año 27 antes de Cristo tras derrotar a Marco Antonio?",
  o:["Nerón","Octavio Augusto","Julio César","Tiberio"], c:1,
  expl:"El Senado romano le concedió el título de Augusto en el año 27 antes de Cristo." },

{ id:"HIS-09", cat:"HISTORIA", uso:"reserva", dif:"media",
  p:"¿En qué año terminó la Segunda Guerra Mundial con la rendición de Japón?",
  o:["1948","1946","1945","1944"], c:2,
  expl:"La rendición formal se firmó el 2 de septiembre a bordo del acorazado estadounidense Missouri." },

{ id:"HIS-10", cat:"HISTORIA", uso:"reserva", dif:"dificil",
  p:"¿Qué faraón egipcio estaba enterrado en la tumba que el equipo de Howard Carter descubrió en 1922?",
  o:["Ramsés II","Tutmosis III","Tutankamón","Akenatón"], c:2,
  expl:"Entre los objetos de la tumba estaba la conocida máscara funeraria de oro del faraón." },

{ id:"HIS-11", cat:"HISTORIA", uso:"reserva", dif:"facil",
  p:"¿Qué muralla mandó construir el emperador Adriano en el norte de la Britania romana?",
  o:["El Muro de Adriano","Muro de Antonino","Muralla de Aureliano","Muralla de Teodosio"], c:0,
  expl:"La construcción comenzó en el siglo II y el trazado cruza el norte de la actual Inglaterra." },

/* ========== VIDEOJUEGOS ========== */

/* -- Las seis que se juegan -- */

{ id:"VID-01", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"facil",
  p:"¿Cómo se llama el erizo azul que es la mascota de Sega?",
  o:["Shadow","Sonic","Knuckles","Tails"], c:1,
  expl:"Su primer videojuego salió en 1991 para la consola Mega Drive de Sega." },

{ id:"VID-02", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"media",
  p:"Según el Libro Guinness de los Récords, ¿cuál es el videojuego individual más vendido de la historia?",
  o:["Tetris","EA Sports FIFA","GTA","Minecraft"], c:3,
  expl:"Es el videojuego más vendido de la historia (+ de 350 millones de copias) si se considera un único título individual (un mismo juego base adaptado a distintas plataformas)." },

{ id:"VID-03", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"facil",
  p:"¿Qué videojuego de Mojang permite extraer y colocar bloques y tiene un modo Creativo y otro de Supervivencia?",
  o:["Fortnite","Terraria","Minecraft","Roblox"], c:2,
  expl:"En el modo Supervivencia hay que conseguir recursos para fabricar herramientas y construir refugios." },

{ id:"VID-04", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"media",
  p:"¿Cómo se llama el héroe jugable que empuña la Espada Maestra en The Legend of Zelda: Ocarina of Time?",
  o:["Darunia","Link","Sheik","Ganondorf"], c:1,
  expl:"Link alterna entre su infancia y su edad adulta a lo largo de la aventura." },

{ id:"VID-05", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"media",
  p:"¿Qué consola híbrida de sobremesa y portátil lanzó Nintendo en marzo de 2017?",
  o:["Wii U","Nintendo 3DS","Nintendo Switch","Game Boy Advance"], c:2,
  expl:"La Switch original permite pasar del televisor al modo portátil retirándola de su base." },

{ id:"VID-06", cat:"VIDEOJUEGOS", uso:"ordinaria", dif:"media",
  p:"¿Qué juego de móvil lanzó Niantic en 2016 para capturar Pokémon en ubicaciones del mundo real?",
  o:["Pikmin Bloom","Pokémon GO","Monster Hunter Now","Ingress"], c:1,
  expl:"El juego usa la ubicación del móvil para situar en el mapa a los Pokémon, las Poképaradas y los gimnasios." },

/* -- La del desempate -- */

{ id:"VID-07", cat:"VIDEOJUEGOS", uso:"extra", dif:"media",
  p:"¿En qué año estrenó Konami su plataforma de fútbol gratuita eFootball reemplazando la saga Pro Evolution Soccer?",
  o:["2021","2022","2023","2025"], c:0,
  expl:"Aunque el título era eFootball 2022, Konami lo publicó el 30 de septiembre de 2021." },

/* -- Reserva -- */

{ id:"VID-08", cat:"VIDEOJUEGOS", uso:"reserva", dif:"facil",
  p:"¿En qué país se fundó Nintendo, concretamente en la ciudad de Kioto?",
  o:["China","Estados Unidos","Japón","Corea del Sur"], c:2,
  expl:"La empresa empezó en Kioto fabricando cartas japonesas de juego llamadas hanafuda." },

{ id:"VID-09", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿De qué color es Blinky en el Pac-Man original de recreativa?",
  o:["Rojo","Azul","Naranja","Rosa"], c:0,
  expl:"Blinky persigue directamente a Pac-Man, mientras que Pinky intenta adelantarse a él." },

{ id:"VID-10", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"¿Qué videojuego de 2017 creado por Brendan Greene, conocido como PlayerUnknown, enfrenta a los jugadores en un mapa llamado Erangel?",
  o:["Apex Legends","PUBG","Fortnite Battle Royale","Call of Duty: Warzone"], c:1,
  expl:"Erangel fue el mapa original del juego, donde los participantes aterrizan en paracaídas antes de buscar equipo." },

{ id:"VID-11", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿En qué videojuego creado por Alekséi Pázhitnov hay que encajar piezas de cuatro bloques para completar líneas horizontales?",
  o:["Tetris","Puyo Puyo","Dr. Mario","Columns"], c:0,
  expl:"Cuando se completan cuatro filas de una vez, esa jugada también recibe el nombre de tetris." },

{ id:"VID-12", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"¿Cómo se llama el pájaro azul que protagoniza el juego de recreativa de Sega de 1984 en el que rescata polluelos de unos gatos?",
  o:["Bean","Flicky","Storm","Jet"], c:1,
  expl:"En cada pantalla, Flicky debe llevar a los polluelos hasta una puerta de salida." },

{ id:"VID-13", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"¿Cuántos campeones tenía League of Legends en su lanzamiento oficial de octubre de 2009?",
  o:["40","20","50","30"], c:0,
  expl:"Entre esos campeones originales estaban Annie, Ashe y Ryze." },

{ id:"VID-14", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿A qué princesa mantiene prisionera Bowser en Super Mario 64?",
  o:["Daisy","Rosalina","Peach","Pauline"], c:2,
  expl:"Mario recorre mundos escondidos en los cuadros del castillo para rescatarla." },

{ id:"VID-15", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"¿En qué entrega numerada de Fallout aparece por primera vez Sierra Petrovita y te pide que reúnas 30 botellas de Nuka-Cola Quantum?",
  o:["Fallout 4","Fallout 2","Fallout 76","Fallout 3"], c:3,
  expl:"Sierra entrega el encargo en Girdershade, un pequeño asentamiento de Fallout 3." },

{ id:"VID-16", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿Cómo se llaman las pequeñas criaturas con aspecto de planta que ayudan al capitán Olimar en el juego de Nintendo de 2001?",
  o:["Lumas","Chao","Koroks","Pikmin"], c:3,
  expl:"Los Pikmin siguen las órdenes de Olimar y pueden cargar objetos que él no podría mover solo." },

{ id:"VID-17", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"¿Cómo se llama el jefe final del primer Dark Souls, conocido como Señor de la Ceniza?",
  o:["Gwyn","Ornstein","Seath","Artorias"], c:0,
  expl:"El combate contra Gwyn tiene lugar en el Horno de la Primera Llama." },

{ id:"VID-18", cat:"VIDEOJUEGOS", uso:"reserva", dif:"facil",
  p:"¿Qué Pokémon de tipo eléctrico acompaña a Ash Ketchum desde el primer episodio de la serie animada original y protagoniza Pokémon Amarillo junto al jugador?",
  o:["Jolteon","Electabuzz","Pikachu","Raichu"], c:2,
  expl:"En Pokémon Amarillo, Pikachu sigue al jugador fuera de la Poké Ball." },

{ id:"VID-19", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"En la escena inicial de Castlevania Symphony of the Night, antes de luchar contra Richter Belmont, ¿qué personaje describe al ser humano como «una miserable pila de secretos»?",
  o:["Death","Richter Belmont","Alucard","Drácula"], c:3,
  expl:"La conversación ocurre en el prólogo, antes de que el juego pase a seguir la historia de Alucard." },

{ id:"VID-20", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"¿Cómo se llama la sacerdotisa del santuario Hakurei que protagoniza la saga Touhou Project?",
  o:["Marisa Kirisame","Sanae Kochiya","Reimu Hakurei","Sakuya Izayoi"], c:2,
  expl:"Reimu es uno de los personajes jugables de Mountain of Faith junto con Marisa Kirisame." },

{ id:"VID-21", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"¿Qué entrega numerada de Touhou Project, publicada en 2007, lleva el subtítulo Mountain of Faith?",
  o:["Touhou 8","Touhou 12","Touhou 6","Touhou 10"], c:3,
  expl:"Mountain of Faith es la entrega en la que debuta Sanae Kochiya como jefa de la quinta fase." },

{ id:"VID-22", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿En qué juego de Wii aparece Luigi bajo la identidad de Mr. L tras un lavado de cerebro?",
  o:["Super Mario Galaxy","Super Paper Mario","Mario & Luigi: Viaje al centro de Bowser","Paper Mario: La puerta milenaria"], c:1,
  expl:"Bajo la identidad de Mr. L, Luigi combate usando un robot llamado Brobot." },

{ id:"VID-23", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿Cómo se llaman los dos hermanos esqueleto de Undertale?",
  o:["Alphys y Undyne","Toriel y Asgore","Mario y Luigi","Sans y Papyrus"], c:3,
  expl:"Los dos hermanos viven en Snowdin, donde el jugador los conoce tras salir de las Ruinas." },

{ id:"VID-24", cat:"VIDEOJUEGOS", uso:"reserva", dif:"dificil",
  p:"¿Qué juego de miniaturas de fantasía de Games Workshop inspiró el estilo visual del primer Warcraft, según su desarrollador Patrick Wyatt?",
  o:["Dungeons & Dragons","BattleTech","Warhammer 40.000","Warhammer Fantasy Battle"], c:3,
  expl:"Wyatt explicó que Blizzard llegó a considerar una licencia de Warhammer antes de crear un mundo propio." },

{ id:"VID-25", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿En qué consola salió por primera vez el videojuego original de Yakuza, lanzado en Japón en 2005?",
  o:["Dreamcast","PlayStation","PlayStation 3","PlayStation 2"], c:3,
  expl:"El título se lanzó en Japón como Ryū ga Gotoku y tiene a Kazuma Kiryu como protagonista." },

{ id:"VID-26", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿Qué dibujante japonés, creador de Dragon Ball, diseñó el limo de Dragon Quest?",
  o:["Osamu Tezuka","Akira Toriyama","Eiichirō Oda","Masashi Kishimoto"], c:1,
  expl:"Toriyama se encargó del diseño de personajes y monstruos del primer Dragon Quest." },

{ id:"VID-27", cat:"VIDEOJUEGOS", uso:"reserva", dif:"media",
  p:"¿En qué entrega numerada de Final Fantasy debutó Cloud Strife como protagonista, en 1997?",
  o:["Final Fantasy VII","Final Fantasy VI","Final Fantasy VIII","Final Fantasy IX"], c:0,
  expl:"Cloud se une al grupo Avalancha en Midgar al comienzo del juego." },

/* ====== CULTURA GENERAL ====== */

/* -- Las seis que se juegan -- */

{ id:"CUL-01", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"facil",
  p:"¿Cuál es la capital de Australia?",
  o:["Perth","Melbourne","Sídney","Canberra"], c:3,
  expl:"En Canberra se encuentra la sede del Parlamento federal australiano." },

{ id:"CUL-02", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"facil",
  p:"¿Cuál es el planeta más grande del Sistema Solar?",
  o:["Saturno","Júpiter","Urano","Neptuno"], c:1,
  expl:"Júpiter tiene unas once veces el diámetro de la Tierra." },

{ id:"CUL-03", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"media",
  p:"¿Cuál es el símbolo químico del oro?",
  o:["Ag","Au","Fe","Cu"], c:1,
  expl:"Las letras Au vienen de aurum, el nombre latino del oro." },

{ id:"CUL-04", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"media",
  p:"¿Cuál es el río más largo de la península ibérica si se cuenta su recorrido desde el nacimiento hasta el mar?",
  o:["Ebro","Guadalquivir","El Tajo","Duero"], c:2,
  expl:"El Tajo nace en los Montes Universales y desemboca en el Atlántico junto a Lisboa." },

{ id:"CUL-05", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"media",
  p:"¿Cuál es el órgano más grande del cuerpo humano por superficie?",
  o:["Intestino delgado","Pulmones","La piel","Hígado"], c:2,
  expl:"La piel cubre la superficie del cuerpo y actúa como barrera frente al exterior." },

{ id:"CUL-06", cat:"CULTURA GENERAL", uso:"ordinaria", dif:"media",
  p:"¿Quién escribió la novela Don Quijote de la Mancha, publicada en dos partes en 1605 y 1615?",
  o:["Francisco de Quevedo","Miguel de Cervantes","Lope de Vega","Calderón de la Barca"], c:1,
  expl:"Cervantes publicó la primera parte El ingenioso hidalgo don Quixote de la Mancha en 1605 y Segunda parte del ingenioso caballero don Quixote de la Mancha en 1615." },

/* -- La del desempate -- */

{ id:"CUL-07", cat:"CULTURA GENERAL", uso:"extra", dif:"facil",
  p:"¿Cómo se llama la pasta italiana larga y cilíndrica cuyo nombre significa «cordoncitos» en italiano?",
  o:["Fusilli","Penne","Farfalle","Espaguetis"], c:3,
  expl:"A diferencia de los tallarines, los espaguetis clásicos tienen una sección redonda." },

/* -- Reserva -- */

{ id:"CUL-08", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿A cuántos grados Celsius hierve aproximadamente el agua pura a una atmósfera de presión?",
  o:["80 grados Celsius","100 grados Celsius","110 grados Celsius","90 grados Celsius"], c:1,
  expl:"Cuando baja la presión, como ocurre en lugares de gran altitud, el agua hierve a una temperatura menor." },

{ id:"CUL-09", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Cuántas comunidades autónomas tiene España, sin contar las ciudades autónomas de Ceuta y Melilla?",
  o:["15","17","18","19"], c:1,
  expl:"El mapa de las 17 comunidades incluye dos archipiélagos, Canarias e Illes Balears." },

{ id:"CUL-10", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Quién pintó el Guernica en 1937?",
  o:["Joan Miró","Salvador Dalí","Pablo Picasso","Juan Gris"], c:2,
  expl:"Picasso realizó el cuadro para el pabellón español de la Exposición Internacional de París de 1937." },

{ id:"CUL-11", cat:"CULTURA GENERAL", uso:"reserva", dif:"dificil",
  p:"¿Qué científica recibió un Nobel de Física en 1903 y un Nobel de Química en 1911?",
  o:["Irène Joliot-Curie","Marie Curie","Rosalind Franklin","Lise Meitner"], c:1,
  expl:"El Nobel de Química reconoció, entre otros trabajos, su descubrimiento del radio y el polonio." },

{ id:"CUL-12", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿Cuál es el animal terrestre actual que alcanza el mayor peso corporal y cuyo nombre científico es Loxodonta africana?",
  o:["Elefante africano de bosque","Rinoceronte blanco","Elefante africano de sabana","Elefante asiático"], c:2,
  expl:"Los machos adultos del elefante de sabana africano pueden pesar varias toneladas." },

{ id:"CUL-13", cat:"CULTURA GENERAL", uso:"reserva", dif:"dificil",
  p:"¿Quién forjó los tres anillos élficos Vilya, Narya y Nenya en la obra de J. R. R. Tolkien?",
  o:["Fëanor","Galadriel","Elrond","Celebrimbor"], c:3,
  expl:"Según Tolkien, Celebrimbor hizo los tres anillos élficos sin la intervención directa de Sauron." },

{ id:"CUL-14", cat:"CULTURA GENERAL", uso:"reserva", dif:"dificil",
  p:"En los tebeos de Escobar, ¿cómo se llama el padre de Zipi y Zape, que es catedrático de Numismática, Filatelia y Colombofilia?",
  o:["Don Pantuflo Zapatilla","Don Pío","Don Berrinche","Don Polillo"], c:0,
  expl:"Don Pantuflo y doña Jaimita son los padres de los gemelos en la serie de Escobar." },

{ id:"CUL-15", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Cómo se llama la saga literaria de George R. R. Martin en la que se basa la serie Juego de tronos?",
  o:["El señor de los anillos","El archivo de las tormentas","La rueda del tiempo","Canción de hielo y fuego"], c:3,
  expl:"Juego de tronos es también el título de la primera novela de la saga." },

{ id:"CUL-16", cat:"CULTURA GENERAL", uso:"reserva", dif:"dificil",
  p:"En los tebeos de Mortadelo y Filemón, ¿cómo se llama de pila el superintendente al que ambos llaman el Súper?",
  o:["Ofelio","Otilio","Vicente","Rompetechos"], c:2,
  expl:"Vicente es el jefe que suele encomendar a Mortadelo y Filemón sus misiones." },

{ id:"CUL-17", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿Qué pintor neerlandés, autor de La noche estrellada, se cortó parte de la oreja izquierda en Arlés en 1888?",
  o:["Paul Gauguin","Paul Cézanne","Vincent van Gogh","Claude Monet"], c:2,
  expl:"Van Gogh vivía en la Casa Amarilla de Arlés cuando ocurrió el episodio de la oreja." },

{ id:"CUL-18", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Qué escultor renacentista realizó la Piedad de mármol que se conserva en la basílica de San Pedro del Vaticano?",
  o:["Miguel Ángel","Donatello","Antonio Canova","Bernini"], c:0,
  expl:"La escultura representa a María sosteniendo el cuerpo de Jesús después de la crucifixión." },

{ id:"CUL-19", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿En qué país nació Auguste Rodin, autor de El Pensador?",
  o:["Bélgica","Italia","Francia","Suiza"], c:2,
  expl:"Rodin nació en París en 1840." },

{ id:"CUL-20", cat:"CULTURA GENERAL", uso:"reserva", dif:"dificil",
  p:"¿A qué estilo arquitectónico pertenece la basílica de San Francisco de Paula de la plaza del Plebiscito, en Nápoles, inspirada en el Panteón de Roma?",
  o:["Modernismo","Barroco","Neoclasicismo","Gótico"], c:2,
  expl:"El pórtico de columnas y la gran cúpula remiten a modelos de la arquitectura clásica." },

{ id:"CUL-21", cat:"CULTURA GENERAL", uso:"reserva", dif:"dificil",
  p:"¿En qué país desarrollaron los arquitectos Alison y Peter Smithson el movimiento conocido como Nuevo Brutalismo en la década de 1950?",
  o:["Francia","Alemania","Reino Unido","Países Bajos"], c:2,
  expl:"Los Smithson aplicaron sus ideas a la escuela de Hunstanton, en Inglaterra." },

{ id:"CUL-22", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿En qué disciplina artística se especializa Annie Leibovitz, conocida por sus retratos de celebridades?",
  o:["Pintura","Ilustración","Escultura","Fotografía"], c:3,
  expl:"Uno de sus retratos más conocidos muestra a John Lennon abrazado a Yoko Ono para la revista Rolling Stone." },

{ id:"CUL-23", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Qué apellido compartían los hermanos Auguste y Louis, que presentaron su cinematógrafo en París en 1895?",
  o:["Méliès","Pathé","Gaumont","Lumière"], c:3,
  expl:"La proyección pública de pago de los Lumière se celebró en el Grand Café de París en diciembre de 1895." },

{ id:"CUL-24", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿De qué elemento químico están hechos los diamantes?",
  o:["Silicio","Azufre","Calcio","Carbono"], c:3,
  expl:"El diamante y el grafito están hechos del mismo elemento, con los átomos ordenados de forma diferente." },

{ id:"CUL-25", cat:"CULTURA GENERAL", uso:"reserva", dif:"dificil",
  p:"¿Cuál es el nombre común de la serpiente australiana cuyo nombre científico es Oxyuranus microlepidotus?",
  o:["Mamba negra","Serpiente de cascabel","Taipán del interior","Cobra real"], c:2,
  expl:"Su nombre alude a que habita zonas áridas del interior de Australia." },

{ id:"CUL-26", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Cómo se llama la fuerza aparente dirigida hacia fuera que se percibe en un sistema de referencia en rotación?",
  o:["Fuerza de rozamiento","Fuerza centrípeta","Empuje de Arquímedes","Fuerza centrífuga"], c:3,
  expl:"En un carrusel, es la fuerza aparente que parece empujarnos hacia el borde mientras giramos." },

{ id:"CUL-27", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿Qué par de órganos del tórax realiza el intercambio de oxígeno y dióxido de carbono al respirar?",
  o:["Riñones","Glándulas suprarrenales","Oídos","Los pulmones"], c:3,
  expl:"El intercambio de gases ocurre en los alvéolos, pequeños sacos de aire dentro de los pulmones." },

{ id:"CUL-28", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Cómo se llama el rasgo de pigmentación oscura que explica el pelaje de las llamadas panteras negras?",
  o:["Vitíligo","Albinismo","Melanismo","Leucismo"], c:2,
  expl:"El melanismo puede dar un pelaje muy oscuro tanto a leopardos como a jaguares." },

{ id:"CUL-29", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿A qué grupo de invertebrados pertenecen los caracoles, las almejas y los pulpos?",
  o:["Anélidos","Equinodermos","Artrópodos","Moluscos"], c:3,
  expl:"El caracol, la almeja y el pulpo representan tres grupos de moluscos, los gasterópodos, los bivalvos y los cefalópodos." },

{ id:"CUL-30", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿Qué signo tiene el resultado de multiplicar un número negativo por un número positivo?",
  o:["Indeterminado","Cero","Negativo","Positivo"], c:2,
  expl:"Por ejemplo, si multiplicas menos tres por dos, el resultado es menos seis." },

{ id:"CUL-31", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Cuál es la velocidad de la luz en el vacío, redondeada al millar de kilómetros por segundo más cercano?",
  o:["300.000 kilómetros por segundo","150.000 kilómetros por segundo","450.000 kilómetros por segundo","600.000 kilómetros por segundo"], c:0,
  expl:"A esa velocidad, la luz tarda unos 1,3 segundos en recorrer la distancia media entre la Luna y la Tierra." },

{ id:"CUL-32", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Qué elemento químico es el más abundante en el Sol?",
  o:["Oxígeno","Carbono","Helio","Hidrógeno"], c:3,
  expl:"En el núcleo del Sol, la fusión de hidrógeno produce helio y libera energía." },

{ id:"CUL-33", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Cuántas leyes originales de la robótica formuló Isaac Asimov antes de añadir la llamada Ley Cero?",
  o:["Cuatro","Cinco","Tres","Dos"], c:2,
  expl:"Las tres reglas clásicas regulan el daño a las personas, la obediencia y la protección del propio robot." },

{ id:"CUL-34", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿Qué cantante estadounidense, intérprete de Jailhouse Rock, fue conocido como el Rey del Rock and Roll?",
  o:["Little Richard","Chuck Berry","Elvis Presley","Jerry Lee Lewis"], c:2,
  expl:"Su interpretación de Jailhouse Rock aparece en la película de 1957 titulada en España El rock de la cárcel." },

{ id:"CUL-35", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿Con qué nombre se hizo famoso el grupo de cinco hermanos en el que Michael Jackson cantó de niño y que publicó ABC en 1970?",
  o:["The Osmonds","The Temptations","The Isley Brothers","The Jackson 5"], c:3,
  expl:"El grupo estaba formado por los hermanos Jackie, Tito, Jermaine, Marlon y Michael Jackson." },

{ id:"CUL-36", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Qué artista puertorriqueño publicó el álbum Un verano sin ti en 2022?",
  o:["Anuel AA","Bad Bunny","Rauw Alejandro","Ozuna"], c:1,
  expl:"El álbum de Bad Bunny incluye la canción Tití me preguntó." },

{ id:"CUL-37", cat:"CULTURA GENERAL", uso:"reserva", dif:"dificil",
  p:"¿En qué año fundó Guccio Gucci su casa de moda en Florencia?",
  o:["1921","1931","1941","1911"], c:0,
  expl:"Guccio Gucci abrió su primera tienda en la Via della Vigna Nuova de Florencia." },

{ id:"CUL-38", cat:"CULTURA GENERAL", uso:"reserva", dif:"media",
  p:"¿Cómo se llama el tinte que se utiliza tradicionalmente para teñir de azul el tejido de los vaqueros?",
  o:["Cúrcuma","Azafrán","Índigo","Cochinilla"], c:2,
  expl:"En el tejido vaquero clásico, el índigo tiñe los hilos de la urdimbre y el reverso suele verse más claro." },

{ id:"CUL-39", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿Qué fruta se añade al jamón en la receta clásica de la pizza hawaiana?",
  o:["Piña","Melocotón","Manzana","Mango"], c:0,
  expl:"La combinación clásica de la pizza hawaiana reúne jamón y piña sobre una base de tomate y queso." },

{ id:"CUL-40", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿Qué órgano del pato o de la oca se utiliza para elaborar foie gras?",
  o:["Corazón","Molleja","Pulmón","El hígado"], c:3,
  expl:"La expresión francesa foie gras significa literalmente «hígado graso»." },

{ id:"CUL-41", cat:"CULTURA GENERAL", uso:"reserva", dif:"facil",
  p:"¿A partir de qué cereal se elabora el sake japonés?",
  o:["Arroz","Trigo","Maíz","Cebada"], c:0,
  expl:"En la elaboración del sake, el kōji ayuda a convertir el almidón del arroz en azúcares que luego fermentan." },

];
