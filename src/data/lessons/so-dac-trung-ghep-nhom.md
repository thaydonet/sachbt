## Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm

Để phân tích xu thế trung tâm của mẫu số liệu ghép nhóm, ta sử dụng các đại lượng sau:

---

### 1. Số trung bình cộng (Mean)

$$\bar{x} = \frac{m_1x_1 + m_2x_2 + \dots + m_kx_k}{n}$$

trong đó $x_i$ là giá trị đại diện của nhóm $i$, $m_i$ là tần số của nhóm $i$, và $n$ là tổng tần số.

---

### 2. Trung vị (Median)
Được ký hiệu là $M_e$.
- Giả sử nhóm chứa trung vị là $[a_p; a_{p+1})$. Công thức tính:

$$M_e = a_p + \left( \frac{\frac{n}{2} - (m_1 + m_2 + \dots + m_{p-1})}{m_p} \right) \cdot (a_{p+1} - a_p)$$

---

### 3. Tứ phân vị (Quartiles)
- Tứ phân vị thứ hai $Q_2 = M_e$.
- Tứ phân vị thứ nhất $Q_1$ và thứ ba $Q_3$ được tính bằng các công thức tương tự dựa vào vị trí $\frac{n}{4}$ và $\frac{3n}{4}$.

---

### 4. Mốt (Mode)
Được ký hiệu là $M_o$.
- Giả sử nhóm có tần số lớn nhất là $[a_j; a_{j+1})$. Công thức tính:

$$M_o = a_j + \left( \frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \right) \cdot (a_{j+1} - a_j)$$


### Ví dụ minh họa
**Bài tập:** Cho mẫu số liệu ghép nhóm: $[0; 4)$ có 5 học sinh, $[4; 8)$ có 20 học sinh, $[8; 10)$ có 15 học sinh. Hãy ước lượng Mốt (Mode) của mẫu số liệu.
**Lời giải:**
- Nhóm chứa mốt là nhóm có tần số lớn nhất: Nhóm $[4; 8)$ với tần số $m_2 = 20$.
- Giá trị $L_m = 4$ (đầu mút trái), khoảng cách $h = 8 - 4 = 4$.
- Các tần số liền kề: $m_{trước} = m_1 = 5$, $m_{sau} = m_3 = 15$.
- Áp dụng công thức ước lượng mốt:
  $M_o = 4 + \left( \frac{20 - 5}{(20 - 5) + (20 - 15)} \right) \times 4 = 4 + \left( \frac{15}{15 + 5} \right) \times 4 = 4 + \frac{15}{20} \times 4 = 4 + 3 = 7$.
