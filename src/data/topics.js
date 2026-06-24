const topicData = {
  id: 'toan-thpt',
  name: 'Toán THPT',
  type: 'root',
  description: 'Toàn bộ chương trình Toán Trung học Phổ thông',
  children: [
    {
      id: 'ham-so',
      name: 'Hàm số',
      type: 'branch',
      description: 'Nghiên cứu sự biến thiên và đồ thị của hàm số',
      children: [
        {
          id: 'dao-ham', name: 'Đạo hàm', type: 'leaf', mdKey: 'dao-ham',
          video: 'https://www.youtube.com/results?search_query=%C4%91%E1%BA%A1o+h%C3%A0m+l%E1%BB%9Bp+11',
          questions: [
            'Tính đạo hàm của hàm số $y = x^3 + 2x^2 - 5x + 1$',
            'Tính đạo hàm của hàm số $y = \\sin(2x) + \\cos^2 x$',
            'Viết phương trình tiếp tuyến của $y = x^3 - 3x + 2$ tại $x_0 = 1$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán', 'Đề thi THPT Quốc gia 2022 - Môn Toán']
        },
        {
          id: 'cuc-tri', name: 'Cực trị', type: 'leaf', mdKey: 'cuc-tri',
          video: 'https://www.youtube.com/results?search_query=c%E1%BB%B1c+tr%E1%BB%8B+h%C3%A0m+s%E1%BB%91+l%E1%BB%9Bp+12',
          questions: [
            'Tìm cực trị của hàm số $y = x^3 - 3x^2 + 2$',
            'Tìm $m$ để $y = x^3 - 3mx^2 + 3(m^2-1)x + 1$ có 2 điểm cực trị'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'tiem-can', name: 'Tiệm cận', type: 'leaf', mdKey: 'tiem-can',
          video: 'https://www.youtube.com/results?search_query=ti%E1%BB%87m+c%E1%BA%ADn+h%C3%A0m+s%E1%BB%91+l%E1%BB%9Bp+12',
          questions: [
            'Tìm tiệm cận của $y = \\frac{2x+1}{x-1}$',
            'Tìm $m$ để đồ thị $y = \\frac{x^2+mx+1}{x-1}$ có tiệm cận xiên'
          ],
          exams: ['Đề thi THPT Quốc gia 2022 - Môn Toán']
        },
        {
          id: 'khao-sat', name: 'Khảo sát hàm số', type: 'leaf', mdKey: 'khao-sat',
          video: 'https://www.youtube.com/results?search_query=kh%E1%BA%A3o+s%C3%A1t+h%C3%A0m+s%E1%BB%91+l%E1%BB%9Bp+12',
          questions: [
            'Khảo sát và vẽ đồ thị $y = x^3 - 3x + 1$',
            'Khảo sát hàm số $y = \\frac{x+2}{x-1}$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'tuong-giao', name: 'Tương giao đồ thị', type: 'leaf', mdKey: 'tuong-giao',
          video: 'https://www.youtube.com/results?search_query=t%C6%B0%C6%A1ng+giao+%C4%91%E1%BB%93+th%E1%BB%8B+h%C3%A0m+s%E1%BB%91',
          questions: [
            'Tìm giao điểm của $y = x^3 - 3x + 2$ và $y = x - 1$',
            'Biện luận nghiệm của $x^3 - 3x + m = 0$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        }
      ]
    },
    {
      id: 'nguyen-ham-tich-phan', name: 'Nguyên hàm - Tích phân', type: 'branch',
      description: 'Nguyên hàm, tích phân và ứng dụng',
      children: [
        {
          id: 'nguyen-ham', name: 'Nguyên hàm', type: 'leaf', mdKey: 'nguyen-ham',
          video: 'https://www.youtube.com/results?search_query=nguy%C3%AAn+h%C3%A0m+l%E1%BB%9Bp+12',
          questions: [
            'Tìm nguyên hàm của $f(x) = 3x^2 + 2x - 1$',
            'Tìm họ nguyên hàm $F(x)$ biết $F(0) = 1$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'tich-phan', name: 'Tích phân', type: 'leaf', mdKey: 'tich-phan',
          video: 'https://www.youtube.com/results?search_query=t%C3%ADch+ph%C3%A2n+l%E1%BB%9Bp+12',
          questions: [
            'Tính $\\int_0^1 (x^3 + 2x) dx$',
            'Tính $\\int_0^1 x \\cdot e^x dx$ (từng phần)'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'ung-dung-tich-phan', name: 'Ứng dụng tích phân', type: 'leaf', mdKey: 'ung-dung-tich-phan',
          video: 'https://www.youtube.com/results?search_query=%E1%BB%A9ng+d%E1%BB%A5ng+t%C3%ADch+ph%C3%A2n+l%E1%BB%9Bp+12',
          questions: [
            'Tính diện tích hình phẳng giới hạn bởi $y = x^2$ và $y = 2x$',
            'Tính thể tích khối tròn xoay khi quay $y = \\sqrt{x}$ quanh $Ox$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        }
      ]
    },
    {
      id: 'hinh-hoc-oxyz', name: 'Hình học Oxyz', type: 'branch',
      description: 'Hình học giải tích trong không gian',
      children: [
        {
          id: 'mat-phang', name: 'Mặt phẳng', type: 'leaf', mdKey: 'mat-phang',
          video: 'https://www.youtube.com/results?search_query=ph%C6%B0%C6%A1ng+tr%C3%ACnh+m%E1%BA%B7t+ph%E1%BA%B3ng+oxyz',
          questions: [
            'Viết phương trình mặt phẳng qua $A(1;0;0), B(0;2;0), C(0;0;3)$',
            'Tính $d(M, (P))$ với $M(1;2;3)$, $(P): 2x + y - 2z + 5 = 0$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'duong-thang', name: 'Đường thẳng', type: 'leaf', mdKey: 'duong-thang',
          video: 'https://www.youtube.com/results?search_query=ph%C6%B0%C6%A1ng+tr%C3%ACnh+%C4%91%C6%B0%E1%BB%9Dng+th%E1%BA%B3ng+oxyz',
          questions: [
            'Viết phương trình tham số của đường thẳng qua $A(1;2;3)$ và $B(4;5;6)$',
            'Tìm giao điểm của đường thẳng $d$ và mặt phẳng $(P)$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'mat-cau', name: 'Mặt cầu', type: 'leaf', mdKey: 'mat-cau',
          video: 'https://www.youtube.com/results?search_query=ph%C6%B0%C6%A1ng+tr%C3%ACnh+m%E1%BA%B7t+c%E1%BA%A7u+oxyz',
          questions: [
            'Viết phương trình mặt cầu tâm $I(1;2;3)$ bán kính $R = 5$',
            'Tìm tâm và bán kính mặt cầu $x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'goc-khoang-cach', name: 'Góc - Khoảng cách', type: 'leaf', mdKey: 'goc-khoang-cach',
          video: 'https://www.youtube.com/results?search_query=g%C3%B3c+kho%E1%BA%A3ng+c%C3%A1ch+oxyz',
          questions: [
            'Tính góc giữa $(P): x+y+z-1=0$ và $(Q): x-y+2z+3=0$',
            'Tính khoảng cách giữa hai đường thẳng chéo nhau'
          ],
          exams: ['Đề thi THPT Quốc gia 2022 - Môn Toán']
        }
      ]
    },
    {
      id: 'mu-logarit', name: 'Mũ - Logarit', type: 'branch',
      description: 'Hàm số mũ, hàm số logarit và phương trình',
      children: [
        {
          id: 'ham-mu', name: 'Hàm số mũ', type: 'leaf', mdKey: 'ham-mu',
          video: 'https://www.youtube.com/results?search_query=h%C3%A0m+s%E1%BB%91+m%C5%A9+l%E1%BB%9Bp+12',
          questions: ['Giải phương trình $2^x = 8$', 'Tìm đạo hàm $y = 2^x + 3^{x+1}$'],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'ham-logarit', name: 'Hàm số logarit', type: 'leaf', mdKey: 'ham-logarit',
          video: 'https://www.youtube.com/results?search_query=h%C3%A0m+s%E1%BB%91+logarit+l%E1%BB%9Bp+12',
          questions: [
            'Tìm TXĐ của $y = \\log_2(x^2 - 3x + 2)$',
            'Giải $\\log_2(x+1) = 3$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        }
      ]
    },
    {
      id: 'luong-giac', name: 'Lượng giác', type: 'branch',
      description: 'Công thức lượng giác và phương trình lượng giác',
      children: [
        {
          id: 'cong-thuc-luong-giac', name: 'Công thức lượng giác', type: 'leaf', mdKey: 'cong-thuc-luong-giac',
          video: 'https://www.youtube.com/results?search_query=c%C3%B4ng+th%E1%BB%A9c+l%C6%B0%E1%BB%A3ng+gi%C3%A1c+l%E1%BB%9Bp+11',
          questions: ['Rút gọn $A = \\sin^2 x + \\cos^2 x + \\tan^2 x$', 'Chứng minh $(1-\\cos^2\\alpha)/\\sin^2\\alpha = 1$'],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'ptrinh-luong-giac', name: 'Phương trình lượng giác', type: 'leaf', mdKey: 'ptrinh-luong-giac',
          video: 'https://www.youtube.com/results?search_query=ph%C6%B0%C6%A1ng+tr%C3%ACnh+l%C6%B0%E1%BB%A3ng+gi%C3%A1c+l%E1%BB%9Bp+11',
          questions: [
            'Giải $\\sin x = 1/2$',
            'Giải $\\sin^2 x - 3\\sin x + 2 = 0$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        }
      ]
    },
    {
      id: 'to-hop-xac-suat', name: 'Tổ hợp - Xác suất', type: 'branch',
      description: 'Hoán vị, chỉnh hợp, tổ hợp và xác suất',
      children: [
        {
          id: 'to-hop', name: 'Tổ hợp', type: 'leaf', mdKey: 'to-hop',
          video: 'https://www.youtube.com/results?search_query=t%E1%BB%95+h%E1%BB%A3p+ch%E1%BB%89nh+h%E1%BB%A3p+l%E1%BB%9Bp+11',
          questions: [
            'Có bao nhiêu cách xếp 5 người vào 5 ghế?',
            'Có bao nhiêu cách chọn 3 học sinh từ 10 học sinh?'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'xac-suat', name: 'Xác suất', type: 'leaf', mdKey: 'xac-suat',
          video: 'https://www.youtube.com/results?search_query=x%C3%A1c+su%E1%BA%A5t+l%E1%BB%9Bp+11',
          questions: [
            'Gieo xúc xắc, tính xác suất mặt chẵn xuất hiện',
            'Hộp 3 bi đỏ, 5 bi xanh. Lấy 2 bi, tính xác suất được 2 bi đỏ'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        }
      ]
    },
    {
      id: 'so-phuc', name: 'Số phức', type: 'branch',
      description: 'Số phức và các phép toán',
      children: [
        {
          id: 'so-phuc-co-ban', name: 'Số phức', type: 'leaf', mdKey: 'so-phuc-co-ban',
          video: 'https://www.youtube.com/results?search_query=s%E1%BB%91+ph%E1%BB%A9c+l%E1%BB%9Bp+12',
          questions: [
            'Tìm môđun của $z = 3 + 4i$',
            'Tìm số phức liên hợp của $z = (1+2i)(2-i)$'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'ung-dung-so-phuc', name: 'Ứng dụng số phức', type: 'leaf', mdKey: 'ung-dung-so-phuc',
          video: 'https://www.youtube.com/results?search_query=%E1%BB%A9ng+d%E1%BB%A5ng+s%E1%BB%91+ph%E1%BB%A9c+l%E1%BB%9Bp+12',
          questions: [
            'Viết $z = 1 + i$ dưới dạng lượng giác',
            'Tìm căn bậc hai của $z = -3 + 4i$'
          ],
          exams: ['Đề thi THPT Quốc gia 2022 - Môn Toán']
        }
      ]
    },
    {
      id: 'day-so-cap-so', name: 'Dãy số - Cấp số', type: 'branch',
      description: 'Dãy số, cấp số cộng, cấp số nhân',
      children: [
        {
          id: 'cap-so-cong', name: 'Cấp số cộng', type: 'leaf', mdKey: 'cap-so-cong',
          video: 'https://www.youtube.com/results?search_query=c%E1%BA%A5p+s%E1%BB%91+c%E1%BB%99ng+l%E1%BB%9Bp+11',
          questions: [
            'CSC có $u_1 = 2$, $d = 3$. Tìm $u_{10}$ và $S_{10}$',
            'Tìm 3 số hạng liên tiếp của CSC biết tổng bằng 9, tích bằng -21'
          ],
          exams: ['Đề thi THPT Quốc gia 2023 - Môn Toán']
        },
        {
          id: 'cap-so-nhan', name: 'Cấp số nhân', type: 'leaf', mdKey: 'cap-so-nhan',
          video: 'https://www.youtube.com/results?search_query=c%E1%BA%A5p+s%E1%BB%91+nh%C3%A2n+l%E1%BB%9Bp+11',
          questions: [
            'CSN có $u_1 = 2$, $q = 3$. Tìm $u_5$ và $S_5$',
            'Tìm $q$ biết $u_1 = 1$, $u_4 = 27$'
          ],
          exams: ['Đề thi THPT Quốc gia 2022 - Môn Toán']
        }
      ]
    }
  ]
};

export default topicData;
