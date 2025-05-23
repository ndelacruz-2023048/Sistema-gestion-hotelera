import Event from "./event.model.js"

export const newEvent = async(req, res) => {
    try {
        let data = req.body
        const event = new Event(data)
        await event.save()
        return res.status(200).send(
            {
                success: true,
                message: 'New Event Created',
                event
            }
        )
    } catch (e) {
        console.error(e);
        return res.status(400).send(
            {
                success: false,
                message: 'General error when add new event for system'
            }
        )
    }
}

export const getAll = async(req, res)=> {
    try {
        const events = await Event.find().populate(
            [
                {
                    path: 'designated',
                    select: 'profilePicture name surname -_id'
                },
                {
                    path: 'hotel',
                    select: 'name -_id' 
                }
            ]
        )

        if(events.length === 0 ) return res.status(404).send(
            {
                success: false,
                message: 'Not event found'
            }
        )

            return res.status(200).send(
                {
                    success: true,
                    message: 'Events Found: ',
                    events
                }
            )
    } catch (e) {
        console.error(e);
        return res.status(400).send(
            {
                success: false,
                message: 'General error when list Events'
            }
        )
    }
}

export const updateEvent = async(req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        const event = await Event.findByIdAndUpdate(
            id,
            data,
            {new: true}
        )
        if (!event) return res.status(404).send(
            {
                success: false,
                message: 'Event not found, event not updated'
            }
        )
        return res.status(200).send(
            {
                success: true,
                message: 'Event updated'
            }
        )
    } catch (e) {
        console.error(e);
        
        return res.status(400).send(
            {
                success: false,
                message: 'General error when updated event'
            }
        )
    }
}

export const deleteEvent = async(req, res)=> {
    const { id } = req.params
    try {
        const event = await Event.findByIdAndDelete(id)
        if(!event) return res.status(404).send(
            {
                success: false,
                message: 'Event not found, event not deleted'
            }
        )
        return res.status(200).send(
            {
                success: true,
                message: 'Event deleted'
            }
        )
    } catch (e) {
        return res.status(400).send(
            {
                success: false,
                message: 'General error when drop event'
            }
        )
    }
}