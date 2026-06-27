## Khái niệm hàm số và đồ thị

### Định nghĩa hàm số
Cho tập hợp khác rỗng $D \subset \mathbb{R}$. Nếu với mỗi giá trị $x \in D$ có một và chỉ một giá trị tương ứng $y \in \mathbb{R}$ thì ta có một **hàm số**.
- $x$ được gọi là biến số (hay đối số).
- $y$ được gọi là hàm số của $x$.
- Tập hợp $D$ được gọi là **tập xác định** (TXĐ).
- Tập hợp $T = \{f(x) \mid x \in D\}$ được gọi là **tập giá trị** (TGT).

### Đồ thị hàm số
Đồ thị của hàm số $y = f(x)$ xác định trên tập $D$ là tập hợp tất cả các điểm $M(x; f(x))$ trên mặt phẳng tọa độ $Oxy$ với mọi $x \in D$.

---

## Sự biến thiên của hàm số

Cho hàm số $y = f(x)$ xác định trên khoảng $K \subset \mathbb{R}$:

### Hàm số đồng biến (tăng)
Hàm số đồng biến trên $K$ nếu với mọi $x_1, x_2 \in K$:

$$x_1 < x_2 \Rightarrow f(x_1) < f(x_2)$$

### Hàm số nghịch biến (giảm)
Hàm số nghịch biến trên $K$ nếu với mọi $x_1, x_2 \in K$:

$$x_1 < x_2 \Rightarrow f(x_1) > f(x_2)$$


### Ví dụ minh họa
**Bài tập:** Tìm tập xác định của hàm số $y = \sqrt{x - 2} + \frac{1}{x - 3}$.
**Lời giải:**
Hàm số xác định khi và chỉ khi:
$\begin{cases} x - 2 \ge 0 \\ x - 3 \neq 0 \end{cases} \Leftrightarrow \begin{cases} x \ge 2 \\ x \neq 3 \end{cases}$
Vậy tập xác định của hàm số là $D = [2; +\infty) \setminus \{3\}$.
