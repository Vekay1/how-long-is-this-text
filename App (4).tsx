import React, { useRef, useState } from "react";

const RealTimeTextLength: React.FC = () => {
  // Створюємо ref для текстового поля
  const inputRef = useRef<HTMLInputElement>(null);
  // Створюємо стан для зберігання кількості символів
  const [charCount, setCharCount] = useState(0);

  // Функція для оновлення кількості символів
  const handleInputChange = () => {
    if (inputRef.current) {
      // Оновлюємо кількість символів на основі введеного тексту
      setCharCount(inputRef.current.value.length);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Перевірка довжини тексту в реальному часі</h1>
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Введіть текст"
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <p style={{ marginTop: "20px" }}>
        Кількість символів: <strong>{charCount}</strong>
      </p>
    </div>
  );
};

export default RealTimeTextLength;
