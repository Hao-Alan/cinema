import { get, push, post } from './BaseServices'

export const QuanLyDatVeServices = (thongTinLich) => { // mã lịch chiếu lấy từ url param
    return get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${thongTinLich}`)
}
