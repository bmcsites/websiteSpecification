function GuideController() {
    this.currentText = 'part1';

    this.parts = [
        {
            id:'part1',
            q: 'איך מתחילים?',
            m: 'התחלה'
        },
        {
            id:'part2',
            q: '* מה אני רוצה להשיג בבנית האתר ?',
            m: 'המטרה'
        },
        {
            id:'part3',
            q: '* מי קהל היעד שלי ?',
            m: 'קהל יעד'
        },
        {
            id:'part4',
            q: '* מה אני רוצה לשדר או איזה מסר אני מנסה להעביר ?',
            m: 'המסר'
        },
        {
            id:'part5',
            q: '* מה התקציב שלי לטווח הקצר והארוך ?',
            m: 'תקציב'
        },
        {
            id:'part6',
            q: '* מהם היעדים שלי ומהם לוחות הזמנים שלי ?',
            m: 'יעדים'
        },
        {
            id:'part7',
            q: '',
            m: 'סיכום'
        }
    ];
}

app.component('guide', {
    templateUrl: 'guide/guide.html',
    controller: GuideController,
    controllerAs: 'vm'
});