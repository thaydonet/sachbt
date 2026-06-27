const topicData = {
  id: 'toan-thpt',
  name: 'Toán THPT',
  type: 'root',
  description: 'Toàn bộ chương trình Toán Trung học Phổ thông',
  children: [
    {
      id: 'toan-10',
      name: 'Toán Lớp 10',
      type: 'branch',
      description: 'Chương trình Toán lớp 10: Đại số, Hình học và Xác suất',
      children: [
        {
          id: '10-menh-de-tap-hop',
          name: 'Mệnh đề & Tập hợp',
          type: 'branch',
          description: 'Cơ sở toán học, mệnh đề lôgíc và tập hợp',
          children: [
            { id: 'menh-de', name: 'Mệnh đề toán học', type: 'leaf', mdKey: 'menh-de' },
            { id: 'tap-hop-phep-toan', name: 'Tập hợp và các phép toán', type: 'leaf', mdKey: 'tap-hop-phep-toan' }
          ]
        },
        {
          id: '10-bpt-he-bpt',
          name: 'Bất & Hệ BPT bậc nhất 2 ẩn',
          type: 'branch',
          description: 'Biểu diễn miền nghiệm và ứng dụng tối ưu hóa tuyến tính',
          children: [
            { id: 'bpt-bac-nhat-2-an', name: 'Bất phương trình bậc nhất hai ẩn', type: 'leaf', mdKey: 'bpt-bac-nhat-2-an' },
            { id: 'he-bpt-bac-nhat-2-an', name: 'Hệ bất phương trình bậc nhất hai ẩn', type: 'leaf', mdKey: 'he-bpt-bac-nhat-2-an' }
          ]
        },
        {
          id: '10-ham-so-bac-hai',
          name: 'Hàm số bậc hai & Đồ thị',
          type: 'branch',
          description: 'Hàm số, đồ thị Parabol và ứng dụng tam thức bậc hai',
          children: [
            { id: 'ham-so-va-do-thi', name: 'Hàm số và đồ thị', type: 'leaf', mdKey: 'ham-so-va-do-thi' },
            { id: 'ham-so-bac-hai', name: 'Hàm số bậc hai', type: 'leaf', mdKey: 'ham-so-bac-hai' },
            { id: 'dau-tam-thuc-bac-hai', name: 'Dấu của tam thức bậc hai', type: 'leaf', mdKey: 'dau-tam-thuc-bac-hai' },
            { id: 'pt-quy-bac-hai-10', name: 'Phương trình quy về bậc hai', type: 'leaf', mdKey: 'pt-quy-bac-hai-10' }
          ]
        },
        {
          id: '10-he-thuc-luong-tam-giac',
          name: 'Hệ thức lượng trong tam giác',
          type: 'branch',
          description: 'Hệ thức lượng trong tam giác thường và ứng dụng thực tế',
          children: [
            { id: 'gt-luong-giac-10', name: 'Giá trị lượng giác từ 0° đến 180°', type: 'leaf', mdKey: 'gt-luong-giac-10' },
            { id: 'dinh-ly-sin-cosin', name: 'Định lý Sin và Định lý Côsin', type: 'leaf', mdKey: 'dinh-ly-sin-cosin' }
          ]
        },
        {
          id: '10-vecto',
          name: 'Vectơ',
          type: 'branch',
          description: 'Các khái niệm và phép toán liên quan đến vectơ',
          children: [
            { id: 'vecto-va-phep-toan', name: 'Khái niệm vectơ và các phép toán', type: 'leaf', mdKey: 'vecto-va-phep-toan' },
            { id: 'tich-vo-huong-vecto', name: 'Tích vô hướng của hai vectơ', type: 'leaf', mdKey: 'tich-vo-huong-vecto' }
          ]
        },
        {
          id: '10-toa-do-oxy',
          name: 'Tọa độ Oxy',
          type: 'branch',
          description: 'Phương pháp tọa độ trong mặt phẳng Oxy',
          children: [
            { id: 'toa-do-vecto-oxy', name: 'Tọa độ vectơ và điểm', type: 'leaf', mdKey: 'toa-do-vecto-oxy' },
            { id: 'pt-duong-thang-oxy', name: 'Phương trình đường thẳng', type: 'leaf', mdKey: 'pt-duong-thang-oxy' },
            { id: 'pt-duong-tron-oxy', name: 'Phương trình đường tròn', type: 'leaf', mdKey: 'pt-duong-tron-oxy' },
            { id: 'ba-duong-conic', name: 'Ba đường Conic', type: 'leaf', mdKey: 'ba-duong-conic' }
          ]
        },
        {
          id: '10-dai-so-to-hop',
          name: 'Đại số tổ hợp',
          type: 'branch',
          description: 'Quy tắc đếm cơ bản và các cấu hình tổ hợp',
          children: [
            { id: 'quy-tac-dem-nhi-thuc', name: 'Quy tắc đếm và Nhị thức Newton', type: 'leaf', mdKey: 'quy-tac-dem-nhi-thuc' },
            { id: 'hoan-vi-chinh-hop-to-hop-10', name: 'Hoán vị, Chỉnh hợp, Tổ hợp', type: 'leaf', mdKey: 'hoan-vi-chinh-hop-to-hop-10' }
          ]
        },
        {
          id: '10-xac-suat-co-dien',
          name: 'Xác suất cổ điển',
          type: 'branch',
          description: 'Tính xác suất theo định nghĩa cổ điển',
          children: [
            { id: 'xac-suat-co-dien-10', name: 'Xác suất cổ điển', type: 'leaf', mdKey: 'xac-suat-co-dien-10' }
          ]
        },
        {
          id: '10-thong-ke-khong-ghep-nhom',
          name: 'Thống kê không ghép nhóm',
          type: 'branch',
          description: 'Các số đặc trưng đo xu thế trung tâm và đo độ phân tán của mẫu số liệu không ghép nhóm',
          children: [
            { id: 'so-dac-trung-10', name: 'Các số đặc trưng đo xu thế trung tâm', type: 'leaf', mdKey: 'so-dac-trung-10' },
            { id: 'so-dac-trung-do-phan-tan-10', name: 'Các số đặc trưng đo độ phân tán', type: 'leaf', mdKey: 'so-dac-trung-do-phan-tan-10' }
          ]
        }
      ]
    },
    {
      id: 'toan-11',
      name: 'Toán Lớp 11',
      type: 'branch',
      description: 'Chương trình Toán lớp 11: Lượng giác, Giới hạn, Không gian song song & vuông góc, Hàm số mũ và lôgarit, Đạo hàm',
      children: [
        {
          id: '11-luong-giac',
          name: 'Lượng giác',
          type: 'branch',
          description: 'Góc lượng giác, hàm số lượng giác và phương trình lượng giác',
          children: [
            { id: 'goc-cong-thuc-luong-giac', name: 'Góc và Công thức lượng giác', type: 'leaf', mdKey: 'goc-cong-thuc-luong-giac' },
            { id: 'ham-so-luong-giac', name: 'Hàm số lượng giác', type: 'leaf', mdKey: 'ham-so-luong-giac' },
            { id: 'ptrinh-luong-giac', name: 'Phương trình lượng giác cơ bản', type: 'leaf', mdKey: 'ptrinh-luong-giac' }
          ]
        },
        {
          id: '11-day-so-cap-so',
          name: 'Dãy số & Cấp số',
          type: 'branch',
          description: 'Dãy số, cấp số cộng và cấp số nhân',
          children: [
            { id: 'day-so', name: 'Dãy số', type: 'leaf', mdKey: 'day-so' },
            { id: 'cap-so-cong', name: 'Cấp số cộng', type: 'leaf', mdKey: 'cap-so-cong' },
            { id: 'cap-so-nhan', name: 'Cấp số nhân', type: 'leaf', mdKey: 'cap-so-nhan' }
          ]
        },
        {
          id: '11-gioi-han',
          name: 'Giới hạn & Liên tục',
          type: 'branch',
          description: 'Giới hạn dãy số, giới hạn hàm số và tính liên tục',
          children: [
            { id: 'gioi-han-day-so-ham-so', name: 'Giới hạn dãy số và hàm số', type: 'leaf', mdKey: 'gioi-han-day-so-ham-so' },
            { id: 'ham-so-lien-tuc', name: 'Hàm số liên tục', type: 'leaf', mdKey: 'ham-so-lien-tuc' }
          ]
        },
        {
          id: '11-quan-he-song-song',
          name: 'Quan hệ song song',
          type: 'branch',
          description: 'Đường thẳng và mặt phẳng song song trong không gian',
          children: [
            { id: 'quan-he-song-song', name: 'Đường thẳng & Mặt phẳng song song', type: 'leaf', mdKey: 'quan-he-song-song' }
          ]
        },
        {
          id: '11-quan-he-vuong-goc',
          name: 'Quan hệ vuông góc',
          type: 'branch',
          description: 'Đường thẳng và mặt phẳng vuông góc, góc và khoảng cách',
          children: [
            { id: 'quan-he-vuong-goc', name: 'Đường thẳng & Mặt phẳng vuông góc', type: 'leaf', mdKey: 'quan-he-vuong-goc' },
            { id: 'goc-khoang-cach-11', name: 'Góc và khoảng cách trong không gian', type: 'leaf', mdKey: 'goc-khoang-cach-11' }
          ]
        },
        {
          id: '11-mu-logarit',
          name: 'Lũy thừa, Mũ & Lôgarit',
          type: 'branch',
          description: 'Lũy thừa, lôgarit và hàm số mũ, lôgarit',
          children: [
            { id: 'luy-thua-logarit', name: 'Phép tính lũy thừa và lôgarit', type: 'leaf', mdKey: 'luy-thua-logarit' },
            { id: 'ham-so-mu-logarit-11', name: 'Hàm số mũ và hàm số lôgarit', type: 'leaf', mdKey: 'ham-so-mu-logarit-11' },
            { id: 'pt-bpt-mu-logarit', name: 'Phương trình & Bất phương trình mũ, lôgarit', type: 'leaf', mdKey: 'pt-bpt-mu-logarit' }
          ]
        },
        {
          id: '11-dao-ham',
          name: 'Đạo hàm',
          type: 'branch',
          description: 'Định nghĩa đạo hàm, ý nghĩa hình học và các công thức tính đạo hàm',
          children: [
            { id: 'dao-ham', name: 'Định nghĩa và quy tắc tính đạo hàm', type: 'leaf', mdKey: 'dao-ham' }
          ]
        },
        {
          id: '11-thong-ke-ghep-nhom',
          name: 'Thống kê ghép nhóm',
          type: 'branch',
          description: 'Mẫu số liệu ghép nhóm và các số đặc trưng đo xu thế trung tâm',
          children: [
            { id: 'so-dac-trung-xu-the-trung-tam-11', name: 'Số đặc trưng đo xu thế trung tâm', type: 'leaf', mdKey: 'so-dac-trung-xu-the-trung-tam-11' }
          ]
        },
        {
          id: '11-quy-tac-tinh-xac-suat',
          name: 'Các quy tắc tính xác suất',
          type: 'branch',
          description: 'Công thức cộng và nhân xác suất',
          children: [
            { id: 'cong-thuc-cong-xac-suat', name: 'Công thức cộng xác suất', type: 'leaf', mdKey: 'cong-thuc-cong-xac-suat' },
            { id: 'cong-thuc-nhan-xac-suat', name: 'Công thức nhân xác suất', type: 'leaf', mdKey: 'cong-thuc-nhan-xac-suat' }
          ]
        }
      ]
    },
    {
      id: 'toan-12',
      name: 'Toán Lớp 12',
      type: 'branch',
      description: 'Chương trình Toán lớp 12: Khảo sát hàm số, Nguyên hàm - Tích phân, Hình học Oxyz, Số phức',
      children: [
        {
          id: '12-khao-sat-ham-so',
          name: 'Khảo sát hàm số',
          type: 'branch',
          description: 'Ứng dụng đạo hàm khảo sát sự biến thiên và vẽ đồ thị hàm số',
          children: [
            { id: 'don-dieu-cuc-tri', name: 'Tính đơn điệu và Cực trị', type: 'leaf', mdKey: 'don-dieu-cuc-tri' },
            { id: 'glnn-gtnn', name: 'Giá trị lớn nhất và nhỏ nhất', type: 'leaf', mdKey: 'glnn-gtnn' },
            { id: 'tiem-can', name: 'Đường tiệm cận', type: 'leaf', mdKey: 'tiem-can' },
            { id: 'khao-sat-do-thi', name: 'Khảo sát sự biến thiên và vẽ đồ thị', type: 'leaf', mdKey: 'khao-sat-do-thi' }
          ]
        },
        {
          id: '12-nguyen-ham-tich-phan',
          name: 'Nguyên hàm & Tích phân',
          type: 'branch',
          description: 'Nguyên hàm, tích phân và các ứng dụng thực tế',
          children: [
            { id: 'nguyen-ham', name: 'Nguyên hàm', type: 'leaf', mdKey: 'nguyen-ham' },
            { id: 'tich-phan', name: 'Tích phân', type: 'leaf', mdKey: 'tich-phan' },
            { id: 'ung-dung-tich-phan', name: 'Ứng dụng hình học của tích phân', type: 'leaf', mdKey: 'ung-dung-tich-phan' }
          ]
        },
        {
          id: '12-vecto-toa-do-oxyz',
          name: 'Vectơ & tọa độ trong không gian',
          type: 'branch',
          description: 'Vectơ và hệ tọa độ Oxyz trong không gian',
          children: [
            { id: 'vecto-trong-khong-gian', name: 'Vectơ trong không gian', type: 'leaf', mdKey: 'vecto-trong-khong-gian' },
            { id: 'he-toa-do-oxyz', name: 'Hệ tọa độ Oxyz', type: 'leaf', mdKey: 'he-toa-do-oxyz' },
            { id: 'bieu-thuc-toa-do-vecto', name: 'Biểu thức tọa độ các phép toán', type: 'leaf', mdKey: 'bieu-thuc-toa-do-vecto' }
          ]
        },
        {
          id: '12-pt-hinh-hoc-oxyz',
          name: 'Phương pháp tọa độ trong không gian',
          type: 'branch',
          description: 'Phương trình mặt phẳng, đường thẳng và mặt cầu Oxyz',
          children: [
            { id: 'mat-phang', name: 'Phương trình mặt phẳng', type: 'leaf', mdKey: 'mat-phang' },
            { id: 'duong-thang', name: 'Phương trình đường thẳng', type: 'leaf', mdKey: 'duong-thang' },
            { id: 'mat-cau', name: 'Phương trình mặt cầu', type: 'leaf', mdKey: 'mat-cau' }
          ]
        },
        {
          id: '12-thong-ke-ghep-nhom',
          name: 'Thống kê ghép nhóm',
          type: 'branch',
          description: 'Thu thập và tính toán số đặc trưng đo xu thế trung tâm mẫu ghép nhóm',
          children: [
            { id: 'mau-so-lieu-ghep-nhom', name: 'Mẫu số liệu ghép nhóm', type: 'leaf', mdKey: 'mau-so-lieu-ghep-nhom' },
            { id: 'so-dac-trung-ghep-nhom', name: 'Các số đặc trưng xu thế trung tâm', type: 'leaf', mdKey: 'so-dac-trung-ghep-nhom' }
          ]
        },
        {
          id: '12-xac-suat-co-dieu-kien',
          name: 'Xác suất có điều kiện',
          type: 'branch',
          description: 'Tính xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes',
          children: [
            { id: 'xac-suat-co-dieu-kien', name: 'Xác suất có điều kiện', type: 'leaf', mdKey: 'xac-suat-co-dieu-kien' },
            { id: 'xac-suat-toan-phan-bayes', name: 'Xác suất toàn phần & Bayes', type: 'leaf', mdKey: 'xac-suat-toan-phan-bayes' }
          ]
        }
      ]
    }
  ]
};

export default topicData;
