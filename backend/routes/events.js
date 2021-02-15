/* 
RUTAS EVENTS
host+/api/events
*/
const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();
const { crearEvento, getEventos, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require("../helpers/isDate");

//Proteje todas las rutas
router.use(validarJWT);

router.get('/', getEventos);

router.post('/', [
    check('title', 'El titulo es Obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos
], crearEvento);

router.put('/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    actualizarEvento);

router.delete('/:id', eliminarEvento);

module.exports = router;