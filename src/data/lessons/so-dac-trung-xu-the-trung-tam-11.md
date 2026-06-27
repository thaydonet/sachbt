## Mẫu số liệu ghép nhóm và các số đặc trưng đo xu thế trung tâm (Lớp 11)

Mẫu số liệu ghép nhóm thường được dùng để tóm tắt các mẫu số liệu có kích thước lớn hoặc liên tục.

---

### 1. Số trung bình cộng (Mean)
Số trung bình của mẫu số liệu ghép nhóm được tính bằng công thức:

$$\bar{x} = \frac{m_1x_1 + m_2x_2 + \dots + m_kx_k}{n}$$

trong đó $x_i = \frac{a_i + a_{i+1}}{2}$ là giá trị đại diện của nhóm $[a_i; a_{i+1})$, $m_i$ là tần số của nhóm đó, và $n$ là tổng số số liệu.

---

### 2. Trung vị (Median)
Trung vị $M_e$ của mẫu số liệu ghép nhóm chia mẫu số liệu thành hai phần bằng nhau.
- Giả sử nhóm chứa trung vị là $[a_p; a_{p+1})$. Công thức tính:

$$M_e = a_p + \left( \frac{\frac{n}{2} - (m_1 + m_2 + \dots + m_{p-1})}{m_p} \right) \cdot (a_{p+1} - a_p)$$

---

### 3. Tứ phân vị (Quartiles)
- Tứ phân vị thứ hai $Q_2 = M_e$.
- Tứ phân vị thứ nhất $Q_1$ (nhóm $[a_q; a_{q+1})$ chứa tứ phân vị thứ nhất):

$$Q_1 = a_q + \left( \frac{\frac{n}{4} - (m_1 + m_2 + \dots + m_{q-1})}{m_q} \right) \cdot (a_{q+1} - a_q)$$

- Tứ phân vị thứ ba $Q_3$ (nhóm $[a_r; a_{r+1})$ chứa tứ phân vị thứ ba):

$$Q_3 = a_r + \left( \frac{\frac{3n}{4} - (m_1 + m_2 + \dots + m_{r-1})}{m_r} \right) \cdot (a_{r+1} - a_r)$$

---

### 4. Mốt (Mode)
Mốt $M_o$ là giá trị có tần số xuất hiện lớn nhất.
- Giả sử nhóm $[a_j; a_{j+1})$ có tần số lớn nhất $m_j$. Công thức tính:

$$M_o = a_j + \left( \frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \right) \cdot (a_{j+1} - a_j)$$


### Ví dụ minh họa
**Bài tập:** Một lớp học được chia theo nhóm điểm số bài kiểm tra như sau: $[0; 4)$ có 5 học sinh, $[4; 8)$ có 20 học sinh, $[8; 10)$ có 15 học sinh. Tính số trung bình cộng của mẫu số liệu ghép nhóm này.
**Lời giải:**
1. Lấy giá trị đại diện cho mỗi nhóm (trung bình cộng của hai mút):
   - Nhóm 1: $x_1 = (0+4)/2 = 2$. Tần số $m_1 = 5$.
   - Nhóm 2: $x_2 = (4+8)/2 = 6$. Tần số $m_2 = 20$.
   - Nhóm 3: $x_3 = (8+10)/2 = 9$. Tần số $m_3 = 15$.
2. Tổng số học sinh: $n = 5 + 20 + 15 = 40$.
3. Số trung bình cộng:
   $\bar{x} = \frac{2 \times 5 + 6 \times 20 + 9 \times 15}{40} = \frac{10 + 120 + 135}{40} = \frac{265}{40} = 6.625$.
