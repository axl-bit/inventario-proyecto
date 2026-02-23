import db from "../../config/database.js"

export const findAll = async ()=>{
    const sql = "SELECT  * FROM AREA";
    return await db.allAsync(sql);
}


export const findById = async (id)=>{
    const sql = "SELECT * FROM AREA HERE c_area = ?"
    return await db.getAsync(sql, [id]);
}

export const create = async ({s_nombre_area,s_nombre_area_corto, c_activo}) =>{
    const sql = `INSERT INTO AREA (s_nombre_area,s_nombre_area_corto,c_activo) VALUES (?,?,?)`;

    const result  = await db.runAsync(sql, [s_nombre_area,s_nombre_area_corto, c_activo]);

    return result;
}

export const update = async(id,{s_nombre_area,s_nombre_area_corto, c_activo}) =>{
    const sql =`UPDATE AREA SET s_nombre_area = ?,s_nombre_area_corto = ?,c_activo = ? WHERE c_area = ?`;

    return await db.runAsync(sql, [s_nombre_area,s_nombre_area_corto, c_activo, id]);
}

export const remove = async (id) =>{
    const sql = "DELETE FROM AREA WHERE c_area = ?";
    return await db.runAsync(sql,[id]);
}