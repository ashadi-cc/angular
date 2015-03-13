
module.exports = function(grunt){
	grunt.initConfig({
		less:{
			development:{
				options:{
					compress:true
				},
				files:{
				  "./dist/css/styles.css":"./assets/css/less/libs.less"
				}
			}

		},
		concat:{
			options:{
				//separator:';'
			},
			js_lib:{
				src:[
					'./bower_components/angular/angular.min.js',
					'./bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
					//'./bower_components/angular-dialog-service/dist/dialogs.min.js'
				],
				dest:'./dist/js/lib.js'
			},

			js_app:{
				src:[
					'./assets/js/*.js'
				],
				dest:'./dist/js/app.js'
			}
		},


		uglify:{
			options:{
				mangle:false
			},
			lib:{
				files:{
					'./dist/js/lib.js':'./dist/js/lib.js'
				}
			},
			app:{
				files:{
					'./dist/js/app.js':'./dist/js/app.js'
				}
			}
		},

		watch:{
			js_lib:{
				files:[
					'./bower_components/angular/angular.min.js'
				],
				tasks:['concat:js_lib'],
				options:{
					livereload:true
				}
			},
			js_app:{
				files:[
					'./assets/js/*.js'
				],
				tasks:['concat:js_app'],
				options:{
					livereload:true
				}
			},
			less:{
				files:[
					'./assets/css/less/libs.less',
					'./assets/css/styles/*.less'
				],
				tasks:['less'],
				options:{
					livereload:true
				}
			}

		}

	});

	

	  // Plugin loading
	  grunt.loadNpmTasks('grunt-contrib-concat');
	  grunt.loadNpmTasks('grunt-contrib-watch');
	  grunt.loadNpmTasks('grunt-contrib-less');
	  grunt.loadNpmTasks('grunt-contrib-uglify');

	  grunt.registerTask('default', ['watch']);

}