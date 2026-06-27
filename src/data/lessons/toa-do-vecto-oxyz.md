## Hệ tọa độ Oxyz và tọa độ vectơ trong không gian

Hệ tọa độ $Oxyz$ gồm ba trục tọa độ chung gốc $O$ vuông góc từng đôi một: $Ox$ (trục hoành), $Oy$ (trục tung), $Oz$ (trục cao).
- Các vectơ đơn vị tương ứng trên ba trục lần lượt là $\vec{i}, \vec{j}, \vec{k}$ thỏa mãn:

$$|\vec{i}| = |\vec{j}| = |\vec{k}| = 1 \quad \text{và} \quad \vec{i}\cdot\vec{j} = \vec{j}\cdot\vec{k} = \vec{k}\cdot\vec{i} = 0$$

---

### 1. Tọa độ của vectơ
Mỗi vectơ $\vec{a}$ trong không gian được biểu diễn duy nhất qua các vectơ đơn vị: $\vec{a} = x\vec{i} + y\vec{j} + z\vec{k}$.
- Bộ ba số $(x; y; z)$ là tọa độ của vectơ $\vec{a}$, ký hiệu $\vec{a} = (x; y; z)$.
- Nếu $\vec{a} = (x_1; y_1; z_1)$ và $\vec{b} = (x_2; y_2; z_2)$ thì:
  - $\vec{a} \pm \vec{b} = (x_1 \pm x_2; y_1 \pm y_2; z_1 \pm z_2)$
  - $k\vec{a} = (kx_1; ky_1; kz_1)$
  - $\vec{a} \cdot \vec{b} = x_1x_2 + y_1y_2 + z_1z_2$
  - $|\vec{a}| = \sqrt{x_1^2 + y_1^2 + z_1^2}$
  - $\cos(\vec{a}, \vec{b}) = \frac{x_1x_2 + y_1y_2 + z_1z_2}{\sqrt{x_1^2 + y_1^2 + z_1^2} \cdot \sqrt{x_2^2 + y_2^2 + z_2^2}}$
  - $\vec{a} \perp \vec{b} \Leftrightarrow x_1x_2 + y_1y_2 + z_1z_2 = 0$

---

### 2. Tọa độ của điểm
Tọa độ của điểm $M$ là tọa độ của vectơ $\vec{OM}$. Ký hiệu $M(x; y; z)$.
- Nếu $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$ thì:
  - $\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$
  - Khoảng cách giữa hai điểm: $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$
  - Tọa độ trung điểm $I$ của đoạn thẳng $AB$: $x_I = \frac{x_A+x_B}{2}, y_I = \frac{y_A+y_B}{2}, z_I = \frac{z_A+z_B}{2}$
  - Tọa độ trọng tâm $G$ của tam giác $ABC$: $x_G = \frac{x_A+x_B+x_C}{3}, y_G = \frac{y_A+y_B+y_C}{3}, z_G = \frac{z_A+z_B+z_C}{3}$
