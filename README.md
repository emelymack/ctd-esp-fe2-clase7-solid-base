# Rick And Morty

Es una aplicación de Rick and Morty que utiliza una API Rest y está llena de malas prácticas, errores, y además cuenta con problemas para escalar.

La aplicación es una base de datos, hecha por Rick, la cual mantiene un registro de todas las ubicaciones del universo (Incluidas planetas y dimensiones), junto con el registro de todos los personajes que fueron vistos en cada ubicación. 

Además cuenta con algunos filtros para hacer más fácil la búsqueda, junto con un historial de visualizaciones de personajes.  

## Objetivos
En esta práctica vamos a realizar una nueva mejora incremental, aplicando los primeros tres patrones SOLID.
- El **primer desafío** consiste en aplicar el **PRINCIPIO DE RESPONSABILIDAD ÚNICA** para separar las responsabilidades del features/characters/characters.component.tsx, de manera de que el componente grid no tenga la responsabilidad de mostrar la card de cada personaje, junto con la lógica de favoritos. 
- El **segundo desafío** consiste en aplicar los **PRINCIPIOS DE ABIERTO-CERRADO** y de **SUSTITUCIÓN DE LISKOV** en el archivo features/tracking/software/amplitude.liskov.ts, de forma de que esta clase hija no modifique la lógica de la clase padre.
- El **tercer desafío** consiste en aplicar el **PRINCIPIO DE SEGREGACIÓN DE INTERFACES** para separar los métodos de la interfaz TrackingSoftware utilizados en el archivo features/tracking/tracking.context.tsx, de manera de que las clases hijas (por ejemplo: Google) no requieran la obligatoria implementación del método initialize. 
- El **cuarto desafío** consiste en aplicar el **PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS** en el archivo features/languages/language.context.tsx, de forma de que este archivo no requiera conocer la implementación específica de donde se obtienen las traducciones (los data files).



