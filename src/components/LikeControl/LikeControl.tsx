import { JSX } from '@redneckz/uni-jsx';
import { LikeButton } from '../../ui-kit/Button/LikeButton';
import type { UniBlockProps } from '../../types';

export const LikeControl = JSX<UniBlockProps>(({ className, context }) => {
  const likeService = context.useLikeService();

  return (
    <div
      className={`border-main border-2 border-solid bg-white flex w-[125px] items-center justify-center gap-3 p-2 font-sans ${
        className || ''
      }`}
    >
      <LikeButton onClick={likeService.like} ariaLabel="Поставить отметку «лайк»" />
      <LikeButton
        onClick={likeService.dislike}
        className="rotate-180"
        ariaLabel="Поставить отметку «дизлайк»"
      />
      <span className="select-none">{likeService.likeCount}</span>
    </div>
  );
});
