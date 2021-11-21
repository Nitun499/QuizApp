const startbutton=document.getElementById("start-btn");
const nextButton=document.getElementById("next-btn");
nextButton.addEventListener('click',()=>{
    currentquestionindex++
    setNextQuestion()
});
startbutton.addEventListener('click',startGame);
const questioncontainer=document.getElementById('question-container');
const questionele=document.getElementById('question')
const answerbuttons=document.getElementById('answer-buttons')
let shuffledquestions,currentquestionindex
function startGame(){
  startbutton.classList.add('hide');
  shuffledquestions=questions.sort(()=>Math.random() - .5)
  currentquestionindex=0
  questioncontainer.classList.remove('hide');
  setNextQuestion();

}
function setNextQuestion(){
    resetState()
    showquestion(shuffledquestions[currentquestionindex])
    
}
function  showquestion(question){
    questionele.innerText=question.question
    question.answer.forEach(answer=>{
        //function it is creating button
        const button=document.createElement('button')
        button.innerText=answer.text
        //adding class btn on created button
        button.classList.add('btn')
        //we are checking if answer is correct
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerbuttons.appendChild(button)
    })
}
function resetState(){
    clearStatus(document.body)
    nextButton.classList.add('hide')
    //removing previous all child 
    while(answerbuttons.firstChild){
    answerbuttons.removeChild(answerbuttons.firstChild)}
}
function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatus(document.body,correct)
    //converting each button set to array
    Array.from(answerbuttons.children).forEach(button=>{
        setStatus(button,button.dataset.correct)
    })
    if(shuffledquestions.length>currentquestionindex+1){
        nextButton.classList.remove('hide')
    }else{
        startbutton.innerText='Restart'
        startbutton.classList.remove('hide')
    }
    
}

function setStatus(element,correct){
    clearStatus(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}
function clearStatus(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions=[
    {
        question:'What is 2+2?',
        answer:[
            {text:'4',correct:true},
            {text:'22',coorect:false}
        ]
        
    },
    {
        question:'Which is best Language?',
        answer:[
            {text:'C++',correct:true},
            {text:'JAVA',coorect:false},
            {text:'Python',coorect:false},
            {text:'Kotlin',coorect:false}
        ]
        
    },
    {
        question:'Which is best Channel for DSA Prep?',
        answer:[
            {text:'Take U Forward',correct:false},
            {text:'PepCoding',correct:true},
            {text:'CodeforCause',coorect:false},
            {text:'XYZ',coorect:false}
        ]
        
    }
]