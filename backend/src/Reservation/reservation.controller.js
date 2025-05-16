import Reservation from './reservation.model.js';

export const createReservation = async (req, res) => {
  try {
    const data = req.body;

    // Validación simple: al menos debe tener room o event
    if (!data.room && !data.event) {
      return res.status(400).send({
        success: false,
        message: 'Se debe especificar una habitación o un evento.'
      })
    }

    const reservation = new Reservation(data);
    await reservation.save()

    return res.status(201).send({
      success: true,
      message: 'Reserva creada exitosamente.',
      reservation
    })
  } catch (err) {
    console.error(err)
    return res.status(500).send({
      success: false,
      message: 'Error interno del servidor.'
    })
  }
}

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate('user', 'name email')
      .populate('room')
      .populate('event')

    return res.send({
      success: true,
      message: 'Reservas encontradas.',
      reservations
    })
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      success: false,
      message: 'Error al obtener reservas.'
    })
  }
}
