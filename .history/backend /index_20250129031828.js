import express from "express";
import cookieParser from "cookie-parser";

app.use(express.json())

const PORT = 3000;
app.listen(PORT,()=> {
    console.log(`Server running at port ${PORT}`);
})