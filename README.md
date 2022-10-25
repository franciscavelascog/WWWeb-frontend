  
ENTREGA 2

Se implementó la migración hacia React, de manera practicamente completa, a excepción de la funcionalidad "Dark-Mode", la cual no pudo ser perfectamente implementada. Para esto, se creó la carpeta components, la cual contine los componentes utilizados en las vistas. Además, se creó un archivo routing con las rutas correspondientes del programa. Con esto, se dejo el langingpage como página inicial al abrir la aplicación web.

Se creó la página juego, la cual contiene el tablero y la vista de juego. Dentro de esta, se implementaron las siguientes funcionalidades y componentes:
- Un componente Estado, el cual contiene el estado actual de los atributos del jugador 1. Cada vez que se obtiene la posición del jugador, el estado es actualizado visualmente y mostrandose claramente. 
- Un botón Moverse, el cual permite al jugador actualizar (put) su posición. Al hacer click en el botón, en el back-end se lanzan los dados y se determinan las posibles posiciones hacia las cuales se puede mover el jugador según el número obtenido. Luego, se escoge una de estas al azar y se actualiza la posición del jugador a esta nueva elegida aleatoriamente. 
- Un botón Moverse Random, el cual permite al jugador actualizar su posición hacia cualquier hexagono. Al hacer click en el botón, se escoge un número aleatorio entre 1 y 61 y se actualiza la posición del jugador a este nuevo hexagono. 
- Un botón Posición, el cual muestra el estado del tablero actualmente (get), es decir el estado de cada hexagono y la posición del jugador. En espeecīfico, se muestran en morado los hexagonos ya descubiertos y en verde la posición actual del jugador. Cabe desatcar que para esta entrega, el jugador si puede moverse a hexagonos ya descubiertos pero en un futuro no podrá hacerlo.
- El botón lanzar dados, será utilizado en un futuro para la realización de una jugada.

