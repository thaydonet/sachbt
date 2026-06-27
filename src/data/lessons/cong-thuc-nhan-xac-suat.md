## Công thức nhân xác suất (Lớp 11)

Công thức nhân xác suất dùng để tính xác suất của biến cố giao $A \cap B$ ("Cả hai biến cố $A$ và $B$ đồng thời xảy ra").

---

### 1. Biến cố độc lập (Independent Events)
Hai biến cố $A$ và $B$ được gọi là độc lập nếu việc xảy ra hay không xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia.

---

### 2. Công thức nhân xác suất cho hai biến cố độc lập
Nếu hai biến cố $A$ và $B$ độc lập thì:

$$P(A \cap B) = P(A) \cdot P(B)$$

---

### 3. Công thức nhân xác suất tổng quát (Sử dụng xác suất có điều kiện)
Với hai biến cố bất kỳ $A$ và $B$ (với $P(A) > 0, P(B) > 0$):

$$P(A \cap B) = P(A) \cdot P(B \mid A) = P(B) \cdot P(A \mid B)$$

trong đó $P(B \mid A)$ là xác suất của $B$ với điều kiện $A$ đã xảy ra.


### Ví dụ minh họa
**Bài tập:** Hai xạ thủ cùng bắn độc lập vào một mục tiêu. Xác suất bắn trúng của xạ thủ thứ nhất là 0.8, của xạ thủ thứ hai là 0.7. Tính xác suất để cả hai người cùng bắn trúng mục tiêu.
**Lời giải:**
- Gọi $A$ là biến cố "Xạ thủ thứ nhất bắn trúng" $\Rightarrow P(A) = 0.8$.
- Gọi $B$ là biến cố "Xạ thủ thứ hai bắn trúng" $\Rightarrow P(B) = 0.7$.
- Vì $A$ và $B$ độc lập, xác suất cả hai cùng trúng là: 
  $P(AB) = P(A) \cdot P(B) = 0.8 \times 0.7 = 0.56$.
