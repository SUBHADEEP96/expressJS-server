const express=require("express");

const bodyParser=require("body-parser");

const app=express();


const port=5000;

//to use body-parser .use

app.use(bodyParser.urlencoded({extended:true}));



//to show home page .get()


app.get("/",(req,res)=>{
	//to display something
	res.send("welcome to express server :)");
	
	
});

app.get("/about",(req,res)=>{
	
	res.send("About us");
	
});


app.get("/contact",(req,res)=>{
	
	res.send("contact us");
	
});



app.get("/calculator",(req,res)=>
{
//console.log(__dirname);
res.sendFile(__dirname+"/index.html");
}
);

//handle post 

app.post("/calculator",(req,res)=>{
	
	//res.send("Thank you");
	console.log(req.body);
	//using Number function 
	let n1=Number(req.body.v1);
	
	let n2=Number(req.body.v2);
	
	let sum = n1+n2;
	
	res.send("The Sum Of Total is "+sum);
	
	
});

app.get("/bmi",(req,res)=>{
	
	res.sendFile(__dirname+"/bmi.html");
	
});

//bmi


app.post("/bmi",(req,res)=>{
	
	console.log(req.body);
	
	let w=Number(req.body.weight);
	
	let h=Number(req.body.height);
	
	let bmi_result = w/(h*h);
	
	res.send("The Bmi_Result is "+bmi_result);
	
});
//to start server

app.listen(port,(req,res)=>{
	
	console.log(`server is running at port ${port}`);
	
	
});


