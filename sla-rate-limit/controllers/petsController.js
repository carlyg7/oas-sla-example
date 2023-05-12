export function getIct_statss(_, res) {
    res.send([{ "territory": "spain", "year": 2011 }])
}

export function addPet(_, res) {
    res.status(201).send()
}

export function findByid(_, res) {
    res.send({"territory": "spain", "year": 2011})
}