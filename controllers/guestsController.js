const Guest = require('../model/Guest');

const getAllGuests = async (req, res) => {
    const guest = await Guest.find();
    if (!guest) return res.status(204).json({ 'message': 'No Guest found.' });
    res.json(guest);
}

const createNewGuest = async (req, res) => {
    if (!req?.body?.fullname || !req?.body?.phone) {
        return res.status(400).json({ 'message': 'First and Phone names are required' });
    }

    try {
        const result = await Guest.create({
            fullname: req.body.fullname,
            phone: req.body.phone,
            address: req.body.address,
            note: req.body.note
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateGuest = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const guest = await Guest.findOne({ _id: req.body.id }).exec();
    if (!guest) {
        return res.status(204).json({ "message": `No guest matches ID ${req.body.id}.` });
    }
    if (req.body?.fullname) guest.fullname = req.body.fullname;
    if (req.body?.phone) guest.phone = req.body.phone;
    if (req.body?.address) guest.phone = req.body.address;
    if (req.body?.note) guest.phone = req.body.note;
    const result = await guest.save();
    res.json(result);
}

const deleteGuest = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'guest ID required.' });

    const guest = await Guest.findOne({ _id: req.body.id }).exec();
    if (!guest) {
        return res.status(204).json({ "message": `No guest matches ID ${req.body.id}.` });
    }
    const result = await guest.deleteOne(); 
    res.json(result);
}

const getGuest = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'guest ID required.' });

    const guest = await Guest.findOne({ _id: req.params.id }).exec();
    if (!guest) {
        return res.status(204).json({ "message": `No Guest matches ID ${req.params.id}.` });
    }
    res.json(guest);
}

const getGallery = async (req, res) => {
    const projection = { 'fullname':1, 'note':1 };
    // use select to filter which field is displayed
    const guest = await Guest.find().select(projection);
    if (!guest) return res.status(204).json({ 'message': 'No Guest found.' });
    res.json(guest);
}

module.exports = {
    getAllGuests,
    createNewGuest,
    updateGuest,
    deleteGuest,
    getGuest,
    getGallery
}