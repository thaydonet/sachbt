## Tập hợp

Tập hợp là một khái niệm cơ bản của toán học. Ta viết $a \in A$ để chỉ $a$ thuộc tập hợp $A$, và $a \notin A$ để chỉ $a$ không thuộc tập hợp $A$.

### Cách xác định tập hợp
1. Liệt kê các phần tử của tập hợp.
2. Chỉ ra tính chất đặc trưng cho các phần tử của tập hợp.

### Tập hợp con và Tập hợp bằng nhau
- $A \subset B \Leftrightarrow (\forall x \in A \Rightarrow x \in B)$
- $A = B \Leftrightarrow (A \subset B \text{ và } B \subset A)$

---

## Các phép toán trên tập hợp

### 1. Phép giao (Intersection)
Giao của hai tập hợp $A$ và $B$ là tập hợp gồm tất cả các phần tử thuộc cả $A$ và $B$.

$$A \cap B = \{x \mid x \in A \text{ và } x \in B\}$$

### 2. Phép hợp (Union)
Hợp của hai tập hợp $A$ và $B$ là tập hợp gồm tất cả các phần tử thuộc $A$ hoặc thuộc $B$.

$$A \cup B = \{x \mid x \in A \text{ hoặc } x \in B\}$$

### 3. Phép hiệu và Phần bù (Difference & Complement)
- Hiệu của tập hợp $A$ và $B$ là tập hợp gồm tất cả các phần tử thuộc $A$ nhưng không thuộc $B$.

$$A \setminus B = \{x \mid x \in A \text{ và } x \notin B\}$$

- Nếu $B \subset A$ thì hiệu $A \setminus B$ được gọi là **phần bù** của $B$ trong $A$, ký hiệu là $C_A B$.

---

## Các tập hợp số thường gặp
- Tập hợp số tự nhiên: $\mathbb{N} = \{0, 1, 2, \dots\}$
- Tập hợp số nguyên: $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$
- Tập hợp số hữu tỉ: $\mathbb{Q} = \{\frac{a}{b} \mid a, b \in \mathbb{Z}, b \neq 0\}$
- Tập hợp số thực: $\mathbb{R}$
- Các tập hợp con của $\mathbb{R}$: Khoảng $(a;b)$, đoạn $[a;b]$, nửa khoảng $[a;b)$ hoặc $(a;b]$.


### Ví dụ minh họa
**Bài tập:** Cho hai tập hợp $A = \{1, 2, 3, 4, 5\}$ và $B = \{3, 4, 5, 6, 7\}$. Tìm $A \cap B$, $A \cup B$, và $A \setminus B$.
**Lời giải:**
- Giao của $A$ và $B$: $A \cap B = \{3, 4, 5\}$ (các phần tử chung).
- Hợp của $A$ và $B$: $A \cup B = \{1, 2, 3, 4, 5, 6, 7\}$ (tất cả các phần tử).
- Hiệu của $A$ và $B$: $A \setminus B = \{1, 2\}$ (chỉ thuộc $A$ mà không thuộc $B$).
