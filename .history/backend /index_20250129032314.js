import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin:"http//localhost:5173"
}

app.use

const PORT = 3000;
app.listen(PORT,()=> {
    console.log(`Server running at port ${PORT}`);
})