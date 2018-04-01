module.exports = function(grunt){
    grunt.initConfig({
        useminPrepare:{html:'index.html',
                       options:{
            dest:'WORKING'
        }
    },
        
        usemin:{html:'index.html'},
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglyify');
    grunt.loadNpmTasks('grunt-usemin');
    
    grunt.registerTask('grunts', [
        useminPrepare,
        'concat', 
        'uglyify',
        'usemin'
    ]);
    
}