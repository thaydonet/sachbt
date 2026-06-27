## Hàm số liên tục

---

### 1. Liên tục tại một điểm
Cho hàm số $y = f(x)$ xác định trên khoảng $K$ và $x_0 \in K$.
Hàm số $y = f(x)$ được gọi là **liên tục tại điểm $x_0$** nếu:

$$\lim_{x \to x_0} f(x) = f(x_0)$$

- Nếu hàm số không liên tục tại $x_0$ thì được gọi là **gián đoạn tại $x_0$**.

---

### 2. Liên tục trên một khoảng, một đoạn
- Hàm số liên tục trên khoảng $(a; b)$ nếu nó liên tục tại mọi điểm thuộc khoảng đó.
- Hàm số liên tục trên đoạn $[a; b]$ nếu nó liên tục trên $(a; b)$ và thỏa mãn:

$$\lim_{x \to a^+} f(x) = f(a) \quad \text{và} \quad \lim_{x \to b^-} f(x) = f(b)$$

- Đồ thị của hàm số liên tục trên một khoảng là một **đường liền nét** trên khoảng đó.

---

### 3. Các định lý cơ bản
- **Định lý 1**: Các hàm số sơ cấp cơ bản (đa thức, phân thức hữu tỷ, lượng giác, mũ, lôgarit) liên tục trên tập xác định của chúng.
- **Định lý 2 (Định lý giá trị trung gian)**: Nếu hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$ và $f(a) \cdot f(b) < 0$ thì tồn tại ít nhất một điểm $c \in (a; b)$ sao cho:

$$f(c) = 0$$

(Có nghĩa là phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc khoảng $(a; b)$).


### Ví dụ minh họa
**Bài tập:** Cho hàm số $f(x) = \begin{cases} \frac{x^2 - 1}{x - 1} & \text{nếu } x \neq 1 \\ 2 & \text{nếu } x = 1 \end{cases}$. Xét tính liên tục của hàm số tại $x_0 = 1$.
**Lời giải:**
- Tại $x_0 = 1$, ta có $f(1) = 2$.
- Tính giới hạn khi $x \to 1$:
  $\lim_{x \to 1} f(x) = \lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} \frac{(x - 1)(x + 1)}{x - 1} = \lim_{x \to 1} (x + 1) = 2$.
- Nhận thấy $\lim_{x \to 1} f(x) = f(1) = 2$.
Vậy hàm số $f(x)$ liên tục tại $x_0 = 1$.
