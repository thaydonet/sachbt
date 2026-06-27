## Công thức xác suất toàn phần và Công thức Bayes

---

### I. Công thức xác suất toàn phần (Total Probability Theorem)

Cho hai biến cố $A$ và $B$. Khi đó, ta có công thức tính xác suất biến cố $B$ theo biến cố $A$ và biến cố đối $\overline{A}$:

$$P(B) = P(A) \cdot P(B \mid A) + P(\overline{A}) \cdot P(B \mid \overline{A})$$

#### Dạng tổng quát:
Nếu các biến cố $A_1, A_2, \dots, A_n$ xung khắc từng đôi một và nhóm của chúng bao phủ toàn bộ không gian mẫu (hệ đầy đủ các biến cố) thì với biến cố $B$ bất kỳ:

$$P(B) = \sum_{i=1}^n P(A_i) \cdot P(B \mid A_i)$$

---

### II. Công thức Bayes (Bayes' Theorem)

Công thức Bayes dùng để cập nhật xác suất của một nguyên nhân (biến cố $A$) sau khi biết kết quả (biến cố $B$ đã xảy ra):

$$P(A \mid B) = \frac{P(A) \cdot P(B \mid A)}{P(B)}$$

#### Thay công thức xác suất toàn phần vào mẫu số:

$$P(A \mid B) = \frac{P(A) \cdot P(B \mid A)}{P(A) \cdot P(B \mid A) + P(\overline{A}) \cdot P(B \mid \overline{A})}$$

Công thức này cực kỳ quan trọng trong khoa học dữ liệu, y học (chẩn đoán bệnh) và trí tuệ nhân tạo.


### Ví dụ minh họa
**Bài tập:** Có 2 hộp bi. Hộp I có 3 bi đỏ và 2 bi xanh. Hộp II có 4 bi đỏ và 1 bi xanh. Chọn ngẫu nhiên 1 hộp rồi từ hộp đó lấy ngẫu nhiên 1 viên bi.
1. Tính xác suất để lấy được bi đỏ.
2. Giả sử lấy được bi đỏ, tính xác suất để viên bi đó thuộc Hộp I.
**Lời giải:**
Gọi $H_1, H_2$ là biến cố "Chọn Hộp I" và "Chọn Hộp II". Ta có $P(H_1) = P(H_2) = 0.5$.
Gọi $D$ là biến cố "Lấy được bi đỏ".
Theo công thức xác suất toàn phần:
$\begin{aligned} P(D) &= P(H_1)P(D|H_1) + P(H_2)P(D|H_2) \\ &= 0.5 \times \frac{3}{5} + 0.5 \times \frac{4}{5} = 0.3 + 0.4 = 0.7. \end{aligned}$

Tính xác suất theo Bayes:
$P(H_1|D) = \frac{P(H_1)P(D|H_1)}{P(D)} = \frac{0.3}{0.7} = \frac{3}{7} \approx 0.428$.
