## Phương trình đường thẳng

<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:1.5em auto;max-width:100%;background:#f8f9fc;border-radius:12px;padding:12px">
  <defs>
    <marker id="arr-axis" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10" fill="#94a3b8"/>
    </marker>
    <marker id="arr-u" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10" fill="#ef4444"/>
    </marker>
  </defs>
  <line x1="50" y1="270" x2="380" y2="270" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#arr-axis)"/>
  <line x1="50" y1="270" x2="50" y2="30" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#arr-axis)"/>
  <text x="375" y="290" fill="#94a3b8" font-size="15" font-style="italic" font-family="serif">x</text>
  <text x="35" y="35" fill="#94a3b8" font-size="15" font-style="italic" font-family="serif">y</text>

  <line x1="90" y1="250" x2="340" y2="70" stroke="#6366f1" stroke-width="3" stroke-linecap="round"/>
  <polygon points="340,70 328,80 332,64" fill="#6366f1"/>

  <text x="345" y="65" fill="#6366f1" font-size="18" font-weight="bold" font-style="italic" font-family="serif">d</text>

  <line x1="190" y1="180" x2="280" y2="115" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-u)"/>
  <text x="282" y="108" fill="#ef4444" font-size="18" font-weight="bold" font-style="italic" font-family="serif">u</text>

  <circle cx="190" cy="180" r="5" fill="#22d3ee" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="198" y="175" fill="#22d3ee" font-size="15" font-weight="600" font-style="italic" font-family="serif">M₀</text>

  <text x="130" y="300" fill="#64748b" font-size="13" text-anchor="middle">O</text>
</svg>

Đường thẳng $d$ đi qua $M_0(x_0; y_0; z_0)$ và có vectơ chỉ phương $\vec{u} = (a; b; c)$:

### Phương trình tham số

$$
\begin{cases}
x = x_0 + at \\
y = y_0 + bt \\
z = z_0 + ct
\end{cases}
\quad (t \in \mathbb{R})
$$

### Phương trình chính tắc

$$
\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c} \quad (a, b, c \neq 0)
$$

## Vị trí tương đối

### Giữa hai đường thẳng

Cho $d_1$ qua $M_1$, $\vec{u}_1$ và $d_2$ qua $M_2$, $\vec{u}_2$:

- $d_1 \parallel d_2$ ⇔ $\vec{u}_1$ cùng phương $\vec{u}_2$, $M_1 \notin d_2$
- $d_1 \equiv d_2$ ⇔ $\vec{u}_1$ cùng phương $\vec{u}_2$, $M_1 \in d_2$
- $d_1 \perp d_2$ ⇔ $\vec{u}_1 \cdot \vec{u}_2 = 0$

### Giữa đường thẳng và mặt phẳng

Cho $d$ có $\vec{u}$, $(P)$ có $\vec{n}$:

- $d \perp (P)$ ⇔ $\vec{u}$ cùng phương $\vec{n}$
- $d \parallel (P)$ ⇔ $\vec{u} \perp \vec{n}$ và $M \notin (P)$
