const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglyfly = require('gulp-uglyfly');
const concat = require('gulp-concat');

/*
    TOP LEVEL FUNCTIONS

    gulp.task  - Define tasks
    gulp.src   - Points to files to use
    gulp.dest  - Points to folders to output
    gulp.watch - Watch files and folders for changes


    GULP 4
    gulp.series for sequential execution
    gulp.parallel for parallel execution

*/


//  Logs message
gulp.task('message', function(){
  // type "gulp message" to run this task
  return console.log('Gulp is running...');
});

//  If the task name is default just type "gulp" into the
//  terminal and it will run this task automatically
gulp.task('default', function(){
  return console.log('Gulp is running...');
});


//  Copy all html files
gulp.task('copyhtml', function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});


//  Optimize images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);


//  Minify JS
gulp.task('compress', () =>
  gulp.src('src/js/*.js')
    .pipe(uglyfly())
    .pipe(gulp.dest('dist/js'))
);

gulp.task('scripts', () =>
  gulp.src('./src/js/*.js')
    .pipe(concat('main.js '))
    .pipe(uglyfly())
    .pipe(gulp.dest('./dist/js'));
);

//  Execute all the tasks in parallel
gulp.task('default', gulp.parallel('scripts', 'imageMin', 'copyhtml'));
