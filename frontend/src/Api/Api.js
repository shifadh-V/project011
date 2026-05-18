const baseURL = 'http://localhost:3000'

export const loginuser = async (postdata)=>{
        const res = await fetch(`${baseURL}/users/login`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(postdata)
        })
        return res.json()
} 