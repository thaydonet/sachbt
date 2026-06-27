## Khái niệm vectơ

Vectơ là một đoạn thẳng có hướng, nghĩa là đã chỉ rõ điểm đầu và điểm cuối.
- Ký hiệu: $\vec{AB}$ (điểm đầu $A$, điểm cuối $B$) hoặc các chữ cái thường kèm mũi tên $\vec{a}, \vec{b}$.
- Độ dài của vectơ $\vec{AB}$ là khoảng cách giữa $A$ và $B$, ký hiệu là $|\vec{AB}|$.
- Vectơ-không: là vectơ có điểm đầu và điểm cuối trùng nhau, ký hiệu là $\vec{0}$. Độ dài của $\vec{0}$ bằng $0$.
- Hai vectơ **cùng phương** nếu giá của chúng song song hoặc trùng nhau.
- Hai vectơ **cùng hướng** hoặc **ngược hướng** nếu chúng cùng phương.
- Hai vectơ **bằng nhau** ($\vec{a} = \vec{b}$) nếu chúng cùng hướng và cùng độ dài.

---

## Các phép toán vectơ

### 1. Phép cộng hai vectơ
- **Quy tắc ba điểm**: Với ba điểm $A, B, C$ bất kỳ:

$$\vec{AB} + \vec{BC} = \vec{AC}$$

- **Quy tắc hình bình hành**: Nếu $ABCD$ là hình bình hành:

$$\vec{AB} + \vec{AD} = \vec{AC}$$

### 2. Phép hiệu hai vectơ
- Vectơ đối của $\vec{a}$ là vectơ $-\vec{a}$, cùng độ dài nhưng ngược hướng với $\vec{a}$. Ta có $\vec{a} + (-\vec{a}) = \vec{0}$.
- Phép trừ:

$$\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$$

- **Quy tắc ba điểm cho hiệu**: Với ba điểm $O, A, B$ bất kỳ:

$$\vec{OB} - \vec{OA} = \vec{AB}$$

### 3. Tích của một số với một vectơ
Tích của một số thực $k \neq 0$ với vectơ $\vec{a} \neq \vec{0}$ là một vectơ, ký hiệu là $k\vec{a}$:
- Cùng hướng với $\vec{a}$ nếu $k > 0$, ngược hướng với $\vec{a}$ nếu $k < 0$.
- Độ dài: $|k\vec{a}| = |k| \cdot |\vec{a}|$.
- **Trung điểm**: Nếu $I$ là trung điểm của đoạn thẳng $AB$, thì với mọi điểm $M$: $\vec{MA} + \vec{MB} = 2\vec{MI}$.
- **Trọng tâm**: Nếu $G$ là trọng tâm của tam giác $ABC$, thì với mọi điểm $M$: $\vec{MA} + \vec{MB} + \vec{MC} = 3\vec{MG}$.


### Ví dụ minh họa
**Bài tập:** Cho hình bình hành $ABCD$. Chứng minh rằng $\vec{AB} + \vec{AD} = \vec{AC}$.
**Lời giải:**
- Theo quy tắc hình bình hành: Gốc chung tại $A$, tổng của hai vectơ cạnh kề $\vec{AB}$ và $\vec{AD}$ chính là vectơ đường chéo xuất phát từ $A$.
- Do đó: $\vec{AB} + \vec{AD} = \vec{AC}$ (điều phải chứng minh).
- Cũng có thể giải bằng quy tắc 3 điểm: Do $ABCD$ là hình bình hành nên $\vec{AD} = \vec{BC}$. Ta có $\vec{AB} + \vec{AD} = \vec{AB} + \vec{BC} = \vec{AC}$.
