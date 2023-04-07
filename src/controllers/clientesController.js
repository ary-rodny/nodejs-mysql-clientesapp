
const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM clientes", (err, result) => {
            if(err){
                res.json(err)
            }
            res.render('index',{clientes:result})
        })
    })
}


controller.save = (req, res) =>{
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono
    req.getConnection((err, conn) => {
        const sql = "INSERT INTO clientes SET ?"
        const sql2 = "INSERT INTO clientes SET nombre=:nombre, direccion=:direccion, telefono=:telefono"
        conn.query(sql,[req.body],(err, results) => {
            if(err){
                res.json(err)
            }else{
                res.redirect("/")
            }

        })
    })
}

controller.edit = (req, res) => { 
    req.getConnection((err, conn) => {

        const id = req.params.id
        conn.query("SELECT * FROM clientes WHERE id=?",[id], (err, result) => {
            if(err){
                res.json(err)
            }
            res.render('edit', {cliente:result[0]})
        })
    })
}

controller.update = (req, res) => {
    req.getConnection((err, conn) => {
        const nombre = req.body.nombre
        const direccion = req.body.direccion
        const telefono = req.body.telefono
        const id = req.params.id
        conn.query("UPDATE clientes SET ? WHERE id=?",[{nombre:nombre,direccion:direccion, telefono:telefono},id], (err, result) => {
            if(err){
                res.json(err)
            }
            res.redirect('/')
        })
    })
}


controller.delete = (req, res) => {
    req.getConnection((err, conn) => {
        const id = req.params.id
        conn.query("DELETE FROM clientes WHERE id=?",[id], (err, result) => {
            if(err){
                res.json(err)
            }
            res.redirect('/')
        })
    })
}

module.exports  = controller