import { get, post, put } from './BaseServices'






export const QuanLyNguoiDungDangNhap = (thongTinDangNhap) => {
    return (
        post('/api/QuanLyNguoiDung/DangNhap', thongTinDangNhap)
    )
}

export const QuanLyNguoiDungDangNhapService = (accessToken) => {
    return post('api/QuanLyNguoiDung/ThongTinTaiKhoan', accessToken)
}