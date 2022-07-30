import Card from "../model/card.js";


const submitInfo = async (req, res) => {
    // res.header('Access-Control-Allow-Origin', 'https://soft-lily-e3c8c5.netlify.app/');
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.log(req.body)
    const {fullName, empolyer, email, phoneNumber, district, income, dob} = req.body

    const info = await Card.create({
        fullName, empolyer, email, phoneNumber, district, income, dob
    });
    res.status(200).send(info)
}
const getInfo = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://soft-lily-e3c8c5.netlify.app/');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // console.log(req.body)
    // const {fullName, empolyer, email, phoneNumber, district, income, dob} = req.body
    //
    // const info = await Card.create({
    //     fullName, empolyer, email, phoneNumber, district, income, dob
    // });
    res.status(200).send("hello sabit")
}

const Cards = {
    submitInfo, getInfo
}

export default Cards