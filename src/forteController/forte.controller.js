import { createCustomerService } from "../forteService/forte.service.js"; 


export const createCustomer = async (req, res) => {
    try {
        console.log("req.body ",req.body);
        const { first_name, last_name } = req.body;
        console.log("🚀 ~ file: forte.controller.js:5 ~ createCustomer ~ first_name, last_name:", first_name, last_name)
        if (!first_name || !last_name) {
            throw new Error(`Email or Name not Found`)
        }
        await createCustomerService(first_name, last_name).then((customerEntry )=> {
            return res.status(201).send(customerEntry.data);
        })
    } catch (error) {
        console.log("🚀 ~ file: forte.controller.js:11 ~ createCustomer ~ error:", error.message)
        return res.status(400).send(error);
    }
}

export const createPaymentMethodForCustomer = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("🚀 ~ file: forte.controller.js:25 ~ createPaymentMethodForCustomer ~ error:", error)
        return res.status(400).send
    }
}