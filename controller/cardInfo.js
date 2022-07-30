import Card from "../model/card.js";


const submitInfo = async (req, res) => {
    console.log(req.body)
    const {fullName, empolyer, email, phoneNumber, district, income, dob} = req.body

    const info = await Card.create({
        fullName, empolyer, email, phoneNumber, district, income, dob
    });
    res.status(200).send(info)
}

export default submitInfo