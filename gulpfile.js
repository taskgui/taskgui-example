var gulp = require('gulp');

// this task is a dummy task
gulp.task('some-task', function() {
    console.log('this is some-task');
});

// this is a private task
gulp.task('private-task', function() {
    console.log('This task is private');
});

gulp.task('default', function() {
  // place code for your default task here
});