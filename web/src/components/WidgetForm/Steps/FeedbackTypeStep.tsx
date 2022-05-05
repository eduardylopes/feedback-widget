import React from 'react';
import { FeedBackType, feedbackTypes } from '..';

interface FeedBackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedBackType) => void;
}

export default function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedBackTypeStepProps) {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => (
        <button
          key={key}
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          onClick={() => onFeedbackTypeChanged(key as FeedBackType)}
          type="button"
        >
          <img src={value.image.source} alt={value.image.alt} />
          <span>{value.title}</span>
        </button>
      ))}
    </div>
  );
}
