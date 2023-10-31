const quiz=[
{
	question:"Which component is used to compile, debug and execute the java programs?",
	ans1text:"JRE",
	ans2text:"JIT",
	ans3text:"JDK",
	ans4text:"JVM",
	answer:"JDK",
},
{
	question:"Which one of the following is not a Java feature?",
	ans1text:"Object-oriented",
	ans2text:"Use of pointers",
	ans3text:"Portable",
	ans4text:" Dynamic and Extensible",
	answer:"Use of pointers",
},
{
	question:"What is the extension of java code files?",
	ans1text:".js",
	ans2text:".txt",
	ans3text:".class",
	ans4text:".java",
	answer:".java",
},
{
	question:"Which environment variable is used to set the java path?",
	ans1text:"MAVEN_Path",
	ans2text:"JavaPATH",
	ans3text:"JAVA",
	ans4text:"JAVA_HOME",
	answer:" JAVA_HOME",
},
{
	question:"Which exception is thrown when java is out of memory?",
	ans1text:"MemoryError",
	ans2text:"OutOfMemoryError",
	ans3text:" MemoryOutOfBoundsException",
	ans4text:" MemoryFullException",
	answer:"OutOfMemoryError",
}
]
const question=document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent);
const option_a=document.getElementById("text_option_a");
const option_b=document.getElementById("text_option_b");
const option_c=document.getElementById("text_option_c");
const option_d=document.getElementById("text_option_d");
const answerElement=document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);


const submit=document.getElementById("submit");

let currentQuestion=0;
let score=0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);


question.textContent=quiz[currentQuestion].question;
option_a.textContent=quiz[currentQuestion].ans1text;
option_b.textContent=quiz[currentQuestion].ans2text;
option_c.textContent=quiz[currentQuestion].ans3text;
option_d.textContent=quiz[currentQuestion].ans4text;

// console.log("answerElement",answerElement);

// answerElement.forEach((answer)=>
// {
// 	console.log(answer.checked);
// })

submit.addEventListener("click",()=>
	{
       const checkedAns=document.querySelector('input[type="radio"]:checked');
       console.log(checkedAns);
       //console.log(checkedAns.nextElementSibling.textContent);
       if(checkedAns===null){
           alert("please select answer")
       }else{
       	if (checkedAns.nextElementSibling.textContent===quiz[currentQuestion].answer){
       		score++;
       	}
       	checkedAns.checked=false;
       	currentQuestion++;
       	if(currentQuestion < quiz.length){
       		question.textContent=quiz[currentQuestion].question;
            option_b.textContent=quiz[currentQuestion].ans2text;
            option_c.textContent=quiz[currentQuestion].ans3text;
            option_d.textContent=quiz[currentQuestion].ans4text;
            checkedAns.checked=false;
       	}else{
            alert("Your score is " + score + "out of" + quiz.length);
            location.reload();
       	}
       }
       
	});


