
function AppMenuController() {
    this.menuItems = [
        {
            name: 'Home',
            state: 'home'
        },
        {
            name: 'Questions',
            state: 'questions'
        }
    ]
}

app.component('appMenu', {
    templateUrl: 'app-menu/app-menu.html',
    controller: AppMenuController,
    controllerAs: 'vm'
});
