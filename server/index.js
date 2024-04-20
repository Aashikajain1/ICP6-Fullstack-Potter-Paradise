import express from 'express';
import cors from 'cors';
const app =express();
app.use(cors());
app.use(express.json());
 
const PORT =5000;
const prd = [];

app.get("/health",(req,res)=>{
    res.json({
        success:true,
        message:"server is running",
        data:null
    })
});
app.post("/prds",(req,res)=>{
    const {title,price,des}=req.body;
    const newprd ={title,price,des};
    prd.push(newprd);
    res.json({
        success:true,
        message:"description added sucessfully",
        data:newprd
    });
})
app.get("/prds",(req,res)=>{ res.json({
    success:true,
    message:"description added sucessfully",
    data:prd
});
})
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});

