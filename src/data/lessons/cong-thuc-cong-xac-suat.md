## Công thức cộng xác suất (Lớp 11)

Công thức cộng xác suất dùng để tính xác suất của biến cố hợp $A \cup B$ ("Biến cố $A$ hoặc biến cố $B$ xảy ra").

---

### 1. Biến cố xung khắc (Mutually Exclusive Events)
Hai biến cố $A$ và $B$ được gọi là xung khắc nếu chúng không thể đồng thời xảy ra trong một phép thử:

$$A \cap B = \emptyset$$

---

### 2. Công thức cộng xác suất cho hai biến cố xung khắc
Nếu hai biến cố $A$ và $B$ xung khắc thì:

$$P(A \cup B) = P(A) + P(B)$$

---

### 3. Công thức cộng xác suất tổng quát
Với hai biến cố bất kỳ $A$ và $B$:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

---

### 4. Công thức biến cố đối
Với mọi biến cố $A$:

$$P(\overline{A}) = 1 - P(A)$$


### Ví dụ minh họa
**Bài tập:** Trong một hộp có 5 bi xanh và 4 bi đỏ. Rút ngẫu nhiên 1 viên bi. Tính xác suất để được bi xanh hoặc bi đỏ.
**Lời giải:**
- Gọi $A$ là biến cố "Rút được bi xanh", $B$ là biến cố "Rút được bi đỏ".
- Vì chỉ rút 1 viên, $A$ và $B$ là hai biến cố xung khắc (không thể cùng xảy ra).
- Ta có: $P(A) = \frac{5}{9}$ và $P(B) = \frac{4}{9}$.
- Xác suất cần tìm: $P(A \cup B) = P(A) + P(B) = \frac{5}{9} + \frac{4}{9} = 1$.
