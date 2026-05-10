import { useState, useEffect } from 'react';

export function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseDelay = 2000) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), pauseDelay);
          return;
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timer = setTimeout(handleTyping, speed + (Math.random() * 50));

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDelay]);

  return text;
}
