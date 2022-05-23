import { JSX } from '@redneckz/uni-jsx';
import { ContentPageContext } from './ContentPageContext';
import { LikeButton } from './ui-kit/LikeButton';

export interface LikeControlProps {
  className?: string;
  context: ContentPageContext;
}

export const LikeControl = JSX<LikeControlProps>(({ className, context }) => {
  const likeService = context.useLikeService();

  return (
    <div
      className={`border-main border-2 border-solid bg-white flex w-[125px] items-center justify-center gap-3 p-2 font-sans ${
        className || ''
      }`}
    >
      <LikeButton onClick={likeService.like} />
      <LikeButton onClick={likeService.dislike} className="rotate-180" />
      <span className="select-none">{likeService.likeCount}</span>
    </div>
  );
});
