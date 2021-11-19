const db = require('../models')
const Todo = db.Todo;

class TodoController {

    getAll = async (req, res) => {
        try {
            const data = await Todo.findAll();
            res.json(data);
        }catch (e) {
            console.log(e)
            res.status(404).send({ message: e.message})
        }

    }


    getOne = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Todo.findByPk(id, {
                where: {id: id}
            });
            res.json(data);
        } catch (e) {
            res.status(404).send({ message: 'Aucune tâche trouvée avec cet ID'})
        }

    }

    create = async (req, res) => {
        try {
            console.log(req.body);
            const new_todo = {
                name: req.body.name,
                description: req.body.description,
                table: req.body.table || 'TODO'
            }
            let data = await Todo.create(new_todo);
            res.json(data);
        } catch (e) {
            console.log(e)
            res.status(400).send({ message: 'Impossible de créer le Todo, verifiez vos paramètres'})

        }

    }

    update = async (req, res) => {
        try {

            const id = req.params.id;
            let td = await Todo.findByPk(id, {
                where: {id: id}
            })
            if (!td) {
                res.status(404).send('Pas de tâche trouvée avec cet ID')
            } else {
                const updated_todo = {
                    name: req.body.text || td.name,
                    description: req.body.description || td.description,
                    table: req.body.table || td.table
                }

                const data = await Todo.update(updated_todo, {
                    where: {id: id},
                });
                res.json(data);
            }
        }catch (e) {
            res.status(400).send({ message: 'Impossible de modifier la tâche, verifiez vos paramètres'})

        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Todo.destroy({
                where: {id: id},
            });
            res.json(data);
        } catch (e) {
            res.status(400).send({ message: 'Impossible de supprimer la tâche, il se peut qu\'elle n\'existe déjà plus'})
        }
    }

    count = async (req, res) => {
        try {
            const c = await Todo.count({where: true});
            res.json(c)
        } catch (e) {
            res.status(400).send('Oups, something went wrong ?')
        }
    }

}

module.exports = new TodoController();
