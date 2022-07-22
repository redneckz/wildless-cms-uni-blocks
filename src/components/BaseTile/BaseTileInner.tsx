import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img';
import type { AlignType, BaseTileMainProps } from './BaseTileProps';
import { renderButton } from './renderButton';
import { renderItems } from './renderItems';

const alignFlex: Record<AlignType, string> = {
  left: 'justify-between',
  center: 'justify-center',
  right: 'justify-end',
};
const alignBlock: Record<AlignType, string> = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
};
const alignText: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export interface BaseTileInnerProps extends BaseTileMainProps, UniBlockProps {}

export const BaseTileInner = JSX<BaseTileInnerProps>(
  ({
    context,
    description,
    children,
    buttons,
    image,
    items,
    version = 'primary',
    align = 'left',
  }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    return (
      <div className={`flex grow w-full ${alignFlex[align]}`}>
        <div className={`flex flex-col justify-between ${alignBlock[align]}`}>
          <div>
            {description && (
              <div className={`font-normal text-base mt-4 max-w-[600px] ${alignText[align]}`}>
                {description}
              </div>
            )}
            {children}
            {items?.length && renderItems(items, version)}
          </div>
          {buttons?.length && (
            <div className="flex mt-9 gap-3">
              {buttons.map((button, index) =>
                renderButton(useLink({ router, handlerDecorator }, button), index),
              )}
            </div>
          )}
        </div>
        {image?.src && <Img className="mt-auto ml-7" image={image} />}
      </div>
    );
  },
);
