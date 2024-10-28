import { MLBROKERAGELOGININSTANCE } from "../helper/axios";

const UserLogout =  async() =>{

    const response =  await MLBROKERAGELOGININSTANCE.post(`/api/logout`);
    console.log("logout success:", response
    );
    return response;
}

export default UserLogout;