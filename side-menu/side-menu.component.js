function SideMenuController() {
    let self = this;
    this.selectedIndex = 0;

    this.select= function(index,id) {
        self.selectedIndex=index;
        self.currentTextItem = id;
    };
}

app.component('sideMenu', {
    templateUrl: 'side-menu/side-menu.html',
    controller: SideMenuController,
    controllerAs: 'vm',
    bindings: {
        menuItems: '<',
        currentTextItem: '='
    }
});
