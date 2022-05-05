import CloseButton from '../CloseButton';

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';
import React, { useState } from 'react';
import FeedbackTypeStep from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedBackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <p>Hello World</p>

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <p>Hello world</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        <a
          className="underline underline-offset-2"
          href="http://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
