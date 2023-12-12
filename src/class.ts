import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Employee{
    @ApiProperty()
    id:string 
    @ApiProperty()
    pb:string
    @ApiProperty()
    fullname:string
    @ApiProperty()
    sdt:number
    @ApiProperty()
    diaChi:string
    @ApiProperty()
    email:string
    @ApiProperty()
    maSoQuanLy:string
    @ApiProperty()
    maSoUngVien:string
    @ApiProperty()
    maSoLuong:string

}