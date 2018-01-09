function SideMenuController() {
    console.log('menu items :', this.menuItems);
}

app.component('sideMenu', {
    templateUrl: 'side-menu/side-menu.html',
    controller: SideMenuController,
    controllerAs: 'vm',
    bindings: {
        menuItems: '<'
    }
});
