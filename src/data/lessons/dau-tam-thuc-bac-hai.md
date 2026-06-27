## Tam thức bậc hai

Tam thức bậc hai đối với $x$ là biểu thức có dạng:

$$f(x) = ax^2 + bx + c \quad (a \neq 0)$$

---

## Định lý về dấu của tam thức bậc hai

Cho tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \neq 0$) có biệt thức $\Delta = b^2 - 4ac$:

### Trường hợp 1: $\Delta < 0$
$f(x)$ luôn cùng dấu với hệ số $a$ với mọi $x \in \mathbb{R}$:

$$a \cdot f(x) > 0 \quad \forall x \in \mathbb{R}$$

### Trường hợp 2: $\Delta = 0$
$f(x)$ cùng dấu với hệ số $a$ với mọi $x \neq -\frac{b}{2a}$:

$$f(x) \text{ cùng dấu với } a \quad \forall x \in \mathbb{R} \setminus \left\{-\frac{b}{2a}\right\}$$

### Trường hợp 3: $\Delta > 0$
$f(x)$ có hai nghiệm phân biệt $x_1 < x_2$. Khi đó:
- $f(x)$ trái dấu với hệ số $a$ với mọi $x$ thuộc khoảng $(x_1; x_2)$ ("trong trái").
- $f(x)$ cùng dấu với hệ số $a$ với mọi $x$ thuộc hai khoảng $(-\infty; x_1)$ và $(x_2; +\infty)$ ("ngoài cùng").

---

## Ứng dụng giải bất phương trình bậc hai
Bất phương trình bậc hai ẩn $x$ là bất phương trình có dạng $f(x) > 0$ (hoặc $\ge 0, < 0, \le 0$). Ta sử dụng bảng xét dấu của tam thức bậc hai để kết luận tập nghiệm.


### Ví dụ minh họa
**Bài tập:** Xét dấu tam thức bậc hai $f(x) = -x^2 + 4x - 3$.
**Lời giải:**
- Ta có phương trình $-x^2 + 4x - 3 = 0 \Leftrightarrow x = 1$ hoặc $x = 3$.
- Hệ số $a = -1 < 0$.
- Áp dụng quy tắc "Trong trái - Ngoài cùng" đối với 2 nghiệm $1$ và $3$:
  - $f(x) > 0$ khi $x \in (1; 3)$ (Trong khoảng 2 nghiệm: trái dấu với $a$).
  - $f(x) < 0$ khi $x \in (-\infty; 1) \cup (3; +\infty)$ (Ngoài khoảng 2 nghiệm: cùng dấu với $a$).
