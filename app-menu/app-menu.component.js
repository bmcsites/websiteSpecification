function AppMenuController() {
    this.menuItems = [
        {
            name: 'קו ההתחלה',
            state: 'home'
        },
        {
            name: 'שאלות מנחות',
            state: 'guide'
        },
        {
            name: 'אפיון האתר',
            state: 'questions'
        }
    ]
}

app.component('appMenu', {
    templateUrl: 'app-menu/app-menu.html',
    controller: AppMenuController,
    controllerAs: 'vm'
});
