function QuestionsController($http) {

    // function that change camel tow to snake case.
    let SNAKE_CASE_REGEXP = /[A-Z]/g;
    function snake_case(name, separator) {
        separator = separator || '_';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
            return (pos ? separator : '') + letter.toLowerCase();
        });
    }

    // local storage functions.
    this.submit = (key, val) => {
        localStorage.setItem(key, val);
    };
    this.getItem = (key) => {
        return localStorage.getItem(key)
    };


    let self = this;
    this.currentQuestionNum = 0;

    // functions that call the questions DB and return the data.
    this.dbCall = (fileName) => {
        // call camel tow converter to snake so it will call the correct file
        fileName = snake_case(fileName, '-');
        // database obj
        $http.get('./database/' + fileName + '.json').then(function (response) {
            console.log('inside prom', response.data);
            return response.data;
        }, err => {
            console.log('error :', err);
        }).then(function (data) {
            // set current question and then call next question function.
            self.currentQuestions = data;
            self.getQuestion();
        });
    };

    // function that ready the question by their parameters for html.
    this.getQuestion = () => {
        console.log('inside getQuestion', self.currentQuestionNum, self.currentQuestions);
        self.currentAnswers = self.currentQuestions[self.currentQuestionNum].answers;
        self.currentQuestion = self.currentQuestions[self.currentQuestionNum].question;
        self.currentQuestionNum++;
        console.log(' self.currentQuestionNum status : ',  self.currentQuestionNum)
    };

    this.saveData = function(i) {
        // save data to local storage
        console.log('inside saveData', i);
        self.submit(self.currentQuestions[self.currentQuestionNum -1].id, i);
        console.log('value: ', i,' as entered into key: ',  self.currentQuestions[self.currentQuestionNum -1].id);

        // change current question by by passing the answer to the api call .
        if (self.currentQuestions[0].id === 'websiteType' && self.currentQuestions[self.currentQuestionNum-1].id === 'storage_question'){
            self.currentQuestionNum = 0;
            this.dbCall(this.getItem('websiteType'));
        }else {
            self.getQuestion();
        }
    };

    // first time load call API
    this.dbCall('websiteType');
}

app.component('questions', {
    templateUrl: 'questions/questions.html',
    controller: QuestionsController,
    controllerAs: 'vm'
});