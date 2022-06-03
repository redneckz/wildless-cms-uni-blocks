import { JSX } from '@redneckz/uni-jsx';
import { LikeButton } from './ui-kit/LikeButton';
import { UniBlocksComponentProps } from './types';

export const LikeControl = JSX<UniBlocksComponentProps>(({ className, context }) => {
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
