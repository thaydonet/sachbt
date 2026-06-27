## Phương trình quy về phương trình bậc hai

Trong chương trình toán lớp 10, ta tập trung giải hai dạng phương trình vô tỷ cơ bản:

---

### Dạng 1: $\sqrt{ax^2 + bx + c} = \sqrt{dx^2 + ex + f}$

Để giải phương trình này, ta bình phương hai vế và đặt điều kiện cho một trong hai biểu thức dưới căn không âm:

$$\sqrt{f(x)} = \sqrt{g(x)} \Leftrightarrow \begin{cases} f(x) \ge 0 \quad (\text{hoặc } g(x) \ge 0) \\ f(x) = g(x) \end{cases}$$

**Các bước giải:**
1. Bình phương hai vế thu được phương trình bậc nhất hoặc bậc hai: $f(x) = g(x)$.
2. Giải phương trình này để tìm các nghiệm thử.
3. Thay các nghiệm thử vào biểu thức $f(x)$ hoặc $g(x)$. Nghiệm nào làm cho biểu thức không âm thì nhận, ngược lại thì loại.

---

### Dạng 2: $\sqrt{ax^2 + bx + c} = dx + e$

Để giải phương trình này, ta đặt điều kiện cho vế phải không âm trước khi bình phương hai vế:

$$\sqrt{f(x)} = g(x) \Leftrightarrow \begin{cases} g(x) \ge 0 \\ f(x) = [g(x)]^2 \end{cases}$$

**Các bước giải:**
1. Tìm điều kiện của $x$ để vế phải không âm: $dx + e \ge 0 \Rightarrow x \ge -\frac{e}{d}$ (nếu $d > 0$).
2. Bình phương hai vế: $ax^2 + bx + c = (dx + e)^2$.
3. Giải phương trình bậc hai nhận được.
4. Đối chiếu nghiệm với điều kiện để chọn nghiệm thực sự của phương trình.


### Ví dụ minh họa
**Bài tập:** Giải phương trình $\sqrt{2x^2 - 3x - 5} = x - 1$.
**Lời giải:**
Bình phương hai vế (với điều kiện $x - 1 \ge 0 \Leftrightarrow x \ge 1$):
$\begin{aligned} 2x^2 - 3x - 5 &= (x - 1)^2 \\ 2x^2 - 3x - 5 &= x^2 - 2x + 1 \\ x^2 - x - 6 &= 0 \end{aligned}$
Giải phương trình bậc hai ta được $x = 3$ hoặc $x = -2$.
- Thay $x = -2$ vào điều kiện $x \ge 1$ (Loại).
- Thay $x = 3$ vào điều kiện $x \ge 1$ (Nhận).
Vậy tập nghiệm của phương trình là $S = \{3\}$.
