angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
    .state('categories', {
      url: '/menu-categories',
      templateUrl: 'src/templates/categories.template.html',
	  controller:'MenuCategoriesController as menuCategories',
	  resolve:{
		categories:['MenuDataService',function(MenuDataService){
			return MenuDataService.getAllCategories();
		}]
	  }
    })
	.state('categories.items', {
      url: '/item-detail/{itemId}',
      templateUrl: 'src/templates/itemDetail.template.html',
	  controller:'ItemDetailController as itemDetail'
    });
}