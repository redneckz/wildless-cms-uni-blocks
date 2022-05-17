import { JSX } from '@redneckz/uni-jsx';
import { ContentPageContext } from '../ContentPageContext';

export interface LikeControlProps {
  className?: string;
  context: ContentPageContext;
}

export interface LikeButtonProps {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
}

export const LIKE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M21.48 11.95c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1M7.48 18.35l3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l1.24-3.77"
    />
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9Z"
    />
  </svg>
);

export const LikeControl = JSX<LikeControlProps>(({ className, context }) => {
  const likeService = context.useLikeService();

  return (
    <div
      className={`fixed bottom-0 right-0 border-second-light border-2 bg-white rounded-tl-lg flex w-[125px] items-center justify-center gap-3 p-2 font-sans ${
        className || ''
      }`}
    >
      <LikeButton onClick={likeService.like} />
      <LikeButton onClick={likeService.dislike} className="rotate-180" />
      <span className="select-none">{likeService.likeCount}</span>
    </div>
  );
});

export const LikeButton = JSX<LikeButtonProps>(({ className, onClick }) => (
  <button type="button" className={`border-0 w-6 bg-inherit ${className || ''}`} onClick={onClick}>
    {LIKE_ICON}
  </button>
));
