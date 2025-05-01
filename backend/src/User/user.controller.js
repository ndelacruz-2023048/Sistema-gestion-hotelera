import User from '../User/user.model.js'

export const getAll = async(req, res) => {
    try {
        const users = await User.find()

        if(users.length === 0){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Users not found'
                }
            )
        }
        return res.send(
            {
                success: true,
                message: 'Users found:', 
                users
            }   
        )
    } catch (e) {
        console.error(e);
        return res.status(500).send(
            {
                success: false,
                message: 'Genearl error'
            }
        )
    }
}