import { get, post, put } from './BaseServices'







export const QuanLyNguoiDungDangNhap = (thongTinDangNhap) => {
    return (
        post('/api/QuanLyNguoiDung/DangNhap', thongTinDangNhap)
    )
}