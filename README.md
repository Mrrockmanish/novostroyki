"# novostroyki" 


Установка пакетов зависимостей
1. npm i
Сборка проекта
2. gulp

для внесения новых стилей из tailwind.css нужно закоментировать purgecss 
в этой функции которая находится в gulpfile.js

для уменюшения css путем вырезания неиспользуемых стилей фреймворка нужно раскоментировать purgecss

function tailwindCss() {

  const plugins = [
    tailwindcss(),
    cssnano(),
    purgecss({
      content: ['src/**/*.html'],
      defaultExtractor: content => content.match(/[\w-/:#]+(?<!:)/g) || []
    }),
  ];
  return gulp.src('src/css/tailwind.scss')
    .pipe(sass()) // scss -> css
    .pipe(postcss(plugins))
    .pipe(gulp.dest('build/css/'));
}
