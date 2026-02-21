import * as dartSass from 'sass';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

const sass = gulpSass(dartSass); // object with a method called render, which is used to compile Sass to CSS.

const paths = {
  styles: {
    src: 'src/style/**/*.scss',
    main: 'src/style/main.scss',
    dest: './build/css/'
  },
    scripts: {
    src: 'src/script/**/*.js',
    main: 'src/script/app.js',
    dest: './build/js/'
  }
};

// function to build styles
// .pipe(sass().on('error', sass.logError)) compiles the Sass files to CSS and logs any errors that occur during the compilation process.
function buildStyles() {
  return gulp.src(paths.styles.main)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false // This option controls the visual cascade of vendor prefixes in the output CSS. When set to false, it prevents the alignment of prefixed properties, resulting in a more compact and less visually aligned output. Setting it to true would align the prefixed properties, making it easier to read but potentially increasing the file size.
    }))
    .pipe(cleanCSS()) // This line minifies the CSS output using the cleanCSS plugin, which reduces the file size by removing unnecessary whitespace and comments.
    .pipe(rename({ suffix: '.min' })) // This line renames the output file by adding a .min suffix before the file extension, indicating that it is a minified version of the original CSS file.
    .pipe(gulp.dest(paths.styles.dest)); // Finally, this line writes the resulting CSS file to the specified destination directory defined in paths.styles.dest.
}

// function to minify scripts
function minifyJs() {
    return gulp.src (paths.scripts.main, {allowEmpty: true}) // This line specifies the source JavaScript file(s) to be processed. It uses gulp.src to read the main JavaScript file defined in paths.scripts.main. The {allowEmpty: true} option allows the task to run even if the specified file does not exist, preventing errors in such cases.
        .pipe(uglify()) // This line minifies the JavaScript code using the uglify plugin, which reduces the file size by removing whitespace, comments, and shortening variable names.
        .pipe(rename({ suffix: '.min' })) // This line renames the output file by adding a .min suffix before the file extension, indicating that it is a minified version of the original JavaScript file.
        .pipe(gulp.dest(paths.scripts.dest)); // Finally, this line writes the resulting minified JavaScript file to the specified destination directory defined in paths.scripts.dest.
}

// function to watch for changes in styles and scripts
function watchFiles() {
  gulp.watch(paths.styles.src, buildStyles);
  gulp.watch(paths.scripts.src, minifyJs);
}

// Define complex tasks
export const build = gulp.series(buildStyles, minifyJs); // series is a method provided by Gulp that allows you to define a sequence of tasks to be executed in order. In this case, the build task will first execute the buildStyles function to compile and minify the CSS, and then execute the minifyJs function to minify the JavaScript files. By using gulp.series, you ensure that the tasks are run sequentially, meaning that the styles will be processed before the scripts.
export const watch = gulp.series(build, watchFiles); // This line defines a watch task that first runs the build task to ensure that all styles and scripts are processed before starting to watch for changes. After the build task is completed, it calls the watchFiles function, which sets up file watchers on the specified source paths for styles and scripts. Whenever a change is detected in those files, the corresponding tasks (buildStyles for styles and minifyJs for scripts) will be executed automatically.
export default build; // This line sets the default task for Gulp. When you run the command gulp without specifying a task, it will execute the build task by default, which compiles and minifies the styles and scripts as defined in the build constant.