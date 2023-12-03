export const createCustomerService = async (first_name, last_name ) => {
    try {
        const config = {
            method: 'POST',
            url: `https://sandbox.forte.net/api/v3/organizations/org_442760/locations/loc_322709/customers`,
            headers: {
                'X-Forte-Auth-Organization-Id': `org_442760`,
                'Content-Type': 'application/json',
            },
            auth: {
                username: process.env.ACCESS_KEY_FORTE,
                password: process.env.SECRET_KEY_FORTE,
            },
            data: {
                first_name: first_name,
                last_name: last_name
            }
        }
        console.log("🚀 ~ file: index.js:26 ~ createCustomerACH ~ config:", config)
        const cusomer = await axios(config);
        console.log("🚀 ~ file: index.js:17 ~ createCustomerACH ~ cusomer:", cusomer);
        
        return CustomerProfiles;
    } catch (error) {
        throw (error);
    }
}