## Số phức và các phép toán cơ bản

### 1. Định nghĩa số phức
Số phức (Complex Number) là biểu thức có dạng:

$$z = a + bi \quad (a, b \in \mathbb{R})$$

trong đó:
- $a$ là phần thực (real part).
- $b$ là phần ảo (imaginary part).
- $i$ là đơn vị ảo thỏa mãn: $i^2 = -1$.
- Tập hợp các số phức ký hiệu là $\mathbb{C}$.

---

### 2. Các khái niệm liên quan
- **Số phức bằng nhau**: $a + bi = c + di \Leftrightarrow a = c \text{ và } b = d$.
- **Biểu diễn hình học**: Số phức $z = a + bi$ được biểu diễn bởi điểm $M(a; b)$ trên mặt phẳng tọa độ $Oxy$.
- **Môđun của số phức**: là độ dài của vectơ $\vec{OM}$, ký hiệu là $|z|$:

$$|z| = \sqrt{a^2 + b^2}$$

- **Số phức liên hợp**: Số phức liên hợp của $z = a + bi$ là $\bar{z} = a - bi$.
  - Tính chất: $|z| = |\bar{z}|$, $z \cdot \bar{z} = a^2 + b^2 = |z|^2$.

---

### 3. Phép toán trên tập số phức
- **Phép cộng và trừ**: Cộng/trừ phần thực với phần thực, phần ảo với phần ảo.

$$(a + bi) \pm (c + di) = (a \pm c) + (b \pm d)i$$

- **Phép nhân**: Nhân phân phối bình thường và thay $i^2 = -1$.

$$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$

- **Phép chia**: Nhân cả tử và mẫu với số phức liên hợp của mẫu.

$$\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{c^2 + d^2} = \frac{ac+bd}{c^2+d^2} + \frac{bc-ad}{c^2+d^2}i$$
