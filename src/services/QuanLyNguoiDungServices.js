import { get, post, put } from './BaseServices'







export const QuanLyNguoiDungDangNhap = (props) => {
    return (
        post('/api/QuanLyNguoiDung/DangNhap', props)
    )
}