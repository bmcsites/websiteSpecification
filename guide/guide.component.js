function GuideController() {
    this.currentText = 'part1';

    this.parts = [
        {
            id:'part2',
            q: '* מה אני רוצה להשיג בבנית האתר ?'
        },
        {
            id:'part3',
            q: '* מי קהל היעד שלי ?'
        },
        {
            id:'part4',
            q: '* מה אני רוצה לשדר או איזה מסר אני מנסה להעביר ?'
        },
        {
            id:'part5',
            q: '* מה התקציב שלי לטווח הקצר והארוך ?'
        },
        {
            id:'part6',
            q: '* מהם היעדים שלי ומהם לוחות הזמנים שלי ?'
        }
    ];
}

app.component('guide', {
    templateUrl: 'guide/guide.html',
    controller: GuideController,
    controllerAs: 'vm'
});