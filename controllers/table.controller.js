const db = require('../models')
const Table = db.Table;

class TableController {

    getAll = async (req, res) => {
        try {
            const data = await Table.findAll();
            res.json(data);
        }catch (e) {
            console.log(e)
            res.status(404).send({ message: e.message})
        }
    }


    getOne = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Table.findByPk(id, {
                where: {id: id}
            });
            res.json(data);
        } catch (e) {
            res.status(404).send({ message: 'Aucune table trouvée avec cet ID'})
        }

    };

    getByUser = async (req, res) => {
        try {
            const user = req.query.user;
            const data = await Table.findAll({where: {user}});
            res.json(data)
        } catch (e) {
            res.status(404).send({message: 'Aucune table trouvée pour cet utilisateur·trice'})
        }
    };

    create = async (req, res) => {
        try {
            const new_table = {
                name: req.body.name,
                description: req.body.description,
            }
            let data = await Table.create(new_table);
            res.json(data);
        } catch (e) {
            res.status(400).send({ message: 'Impossible de créer la table, verifiez vos paramètres'})

        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id;
            let td = await Table.findByPk(id, {
                where: {id}
            })
            if (!td) {
                res.status(404).send('Pas de table trouvée avec cet ID')
            } else {
                const updated_table = {
                    name: req.body.name || td.name,
                }

                const data = await Table.update(updated_table, {
                    where: {id: id},
                });
                res.json(data);
            }
        }catch (e) {
            res.status(400).send({ message: 'Impossible de modifier la table, verifiez vos paramètres'})

        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Table.destroy({
                where: {id: id},
            });
            res.json(data);
        } catch (e) {
            res.status(400).send({ message: 'Impossible de supprimer la table, il se peut qu\'elle n\'existe déjà plus'})
        }
    }

    count = async (req, res) => {
        try {
            const c = await Table.count({where: true});
            res.json(c)
        } catch (e) {
            res.status(400).send('Oups, something went wrong ?')
        }
    }

}

module.exports = new TableController();
