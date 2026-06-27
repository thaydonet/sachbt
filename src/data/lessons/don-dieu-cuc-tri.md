## Sự biến thiên và Cực trị của hàm số

---

### I. Tính đơn điệu của hàm số (Monotonicity)

Cho hàm số $y = f(x)$ có đạo hàm trên khoảng $K$:
- Nếu $f'(x) > 0$ với mọi $x \in K$ thì hàm số đồng biến trên $K$.
- Nếu $f'(x) < 0$ với mọi $x \in K$ thì hàm số nghịch biến trên $K$.
- Nếu $f'(x) = 0$ với mọi $x \in K$ thì hàm số không đổi trên $K$.

#### Quy tắc xét tính đơn điệu:
1. Tìm tập xác định của hàm số.
2. Tính đạo hàm $f'(x)$. Tìm các điểm $x_i$ tại đó đạo hàm bằng $0$ hoặc không xác định.
3. Sắp xếp các điểm $x_i$ theo thứ tự tăng dần và lập bảng xét dấu $f'(x)$.
4. Kết luận các khoảng đồng biến, nghịch biến của hàm số.

---

### II. Cực trị của hàm số (Local Extrema)

Điểm $x_0$ được gọi là **điểm cực đại** của hàm số $f(x)$ nếu tồn tại một khoảng $(a;b)$ chứa $x_0$ sao cho $f(x) < f(x_0)$ với mọi $x \in (a;b) \setminus \{x_0\}$.
- Tương tự, $x_0$ là **điểm cực tiểu** nếu $f(x) > f(x_0)$ với mọi $x \in (a;b) \setminus \{x_0\}$.

#### Điều kiện cần và đủ để đạt cực trị:
- **Điều kiện cần (Định lý Fermat)**: Nếu $f(x)$ đạt cực trị tại $x_0$ và có đạo hàm tại đó thì $f'(x_0) = 0$.
- **Dấu hiệu 1 (Xét sự đổi dấu của $f'(x)$)**:
  - Nếu $f'(x)$ đổi dấu từ **dương sang âm** khi qua $x_0$ thì $x_0$ là điểm cực đại.
  - Nếu $f'(x)$ đổi dấu từ **âm sang dương** khi qua $x_0$ thì $x_0$ là điểm cực tiểu.
- **Dấu hiệu 2 (Sử dụng đạo hàm cấp hai $f''(x)$)**:
  - Nếu $f'(x_0) = 0$ và $f''(x_0) < 0$ thì $x_0$ là điểm cực đại.
  - Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $x_0$ là điểm cực tiểu.


### Ví dụ minh họa
**Bài tập:** Tìm các khoảng đơn điệu và điểm cực trị của hàm số $y = -x^3 + 3x + 1$.
**Lời giải:**
- Tập xác định $D = \mathbb{R}$.
- Đạo hàm: $y' = -3x^2 + 3$.
- Cho $y' = 0 \Leftrightarrow -3x^2 + 3 = 0 \Leftrightarrow x^2 = 1 \Leftrightarrow x = 1$ hoặc $x = -1$.
- Bảng xét dấu $y'$ (quy tắc trong trái ngoài cùng):
  - $x \in (-\infty; -1) \cup (1; +\infty) \Rightarrow y' < 0$ (hàm số nghịch biến).
  - $x \in (-1; 1) \Rightarrow y' > 0$ (hàm số đồng biến).
- Cực đại: Tại $x = 1$, $y_{CĐ} = 3$. Điểm cực đại của đồ thị hàm số là $(1; 3)$.
- Cực tiểu: Tại $x = -1$, $y_{CT} = -1$. Điểm cực tiểu của đồ thị hàm số là $(-1; -1)$.
