import { insertLink } from './db.js'

export const addlink = (req, res) => {
    try {
        const url = req.body.url
        const key = insertLink(url)
        console.log(key)

        if (key) {
            res.status(200).send({ key })
        } else {
            res.send(400)
        }
    } catch (error) {

    }
}
export const getlink = (req, res) => { }
