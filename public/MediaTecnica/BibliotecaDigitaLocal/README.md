# Biblioteca Digital Local

Aplicación web estática para gestionar una biblioteca escolar (HTML/CSS/JS + almacenamiento en localStorage).

Resumen
- Proyecto orientado a una biblioteca digital local con secciones públicas y panel de administración simple.

Estructura principal

text/ (raíz)
├── img/
│   ├── IEKennedy.JPG
│   └── perfil.png
├── Admin/
│   ├── dashboard.html
│   ├── libros.html
│   ├── autores.html
│   ├── categorias.html
│   ├── prestamos.html
│   ├── devoluciones.html
│   └── usuarios.html
├── index.html
├── registro.html
├── recuperar.html
├── cambiar_contrasena.html
├── mostrar_libros.html
├── mostrar_categorias.html
├── mostrar_autores.html
├── libros_por_autor.html
├── libros_por_categoria.html
├── perfil.html
└── (otros archivos .jsx de React no relevantes)

Notas rápidas
- Las páginas administrativas usan rutas relativas dentro de la carpeta `Admin/`.
- Las imágenes están en `img/` y las rutas necesarias fueron ajustadas para apuntar allí.
- Los datos de la aplicación se guardan en `localStorage` (claves habituales: `libros`, `usuarios`, `prestamos`, `devoluciones`).

Cómo ejecutar
1. Abrir `index.html` en un navegador moderno (doble clic o arrastrar al navegador).
2. Para acceder al panel administrativo, usar `Admin/dashboard.html` (requiere sesión válida guardada en `sessionStorage` según la app).

Contribuir
- Si vas a modificar HTML/JS, prueba localmente abriendo los archivos en el navegador.
- Mantén las rutas relativas (ej.: `../img/`, `Admin/`) si mueves archivos.

Licencia
- Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

Autor
- Yeferson Moreno
