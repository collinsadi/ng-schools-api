const express = require("express");
const schools = require("./schools");
const app = express();
const port = process.env.PORT || 3000






app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get("/get/all", (request, response)=>{
    response.status(200).json(schools);
});

app.get("/get/state",(request, response)=>{
    let state = request.query.state;

    if(!state){
        return response.status(400).json({message:"Include State in the Query"})
    }

    state = state.toLocaleLowerCase();

    const matchingStates = schools.filter(school => school.state === state);

    response.status(200).json(matchingStates)

});

app.listen(port, ()=>{
    console.log("App Running on Port 3000")
})