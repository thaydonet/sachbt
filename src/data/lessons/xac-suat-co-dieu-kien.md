## Xác suất có điều kiện

Xác suất có điều kiện là xác suất xảy ra biến cố $B$ với điều kiện biến cố $A$ đã xảy ra.

---

### 1. Định nghĩa
Cho hai biến cố $A$ và $B$ của một phép thử, với $P(A) > 0$.
Xác suất của biến cố $B$ với điều kiện biến cố $A$ đã xảy ra, ký hiệu là $P(B \mid A)$, được tính bằng công thức:

$$P(B \mid A) = \frac{P(A \cap B)}{P(A)}$$

---

### 2. Công thức nhân xác suất
Từ định nghĩa trên, ta có công thức tính xác suất của biến cố giao $A \cap B$:

$$P(A \cap B) = P(A) \cdot P(B \mid A) = P(B) \cdot P(A \mid B)$$

---

### 3. Biến cố độc lập (Ý nghĩa qua xác suất có điều kiện)
Hai biến cố $A$ và $B$ được gọi là độc lập nếu việc xảy ra hay không xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia:

$$P(B \mid A) = P(B \mid \overline{A}) = P(B)$$

Khi đó công thức nhân xác suất trở thành:

$$P(A \cap B) = P(A) \cdot P(B)$$


### Ví dụ minh họa
**Bài tập:** Gieo hai con xúc xắc cân đối. Biết rằng tổng số chấm xuất hiện trên 2 con xúc xắc là 8, tính xác suất để con xúc xắc thứ nhất xuất hiện mặt 5 chấm.
**Lời giải:**
- Gọi $A$: "Con xúc xắc thứ nhất xuất hiện mặt 5 chấm".
- Gọi $B$: "Tổng số chấm xuất hiện là 8".
- Không gian mẫu $\Omega$ gồm $36$ phần tử.
- Các kết quả thuận lợi cho $B$: $(2;6), (3;5), (4;4), (5;3), (6;2) \Rightarrow P(B) = \frac{5}{36}$.
- Biến cố $A \cap B$: "Con thứ nhất ra mặt 5, tổng là 8" $\Rightarrow$ Chỉ có 1 kết quả là $(5;3) \Rightarrow P(A \cap B) = \frac{1}{36}$.
- Xác suất có điều kiện:
  $P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{1/36}{5/36} = \frac{1}{5}$.
