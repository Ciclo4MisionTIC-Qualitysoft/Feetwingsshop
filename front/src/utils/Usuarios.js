const server = "https://feetwingsshop-back.herokuapp.com"

export const login = async (data) => {
    try{
        const res = await fetch(`${server}/api/v1/usuarios/login`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data)
        })
        return await res.json()
    } catch(err){
        return err
    }   
}

export const registrar = async (data) => {
    try{
        const res = await fetch(`${server}/api/v1/usuarios`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data)
        })
        return await res.json()
    } catch(err){
        return err
    }   
}