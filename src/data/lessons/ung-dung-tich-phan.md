## Ứng dụng tích phân

### Diện tích hình phẳng

Diện tích hình phẳng giới hạn bởi $y = f(x)$, $y = g(x)$, $x = a$, $x = b$:

$$
S = \int_a^b |f(x) - g(x)| \, dx
$$

Diện tích hình phẳng giới hạn bởi $y = f(x)$, trục $Ox$, $x = a$, $x = b$:

$$
S = \int_a^b |f(x)| \, dx
$$

### Thể tích khối tròn xoay

Quay hình phẳng giới hạn bởi $y = f(x)$, trục $Ox$, $x = a$, $x = b$ quanh trục $Ox$:

$$
V = \pi \int_a^b [f(x)]^2 \, dx
$$

Quay hình phẳng giới hạn bởi $x = g(y)$, trục $Oy$, $y = a$, $y = b$ quanh trục $Oy$:

$$
V = \pi \int_a^b [g(y)]^2 \, dy
$$

### Thể tích vật thể

Nếu vật thể có diện tích thiết diện vuông góc với $Ox$ là $S(x)$:

$$
V = \int_a^b S(x) \, dx
$$


### Ví dụ minh họa
**Bài tập:** Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2$ và đường thẳng $y = x$.
**Lời giải:**
1. Tìm hoành độ giao điểm: Giải phương trình $x^2 = x \Leftrightarrow x^2 - x = 0 \Leftrightarrow x = 0$ hoặc $x = 1$.
2. Áp dụng công thức tính diện tích:
   $S = \int_0^1 |x^2 - x| dx$.
3. Trên khoảng $(0; 1)$, ta có $x^2 - x < 0$, nên $|x^2 - x| = x - x^2$.
4. Tính tích phân:
   $S = \int_0^1 (x - x^2) dx = \left( \frac{x^2}{2} - \frac{x^3}{3} \right) \Big|_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}$.
