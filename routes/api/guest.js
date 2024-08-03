const express = require('express');
const router = express.Router();
const guestsController = require('../../controllers/guestsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/gallery')
    .get(guestsController.getGallery);

router.route('/')
    .get(guestsController.getAllGuests)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), guestsController.createNewGuest)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), guestsController.updateGuest)
    .delete(verifyRoles(ROLES_LIST.Admin), guestsController.deleteGuest);

router.route('/:id')
    .get(guestsController.getGuest);

module.exports = router;