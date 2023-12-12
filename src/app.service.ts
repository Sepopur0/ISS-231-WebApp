import { Injectable } from '@nestjs/common';
import { Employee } from './class';
const oracledb = require('oracledb');

@Injectable()
export class AppService {
  async logIn(username='tuut', password='password'):Promise<any>
  {
      let connection;
      try {
          connection = await oracledb.getConnection({ user: username, password: password, connectionString: 'localhost/orcl'});
          console.log("Successfully connected to Oracle Database as", username);
          const data = await connection.execute('SELECT * FROM PHONG_BAN');
          return connection;
      } catch (err) {
          console.error(err);
          return 'Fail to connect!';
      } 
      
  }

  async getEmployee(id:string){
    let connection = await this.logIn();
    const data = await connection.execute(`SELECT * FROM NHAN_VIEN WHERE MA_SO_NHAN_VIEN = :id`, [id]);
    return data;
  }

  async addEmployee({id, pb, fullname, sdt, diaChi, email, maSoQuanLy, maSoUngVien, maSoLuong}:Employee){
    let connection = await this.logIn();
    const data = await connection.execute(`INSERT INTO NHAN_VIEN (MA_SO_NHAN_VIEN,  MA_SO_PHONG_BAN, HO_VA_TEN, SDT, DIA_CHI, EMAIL, MA_SO_QUAN_LY, MA_UNG_VIEN, MA_SO_LUONG) 
    VALUES (:id, :pb, :fullname, :sdt, :diaChi, :email, :maSoQuanLy, :maUngVien, :maSoLuong )`, [id, pb, fullname, sdt, diaChi, email, maSoQuanLy, maSoUngVien,maSoLuong]);
    console.log("Insert successfully");
    return data;
  }

}
