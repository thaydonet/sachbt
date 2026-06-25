const topicData = {
  id: 'toan-thpt',
  name: 'Toán THPT',
  type: 'root',
  description: 'Toàn bộ chương trình Toán Trung học Phổ thông',
  children: [
    {
      id: 'menh-de-tap-hop', name: 'Mệnh đề - Tập hợp', type: 'branch',
      description: 'Mệnh đề toán học, tập hợp và các phép toán trên tập hợp',
      children: [
        { id: 'menh-de', name: 'Mệnh đề', type: 'leaf', mdKey: 'menh-de' },
        { id: 'tap-hop', name: 'Tập hợp', type: 'leaf', mdKey: 'tap-hop' },
        { id: 'phep-toan-tap-hop', name: 'Phép toán tập hợp', type: 'leaf', mdKey: 'phep-toan-tap-hop' },
        { id: 'suy-luan-toan-hoc', name: 'Suy luận toán học', type: 'leaf', mdKey: 'suy-luan-toan-hoc' }
      ]
    },
    {
      id: 'pt-trinh-he-pt', name: 'Phương trình - Hệ phương trình', type: 'branch',
      description: 'Phương trình bậc nhất, bậc hai và hệ phương trình',
      children: [
        { id: 'pt-bac-nhat', name: 'Phương trình bậc nhất', type: 'leaf', mdKey: 'pt-bac-nhat' },
        { id: 'pt-bac-hai', name: 'Phương trình bậc hai', type: 'leaf', mdKey: 'pt-bac-hai' },
        { id: 'pt-quy-bac-hai', name: 'Phương trình quy về bậc hai', type: 'leaf', mdKey: 'pt-quy-bac-hai' },
        { id: 'he-pt-bac-nhat-2-an', name: 'Hệ phương trình bậc nhất 2 ẩn', type: 'leaf', mdKey: 'he-pt-bac-nhat-2-an' },
        { id: 'he-pt-bac-nhat-3-an', name: 'Hệ phương trình bậc nhất 3 ẩn', type: 'leaf', mdKey: 'he-pt-bac-nhat-3-an' }
      ]
    },
    {
      id: 'ham-so', name: 'Hàm số', type: 'branch',
      description: 'Nghiên cứu sự biến thiên và đồ thị của hàm số',
      children: [
        { id: 'dao-ham', name: 'Đạo hàm', type: 'leaf', mdKey: 'dao-ham' },
        { id: 'cuc-tri', name: 'Cực trị', type: 'leaf', mdKey: 'cuc-tri' },
        { id: 'tiem-can', name: 'Tiệm cận', type: 'leaf', mdKey: 'tiem-can' },
        { id: 'khao-sat', name: 'Khảo sát hàm số', type: 'leaf', mdKey: 'khao-sat' },
        { id: 'tuong-giao', name: 'Tương giao đồ thị', type: 'leaf', mdKey: 'tuong-giao' }
      ]
    },
    {
      id: 'mu-logarit', name: 'Mũ - Logarit', type: 'branch',
      description: 'Hàm số mũ, hàm số logarit và phương trình',
      children: [
        { id: 'ham-mu', name: 'Hàm số mũ', type: 'leaf', mdKey: 'ham-mu' },
        { id: 'ham-logarit', name: 'Hàm số logarit', type: 'leaf', mdKey: 'ham-logarit' },
        { id: 'pt-mu', name: 'Phương trình mũ', type: 'leaf', mdKey: 'pt-mu' },
        { id: 'pt-logarit', name: 'Phương trình logarit', type: 'leaf', mdKey: 'pt-logarit' }
      ]
    },
    {
      id: 'luong-giac', name: 'Lượng giác', type: 'branch',
      description: 'Công thức lượng giác và phương trình lượng giác',
      children: [
        { id: 'cong-thuc-luong-giac', name: 'Công thức lượng giác', type: 'leaf', mdKey: 'cong-thuc-luong-giac' },
        { id: 'ptrinh-luong-giac', name: 'Phương trình lượng giác', type: 'leaf', mdKey: 'ptrinh-luong-giac' }
      ]
    },
    {
      id: 'day-so-cap-so', name: 'Dãy số - Cấp số', type: 'branch',
      description: 'Dãy số, cấp số cộng, cấp số nhân',
      children: [
        { id: 'cap-so-cong', name: 'Cấp số cộng', type: 'leaf', mdKey: 'cap-so-cong' },
        { id: 'cap-so-nhan', name: 'Cấp số nhân', type: 'leaf', mdKey: 'cap-so-nhan' }
      ]
    },
    {
      id: 'to-hop-xac-suat', name: 'Tổ hợp - Xác suất', type: 'branch',
      description: 'Hoán vị, chỉnh hợp, tổ hợp và xác suất',
      children: [
        { id: 'to-hop', name: 'Tổ hợp', type: 'leaf', mdKey: 'to-hop' },
        { id: 'xac-suat', name: 'Xác suất', type: 'leaf', mdKey: 'xac-suat' }
      ]
    },
    {
      id: 'hinh-hoc-oxy', name: 'Hình học Oxy', type: 'branch',
      description: 'Phương pháp tọa độ trong mặt phẳng',
      children: [
        { id: 'toa-do-vecto', name: 'Tọa độ vectơ', type: 'leaf', mdKey: 'toa-do-vecto' },
        { id: 'pt-duong-thang-oxy', name: 'Phương trình đường thẳng', type: 'leaf', mdKey: 'pt-duong-thang-oxy' },
        { id: 'goc-khoang-cach-oxy', name: 'Góc - Khoảng cách', type: 'leaf', mdKey: 'goc-khoang-cach-oxy' },
        { id: 'pt-duong-tron', name: 'Phương trình đường tròn', type: 'leaf', mdKey: 'pt-duong-tron' }
      ]
    },
    {
      id: 'hinh-hoc-oxyz', name: 'Hình học Oxyz', type: 'branch',
      description: 'Hình học giải tích trong không gian',
      children: [
        { id: 'mat-phang', name: 'Mặt phẳng', type: 'leaf', mdKey: 'mat-phang' },
        { id: 'duong-thang', name: 'Đường thẳng', type: 'leaf', mdKey: 'duong-thang' },
        { id: 'mat-cau', name: 'Mặt cầu', type: 'leaf', mdKey: 'mat-cau' },
        { id: 'goc-khoang-cach', name: 'Góc - Khoảng cách', type: 'leaf', mdKey: 'goc-khoang-cach' }
      ]
    },
    {
      id: 'nguyen-ham-tich-phan', name: 'Nguyên hàm - Tích phân', type: 'branch',
      description: 'Nguyên hàm, tích phân và ứng dụng',
      children: [
        { id: 'nguyen-ham', name: 'Nguyên hàm', type: 'leaf', mdKey: 'nguyen-ham' },
        { id: 'tich-phan', name: 'Tích phân', type: 'leaf', mdKey: 'tich-phan' },
        { id: 'ung-dung-tich-phan', name: 'Ứng dụng tích phân', type: 'leaf', mdKey: 'ung-dung-tich-phan' }
      ]
    }
  ]
};

export default topicData;
