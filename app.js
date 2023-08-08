const express= require ("express");
const path= require ("path");
const app= express();


let puerto= 3060
app.listen (puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto)
});

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    let htmlHome= path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlHome);
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.post("/home", (req, res) => {
    res.redirect("/");
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});