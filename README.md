# Sách Toán Phổ Thông

Website học toán phổ thông được xây dựng bằng Astro + React + MDX + KaTeX.

## Tính năng

- ✅ Hiển thị công thức toán học với KaTeX
- ✅ Nội dung được tổ chức theo chủ đề
- ✅ Các thành phần tương tác: Định nghĩa, Định lý, Ví dụ, Thực hành, Bài tập
- ✅ Trắc nghiệm tương tác với React
- ✅ Giao diện đẹp mắt, responsive

## Cài đặt

```bash
npm install
```

## Chạy development server

```bash
npm run dev
```

Mở trình duyệt tại: http://localhost:4321

## Build production

```bash
npm run build
```

## Cấu trúc thư mục

```
├── src/
│   ├── components/       # React components
│   │   ├── Definition.jsx
│   │   ├── Theorem.jsx
│   │   ├── Example.jsx
│   │   ├── Practice.jsx
│   │   ├── Exercise.jsx
│   │   └── Quiz.jsx
│   ├── layouts/          # Astro layouts
│   │   ├── Layout.astro
│   │   └── LessonLayout.astro
│   └── pages/            # Nội dung bài học (MDX)
│       ├── index.astro
│       ├── phuong-trinh/
│       │   ├── phuong-trinh-bac-nhat.mdx
│       │   └── phuong-trinh-bac-hai.mdx
│       └── luong-giac/
│           └── cong-thuc-co-ban.mdx
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Thêm bài học mới

Tạo file `.mdx` mới trong thư mục tương ứng với cấu trúc:

```mdx
---
layout: ../../layouts/LessonLayout.astro
title: "Tên bài học"
topic: "ten-chu-de"
---

import Definition from '../../components/Definition.jsx';
import Theorem from '../../components/Theorem.jsx';
import Example from '../../components/Example.jsx';
import Practice from '../../components/Practice.jsx';
import Exercise from '../../components/Exercise.jsx';
import Quiz from '../../components/Quiz.jsx';

# Tiêu đề bài học

## Lý thuyết

<Definition title="Định nghĩa">
Nội dung định nghĩa với công thức: $ax + b = 0$
</Definition>

## Ví dụ

<Example title="Ví dụ 1">
Nội dung ví dụ
</Example>

## Trắc nghiệm

<Quiz 
  client:load
  questions={[
    {
      question: "Câu hỏi?",
      options: ["A", "B", "C", "D"],
      correct: "A"
    }
  ]}
/>
```

## Công nghệ sử dụng

- **Astro**: Framework tĩnh hiệu suất cao
- **React**: Thư viện UI cho các component tương tác
- **MDX**: Markdown + JSX để viết nội dung
- **KaTeX**: Hiển thị công thức toán học
- **Vite**: Build tool nhanh

## License

MIT
